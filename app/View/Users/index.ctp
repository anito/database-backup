<?php $this->Html->css("cake.generic", null, array('inline' => false)); ?>
<div class="actions">
	<h3><?php echo __('Aktionen'); ?></h3>
	<ul>
		<li><?php echo $this->Html->link(__('Logout'), '/logout', array('class' => 'success')); ?> </li>
        <?php if( ( $loggedin_user['Group']['name'] == 'Administrators' ) ) : ?>
        <li><?php echo $this->Html->link(__('Neuer Benutzer'), array('action' => 'add')); ?></li>
        <li><?php echo $this->Html->link(__('Alle Gruppen'), array('controller' => 'groups', 'action' => 'index')); ?> </li>
        <li><?php echo $this->Html->link(__('Neue Gruppe'), array('controller' => 'groups', 'action' => 'add')); ?> </li>
        <?php endif; ?>
        <li><?php echo $this->Html->link(__('Beenden'), '/', array('class' => 'success')); ?> </li>
	</ul>
</div>
<div class="users index">
	<h2><?php echo __('Benutzer');?></h2>
	<table cellpadding="0" cellspacing="0">
	<tr>
			<th><?php echo $this->Paginator->sort('username');?></th>
			<th><?php echo $this->Paginator->sort('name');?></th>
			<th><?php echo $this->Paginator->sort('active');?></th>
			<th><?php echo $this->Paginator->sort('group_id');?></th>
			<th class="actions"><?php echo __('Actions');?></th>
	</tr>
	<?php
	foreach ($users as $user): ?>
    <?php if( ( $loggedin_user['Group']['name'] == 'Administrators' ) || ( $loggedin_user['id'] == $user['User']['id'] ) ) : ?>
	<tr>
		<td><?php echo h($user['User']['username']); ?>&nbsp;</td>
		<td><?php echo h($user['User']['name']); ?>&nbsp;</td>
		<td><?php echo h($user['User']['active']); ?>&nbsp;</td>
		<td>
            <?php if( $loggedin_user['Group']['name'] == 'Administrators' ) : ?>
			<?php echo $this->Html->link($user['Group']['name'], array('controller' => 'groups', 'action' => 'view', $user['Group']['id'])); ?>
            <?php else: ?>
			<?php echo $user['Group']['name']; ?>
            <?php endif; ?>
		</td>
		<td class="actions">
			<?php echo $this->Html->link(__('View'), array('action' => 'view', $user['User']['id'])); ?>
			<?php echo $this->Html->link(__('Edit'), array('action' => 'edit', $user['User']['id'])); ?>
			<?php echo $this->Form->postLink(__('Delete'), array('action' => 'delete', $user['User']['id']), null, __('Are you sure you want to delete # %s?', $user['User']['id'])); ?>
		</td>
	</tr>
    <?php endif; ?>
<?php endforeach; ?>
	</table>
	<p>
	<?php
	echo $this->Paginator->counter(array(
	'format' => __('Page {:page} of {:pages}, showing {:current} records out of {:count} total, starting on record {:start}, ending on {:end}')
	));
	?>	</p>

	<div class="paging submit">
	<?php
		echo $this->Paginator->prev('< ' . __('previous'), array(), null, array('class' => 'prev disabled'));
		echo $this->Paginator->numbers(array('separator' => ''));
		echo $this->Paginator->next(__('next') . ' >', array(), null, array('class' => 'next disabled'));
        echo $this->Html->link(__('Abbrechen'), '/', array('class' => ''));
	?>
	</div>
</div>
