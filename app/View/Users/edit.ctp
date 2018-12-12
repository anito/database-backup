<?php $this->Html->css("cake.generic", null, array('inline' => false)); ?>
<div class="users form">
<?php echo $this->Form->create('User');?>
	<fieldset>
		<legend><?php echo __('Benutzer ändern'); ?></legend>
	<?php
		echo $this->Form->input('id');
		echo $this->Form->input('username', array( 'label' => 'Benutzer', 'disabled' => TRUE));
		echo $this->Form->input('pwd', array( 'label' => 'Passwort (leer für keine Änderung)', 'type' => 'password', 'value' => '' ) );
		echo $this->Form->input('name');
		echo $this->Form->input('lastlogin', array( 'label' => 'Zuletzt eingeloggt', 'type' => 'text', 'disabled' => TRUE));
		echo $this->Form->input('enabled', array( 'label' => 'Aktiviert', 'disabled' => !$isAdmin ) );
        if( $isAdmin ):
            echo $this->Form->input('group_id', array( 'label' => 'Gruppe' ) );
        endif;
	?>
	</fieldset>
    <div class="submit">
        <?php echo $this->Form->end(array( 'label' => 'Speichern',  'div' => false ) );?>
        <?php echo $this->Html->link(__('Abbrechen'), '/' ); ?>
    </div>
</div>
<div class="actions">
	<h3><?php echo __('Aktionen'); ?></h3>
	<ul>
        <li><?php echo $this->Html->link(__('Logout'), '/logout', array('class' => 'success')); ?> </li>
        <?php if( $isAdmin ): ?>
		<li><?php echo $this->Form->postLink(__('Löschen'), array('action' => 'delete', $this->Form->value('User.id')), null, __('Are you sure you want to delete # %s?', $this->Form->value('User.id'))); ?></li>
		<li><?php echo $this->Html->link(__('Alle Benutzer'), array('action' => 'index'));?></li>
		<li><?php echo $this->Html->link(__('Alle Gruppern'), array('controller' => 'groups', 'action' => 'index')); ?> </li>
		<li><?php echo $this->Html->link(__('Neue Gruppe'), array('controller' => 'groups', 'action' => 'add')); ?> </li>
        <?php endif; ?>
        <li><?php echo $this->Html->link(__('Beenden'), '/', array('class' => 'success')); ?> </li>
	</ul>
</div>
