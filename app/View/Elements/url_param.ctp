<?php
$class = 'message';
if (!empty($params['class'])) {
    $class .= ' ' . $params['class'];
}
$message = $this->request->query['p'];
?>
<span class="<?php echo h($class) ?>"><?php echo h($message) ?></span>
