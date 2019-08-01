require('lib/setup')

Spine           = require('spine')
$               = Spine.$
Extender        = require('extensions/controller_extender')
Settings        = require("models/settings")
User            = require("models/user")
Mysql           = require("models/mysql")

class App extends Spine.Controller

  @extend Extender
  
  elements:
    'form'          : 'form'
    '#opt-download' : 'downloadEl'
    '#opt-restore'  : 'restoreEl'
    '#opt-dump'     : 'dumpEl'
    '#opt-options'  : 'optionsEl'
    '#opt-logout'   : 'logoutEl'
    '#time-info'    : 'timeInfoEl'

  events:
    'change #opt-options' : 'change'
    'click .ask'          : 'ask'
    # 'click #opt-logout'   : 'logout'
    'focus #opt-options, #opt-restore'   : 'stopPing'
    'blur #opt-options, #opt-restore'    : 'startPing'
    
  statusTemplate:  (item) ->
    $('#statusTemplate').tmpl item
  
  optionsTemplate:  (item) ->
    $('#optionsTemplate').tmpl item
  
  timeInfoTemplate:  (item) ->
    $('#timeInfoTemplate').tmpl item
  
  constructor: ->
    super
    
    Mysql.bind('ajaxError', Mysql.ajaxError)
    Mysql.bind('ajaxSuccess', Mysql.ajaxSuccess)
    Mysql.bind('refresh', @proxy @mysqlRefreshed)

    @settings =
      dump:
        processDefault: $('span', @dumpEl).html()
        processAsk: 'Datensicherung starten?\n\nFortfahren?'
        processBefore:'Sicherung läuft...'
        processDone: 'Gesichert'
        processFail: 'Fehler'
      restore:
        processDefault:$('span', @restoreEl).html()
        processAsk: 'Soll diese Sicherung wiederhergestellt werden?'
        processBefore: 'Wiederherstellung läuft...'
        processDone: 'Wiederhergestellt'
        processFail: 'Fehler'
      

    @routes
      '/item/:pid': (params) ->
        @showDetails params.pid
      '/*glob' : (params) ->
    
  renderStatus: (item) ->
    @statusEl.html @statusTemplate item
  
  renderOptions: (items) ->
    if items.length
      emptyText = 'Sicherung auswählen'
    else
      emptyText = 'keine Sicherung vorhanden'

    items.unshift
      created: emptyText

    @optionsEl.html @optionsTemplate items
    @change()
    
  renderInfo: (item) ->
    @timeInfoEl.html @timeInfoTemplate item

  init: ->
    User.fetch()
    # deprecated (we are already authorized)
    # User.getToken( done: @authorized ) 
    @authorized()
  
  authorized: =>
    @optionsEl.change()
    @getMysql()
    @loadSettings()

  ask: (e) ->
    el = $(e.currentTarget)
    @dataType = type = el.data('type')
    
    res = (res = @settings[type].processAsk) ? res : null;

    return unless res

    if (window.confirm(res))
      data = el.data()
      @submit(data);
    else
      alert("Vorgang wurde abgebrochen")

  submit: (data) =>
    User.fetch()
    return User.logout() unless User.first()

    token = User.first()?.token

    $.ajax
      url: data.href,
      type: 'POST'
      beforeSend: @mysqlBeforeSend
      headers:
        Accept: 'application/json'
        Authorization: 'Bearer '+token
      data: @form.serialize()
    .done( @mysqlDone() )
    .fail( @mysqlFail() )

  loadSettings: ->
    Settings.load( done: @settingsDone )

  settingsDone: ( settings ) =>
    @pingInterval = settings.Refresh.rate #ping interval in seconds
    @startPing()

  settingsFail: ->
    @log 'settingsFail'

  mysqlBeforeSend: =>
    buttonTextEl = $('[data-type='+@dataType+']>span')
    savedButtonText = buttonTextEl.html()
    buttonTextEl.html( @settings[@dataType].processBefore )
    func = ->
      buttonSymbolEl.removeClass('glyphicon-check')
      buttonTextEl = $('[data-type='+@dataType+']>span').html( savedButtonText )

  mysqlDone: ( settings ) =>
    (data, state, xhr) =>
      buttonSymbolEl = $('[data-type='+@dataType+']>i')
      buttonSymbolEl.addClass('glyphicon-check')
      buttonTextEl = $('[data-type='+@dataType+']>span')
      buttonTextEl.html( @settings[@dataType].processDone )
      func = ->
        buttonSymbolEl.removeClass('glyphicon-check')
        buttonTextEl = $('[data-type='+@dataType+']>span').html( @settings[@dataType].processDefault )
      @delay func, 3000
      @getMysql()

  mysqlFail: =>
    (xhr, state, responseText) =>
      buttonSymbolEl = $('[data-type='+@dataType+']>i')
      buttonSymbolEl.addClass('glyphicon-exclamation-sign')
      buttonTextEl = $('[data-type='+@dataType+']>span')
      buttonTextEl.html( @settings[@dataType].processFail + ': ' + responseText )
      func = ->
        buttonSymbolEl.removeClass('glyphicon-exclamation-sign')
        buttonTextEl = $('[data-type='+@dataType+']>span').html( @settings[@dataType].processDefault )
      @delay func, 20000

  getMysql: ->
    User.fetch()
    return User.logout() unless User.first()

    token = User.first().token

    Mysql.fetch
      headers:
        Accept: 'application/json'
        Authorization: 'Bearer '+token

  mysqlRefreshed: (items) ->
    @refreshElements()
    @renderOptions(items.slice())
    @renderInfo(if items.length then items[0] else {})
    # @resetFormControls()

  logout: (e) ->
    e.preventDefault()
    e.stopPropagation()
    User.logout()

  resetFormControls: ->
    $('.has-success').removeClass('has-success')

  startPing: ->
    return unless @pingInterval

    @stopPing(@pingIntervalId) if @pingIntervalId
    @pingIntervalId = setInterval(@getMysql, @pingInterval*1000)

  stopPing: ->
    clearInterval(@pingIntervalId)

  change: (e) ->
    val = @optionsEl.val()
            
    @downloadEl.attr('disabled', !val).attr('data-fn', val)
    @restoreEl.attr('disabled', !val).attr('data-fn', val);
                
    if(val)
        @restoreEl.focus()
    else
        @dumpEl.focus()

  hidemodal: (e) =>
    @navigate '/'
    
  hiddenmodal: (e) =>
    @log 'hiddenmodal'
    
  showmodal: (e) =>
    @log 'showmodal'
    
  shownmodal: (e) =>
    @log 'shownmodal'
    
module.exports = App
