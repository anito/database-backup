<?php
    $params = $this->request->query;
    
    if( !empty( $params['ret'] ) ) {
        $url = $params['ret'];
        $button_text = 'Zurück zum Shop Admin';
    } else {
        $url = DIR_HOST;
        $button_text = 'Zurück';
    } 
?>
<meta http-equiv="" content="5;url=/" />
<?php echo $this->Form->create('User', array( 'url' => $url )); ?>
<div itemscope itemtype="http://schema.org/SoftwareApplication" class="container">
    <header class="jumbotron masthead">
        <div class="inner">
            <h1></h1>
            <p>

            </p>
            <table class="download-info button-wrap">
                <tr style="text-align: center">
                    <td colspan="1">
                        <div class=""><?php echo $this->element('message', array('message' => $params['m'], 'result' => $params['c'])); ?></div>
                    </td>
                <tr style="text-align: center">
                    <td>
                        <?php
                        if( !empty( $params['ret'] ) ) {
                            echo $this->Form->button('<i class="glyphicon glyphicon-arrow-left"></i><span> ' . $button_text .'</span>', array(
                                'id' => 'opt-return',
                                'class' => array('btn-large'),
                                'target' => "_self",
                                'label' => array(),
                                'tabindex' => 0
                            ));
                        }
                        echo $this->Form->button('<i class="glyphicon glyphicon-arrow-left"></i><span> ' . $button_text .'</span>', array(
                            'id' => 'opt-return',
                            'class' => array('btn-large'),
                            'target' => "_self",
                            'label' => array(),
                            'tabindex' => 0
                        ));
                        ?>
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
        
        $('#opt-return-shop').focus();
        
    })(jQuery)
</script>
    