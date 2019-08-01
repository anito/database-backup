Spine     = require('spine')
$         = Spine.$
Model     = Spine.Model
Log       = Spine.Log
Extender  = require("extensions/model_extender")

require('spine/lib/local')

class Settings extends Spine.Model
  @configure 'Settings', 'Refresh', 'Error'
  
  @extend Model.Local
  @extend Extender
  
  @load: ( options ) ->
    Model.User.fetch()
    return Model.User.logout() unless token = Model.User.first()

    token = Model.User.first().token

    $.ajax
      url: base_url + '/api/settings/read'
      contentType: 'application/json'
      headers:
        Accept : 'application/json'
        Authorization: 'Bearer '+token
    .done( @done( options ) )
    .fail( @fail( options ) )

  @done: (options) =>
    (json, status, xhr) =>
      settings = json.data.settings
      s = new @( settings )
      s.save()
      options.done?.call( null, settings )

  @fail: ( options ) =>
    (json, status, xhr) =>
      User.redirect '/logout'

  init: ( instance ) ->

module.exports = Model.Settings = Settings