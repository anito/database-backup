<?php
/**
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2005-2012, Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       Cake.View.Pages
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
if (Configure::read('debug') == 0):
//throw new NotFoundException();
endif;
?>
<div itemscope itemtype="http://schema.org/SoftwareApplication" class="container">
    <header class="jumbotron masthead">
        <div class="inner">
            <h1></h1>
            <p>Datenbank</p>
            <?php echo $this->Form->create('User', array('url' => '/u')); ?>
                <table class="download-info button-wrap">
                    <tr style="text-align: center">
                        <td>
                            <?php echo $this->Form->button('<i class="glyphicon glyphicon-download"></i><span>  Sichern</span>', array(
                                'id'        => 'opt-dump',
                                'title'       => 'aktuellen Datenstand sichern',
                                'href'      => '#',
                                'data-href' => DIR_HOST.'/mysql/dump',
                                'onclick'   => "jQuery.ask('dump', this); return false;",
                                'class'     => array('btn', 'btn-warning', 'btn-large'), 
                                'target'    => "_self",
                                'label'     => array(TRUE),
                                'tabindex'  => 0
                            )); ?>
                            <i class="info"></i>
                        </td>
                    </tr>
                    <tr class="" style="text-align: center">
                        <td colspan="2">
                            <div class="filebox">
                                <table class="">
                                    <tr style="text-align: center">
                                        <td colspan="2">
                                            <?php
                                            $files = l(SORT_DESC);
                                            $emptyText = !count($files) ? 'keine Sicherungen vorhanden' : 'Sicherung auswählen';
                                            echo $this->Form->input('fn', array(
                                                'id'        => 'opt-options',
                                                'options'   => $files,
                                                'empty'     => $emptyText,
                                                'label'     => FALSE,
                                                'tabindex'  => 1
                                            )); ?>
                                        </td>
                                    </tr>
                                    <tr style="text-align: center">
                                        <td>
                                            <?php echo $this->Form->button('<i class="glyphicon glyphicon-upload"></i><span>  Wiederherstellen</span>', array(
                                                'id'        => 'opt-restore',
                                                'title'     => 'ausgewählten Datenstand wiedererstellen',
                                                'href'      => '#',
                                                'data-href' => DIR_HOST.'/mysql/restore',
                                                'onclick'   => 'jQuery.ask(\'restore\', this); return false;',
                                                'class'     => array('btn', 'btn-danger', 'btn-large'),
                                                'target'    => "_self",
                                                'label'     => array(),
                                                'tabindex'  => 2
                                            )); ?>
                                            <i class="info"></i>
                                        </td>
                                    </tr>
                                    <tr style="text-align: center">
                                        <td colspan="2">
                                            <?php echo $this->Form->button('<i class="glyphicon glyphicon-save"></i><span>  Download</span>', array(
                                                'id'        => 'opt-download',
                                                'title'     => 'ausgewählten Datenstand herunterladen',
                                                'type'      =>'submit',
                                                'class'     => array('btn', 'btn-info', 'btn-large'),
                                                'label'     => array(),
                                                'tabindex'  => 3
                                            )); ?>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr style="text-align: center">
                        <td colspan="2">
                            <a href="<?php echo DIR_HOST; ?>/logout" class="btn btn-success btn-large" type="submit" target="_self" tabindex="4">
                                <i class="glyphicon glyphicon-log-out"></i>
                                <span itemprop="name">Logout</span>
                            </a>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </header>
</div>
<script type="text/javascript">
    (function ($) {
        'use strict';

        var termini = {
            dump: 'Datensicherung wird gestartet.\n\nFortfahren?',
            restore: 'Soll diese Sicherung wiederhergestellt werden?'
        }, res;

        $.ask = function (type, me) {
            res = (res = termini[type]) ? res : null;

            if (!res)
                return;

            if (window.confirm(res)) {
                var data = $(me).data();
                console.log($(me).data());
                
                window.location.href = data['href'] + '/fn:' + data['fn'];
            } else {
                alert("Vorgang abgebrochen")
            }
        };
        
        
        $.setup = function() {
            
            var downloadEl  = $('#opt-download');
            var restoreEl   = $('#opt-restore');
            
            function fnChange(e) {
                
                var val = $(this).val();
            
                downloadEl.attr('disabled', !val).attr('data-fn', val);
                restoreEl.attr('disabled', !val).attr('data-fn', val);
                
            }
            
            $('#opt-options').on('change', fnChange);
            
            $('#opt-dump').focus();
            
            fnChange();
            
        }
    })(jQuery)
    jQuery.setup();


</script>