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
if (Configure::read('debug') == 1):
//throw new NotFoundException();
endif;
//App::uses('Debugger', 'Utility');
?>
<div itemscope itemtype="http://schema.org/SoftwareApplication" class="container">
		<header class="jumbotron masthead">
				<div class="inner">
						<h1></h1>
						<p>
								Datenbank
						</p>
						<table class="download-info button-wrap">
								<tr style="text-align: center">
										<td>
												<a href="#" data-href="<?php echo DIR_HOST; ?>/mysql/dump" class="btn btn-warning btn-large" type="submit" target="_self" onclick="jQuery.ask('dump', this);"><span itemprop="name">Sichern</span></a>
												<i class="info"></i>
										</td>
								</tr>
								<tr style="text-align: center">
										<td>
												<a href="#" data-href="<?php echo DIR_HOST; ?>/mysql/restore" class="btn btn-danger btn-large" type="submit" target="_self" onclick="jQuery.ask('restore', this);"><span itemprop="name">Wiederherstellen</span></a>
												<i class="info"></i>
										</td>
								</tr>
								<tr style="text-align: center">
										<td colspan="2">
												<a href="<?php echo DIR_HOST; ?>/logout" class="btn btn-success btn-large" type="submit" target="_self"><span itemprop="name">Logout</span></a>
										</td>
								</tr>
						</table>
				</div>
		</header>
</div>
<script type="text/javascript">
		(function($) {
				'use strict';
				
				var termini = {
						dump: 'Alle Daten werden nun gesichert. Die letzte Sicherung wird damit überschrieben.\n\nFortfahren?',
						restore: 'Soll die letzte Sicherung wiederhergestellt werden?'
				}, res;
				
				$.ask = function(type, me) {
						res = (res = termini[type]) ? res : null;
						
						if(!res) return;
						
						if (window.confirm(res)) {
								window.location.href = $(me).data('href');
						} else {
								alert("Vorgang abgebrochen")
						}
				};
		})(jQuery)


</script>