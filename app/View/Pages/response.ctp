<?php
    $params = $this->request->query;
?>
<meta http-equiv="" content="5;url=/" />
<?php echo $this->Form->create('User', array('url' => DIR_HOST)); ?>
<div itemscope itemtype="http://schema.org/SoftwareApplication" class="container">
    <header class="jumbotron masthead">
        <div class="inner">
            <h1></h1>
            <p>

            </p>
            <table class="download-info button-wrap">
                <tr style="text-align: center">
                    <td>
                        <div class=""><?php echo $this->element('url_param', array('params' => $params)); ?></div>
                    </td>
                    <td>
                        <?php echo $this->Form->button('<i class="glyphicon glyphicon-arrow-left"></i><span>  zurück</span>', array(
                            'id' => 'opt-return',
                            'class' => array('btn', 'btn-success', 'btn-sm'),
                            'target' => "_self",
                            'label' => array(),
                            'tabindex' => 0
                        )); ?>
                    </td>
                </tr>
            </table>
        </div>
    </header>
</div>
</form>
<script type="text/javascript">
    (function ($) {
        'use strict';
        
        $('#opt-return').focus();
        
    })(jQuery)
</script>
    