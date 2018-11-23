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

$files_human   = l(TRUE); // get readable time format e.g. 09. Apr 2018 10:38
reset( $files_human );
$date          = current($files_human);
if( !$date ) {
    $date	= '<strong><span style="color: #f00;">Noch kein Backup vorhanden!</span></strong>';
    $text =  sprintf('Letztes Backup: %s ', $date );
} else {
    $files_raw     = l(); // get UNIX-Timestamp
    reset( $files_raw );
    $last_backup    = current($files_raw);
    if( ( $diff = get_time_diff( $last_backup, 'i' ) ) && ( $diff['total'] > 59 ) ) { // express in minutes
        if( ( $diff = get_time_diff( $last_backup, 'h' ) ) && ( $diff['total'] > 23 ) ) { // express in hours
            if( ( $diff = get_time_diff( $last_backup, 'd' ) ) && ( $diff['total'] > 29 ) ) { // express in days
                if( ( $diff = get_time_diff( $last_backup, 'm' ) ) && ( $diff['total'] > 11 ) ) { // express in months
                    $diff = get_time_diff( $last_backup, 'y' ); // express in years
                }
            }
        }
    }
    $age    = $diff['total'] . ' ' . $diff['name'];
    $text   = sprintf( '<span>Letztes Backup vor </span><i>%s</i><span> am %s</span>', $age, $date );
}
?>
<?php $ret = isset($this->request->query['ret']) ? $this->request->query['ret'] : ''; ?>
<div itemscope itemtype="http://schema.org/SoftwareApplication" class="container">
    <div class="backup-info"><?php echo $text; ?></div>
    <header class="jumbotron masthead">
        <div class="inner">
            <h1>Datenbank</h1>
            <?php echo $this->Form->create('User', array('url' => '/u')); ?>
                <table class="download-info button-wrap">
                    <tr style="text-align: center">
                        <td>
                            <?php echo $this->Form->button('<i class="glyphicon glyphicon-download"></i><span>  Sichern</span>', array(
                                'id'        => 'opt-dump',
                                'title'       => 'aktuellen Datenstand sichern',
                                'href'      => '#',
                                'data-href' => DIR_HOST.'/mysql/dump?ret=' . urlencode($ret),
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
                                            
                                            $emptyText = !count($files_human) ? 'keine Sicherungen vorhanden' : 'Sicherung auswählen';
                                            echo $this->Form->input('fn', array(
                                                'id'        => 'opt-options',
                                                'options'   => $files_human,
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
                                                'data-href' => DIR_HOST.'/mysql/restore?ret=' . urlencode($ret),
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
                var data = $(me).data(), fn;
                window.location.href = data['href'] + ( ( fn = data['fn'] ) ? '&fn=' + fn : '');
            } else {
                alert("Vorgang abgebrochen")
            }
        };
        
        
        $.setup = function() {
            
            var downloadEl  = $('#opt-download');
            var restoreEl   = $('#opt-restore');
            var dumpEl      = $('#opt-dump');
            
            function fnChange(e) {
                
                var val = $(this).val();
            
                downloadEl.attr('disabled', !val).attr('data-fn', val);
                restoreEl.attr('disabled', !val).attr('data-fn', val);
                
                if(val)
                    restoreEl.focus()
                else
                    dumpEl.focus();
            }
            
            $('#opt-options').on('change', fnChange);
            
            dumpEl.focus();
            
            fnChange();
            
        }
    })(jQuery)
    jQuery.setup();


</script>