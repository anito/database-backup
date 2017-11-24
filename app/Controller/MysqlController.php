<?php

/**
 * Application level Controller
 *
 * This file is application-wide controller file. You can put all
 * application-wide controller-related methods here.
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
App::uses('AppController', 'Controller');
App::uses('ConnectionManager', 'Model');

class MysqlController extends AppController {

    var $name = 'Mysql';
    var $helpers = array();
    var $uses = array();

    function beforeFilter() {
        $this->autoRender = FALSE;
        $this->Auth->allow = array('exec');
        parent::beforeFilter();
    }

    function exec() {
        $allowed_actions = array('dump', 'restore', 'connect');

        $action = array_splice($this->passedArgs, 0, 1);
        $action = $action[0];
        $args = implode(' ', $this->passedArgs);

        if (!in_array($action, $allowed_actions)) {
            echo 'command not in list of allowed commands';
            die;
            header("Location: http://" . $_SERVER['HTTP_HOST'] . str_replace('//', '/', '/' . BASE_URL . '/pages'));
        }

        $mysql = $this->mysql($action, $args);
    }

    function mysql($action, $args = '') {
        $ds = ConnectionManager::getDataSource('default');
        $dsc = $ds->config;
        $db = $dsc['database'];

        if ($action == 'dump') {
            $postfix = MYSQL_CMD_PATH . 'mysqldump';
            $io = '>';
            $p = 'Datenbank erfolgreich gesichert';
        } elseif ($action == 'restore') {
            $postfix = MYSQL_CMD_PATH . 'mysql';
            $io = '<';
            $p = 'Datenbank erfolgreich wiederhergestellt';
        } else {
            $cmd = 'mysql connect localhost 2>&1';
            $op = `$cmd`;
            return $op;
        }

        $cmd = sprintf('%1s --defaults-extra-file=' . MYSQLCONFIG . '/my.cnf ' . $db . ' %2s ' . MYSQLUPLOAD . '/file.sql 2>&1', $postfix, $io);
        $op = `$cmd`;
        header("Location: http://" . $_SERVER['HTTP_HOST'] . str_replace('//', '/', '/' . BASE_URL . '/pages/success?p=' . $p));
        die;
    }

}
