<?php
    $params = $this->request->query;
?>
<meta http-equiv="Refresh" content="5;url=/" />
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
                        <a href="<?php echo DIR_HOST; ?>" class="btn btn-success" type="submit" target="_self"><span itemprop="name">zurück</span></a>
                    </td>
                </tr>
            </table>
        </div>
    </header>
</div>