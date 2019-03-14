<?php
/** 
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'Backup DB');
$cakeVersion = __d('cake_dev', 'CakePHP %s', Configure::version())
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $this->fetch('title'); ?>
	</title>
	<?php
    echo $this->Html->meta(array('name' => 'viewport', 'content'=> 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'));
    echo $this->Html->meta('http-equiv', "x-ua-compatible");
    echo $this->Html->meta('icon', icon_url() ); // -> bootstrap.php

    echo $this->Html->css('twitter/bootstrap/css/bootstrap');
    echo $this->Html->css('bootstrap_glyphicons');
//    echo $this->Html->css('um-styles');
    echo $this->Html->css('app');
    
    echo $this->Html->style('.badge-logo::before {background-image: url(' . logo_url() . ')}');
    
    echo $this->Html->script('app/lib/jquery/jquery-latest.min');
    echo $this->Html->script('settings');
//    echo $this->Html->script('select2.full.min');
//    echo $this->Html->script('um-scripts');
//    echo $this->Html->script('um-tipsy');
//    echo $this->Html->script('um-raty');
//    echo $this->Html->script('um-profile');
    
    echo $this->fetch('meta');
    echo $this->fetch('css');
    echo $this->fetch('script');
	?>
</head>
<body class="">
	<?php echo $this->fetch('content'); ?>
	<?php echo $this->element('sql_dump'); ?>
</body>
