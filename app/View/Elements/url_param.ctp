<?php
$class = 'info-sign';
$message = '';

if (!empty($params['c'] && $params['c'] == "success")) {
    $class = 'ok';
}
if (!empty($params['m'])) {
    $message .= $params['m'];
}

?>
<i class="glyphicon glyphicon-<?php echo h($class); ?>"></i>
<span class=""><?php echo h($message) ?></span>
