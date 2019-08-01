<?php

App::uses('AppController', 'Controller');
App::uses('Debugger', 'Utilities');
App::uses('SimplePasswordHasher', 'Controller/Component/Auth');

class UsersController extends AppController {

    public $name = 'Users';
    public $helpers = array('Form');

    function beforeFilter() {
        
        $this->Auth->allowedActions = array('login', 'logout', 'lastSaved', 'apiLastSaved_'); //, 'add', 'index', 'edit', 'view');
        $this->allowedGroups = array('Administrators', 'Managers');
        $this->layout = 'cake';

        parent::beforeFilter();
    }

    function beforeRender() {
        $this->response->disableCache();
        parent::beforeRender();
    }

    function _groupName() {
        if ($this->Auth->user('id')) {
            $this->User->Group->recursive = 0;
            $group = $this->User->Group->findById($this->Auth->user('group_id'));
            return $group['Group']['name'];
        }
    }

    function ajax_login() {
        $this->log($this->request->is('ajax'), LOG_DEBUG);
    }

    function login() {
        if( $this->request->is('ajax') ) {
            if (!empty($this->data)) {
                $this->Auth->logout();
                if ($this->Auth->login() && $this->isAuthGroup()) {
                    $this->User->id = $this->Auth->user('id');
                    $this->User->saveField('lastlogin', date('Y-m-d H:i:s'));
                    $this->Flash->success(sprintf( 'angemeldet als <strong>%s</strong>', $this->Auth->user('name') ) );
                    $this->set('_serialize', array_merge($this->data['User'], array(
                        'id' => $this->Auth->user('id'),
                        'username' => $this->Auth->user('username'),
                        'name' => $this->Auth->user('name'),
                        'password' => $this->Auth->user('password'),
                        'sessionid' => $this->Session->id(),
                        'groupname' => $this->_groupname(),
                        'success' => 'true',
                        'redirect' => $this->data['User']['redirect']
                    )));
                } else {
                    $this->Flash->error(__('Anmeldung fehlgeschlagen'));
                    $this->response->header("WWW-Authenticate: Negotiate");
                    $this->set('_serialize', array_merge($this->data['User'], array(
                        'id' => '',
                        'username' => '',
                        'name' => '',
                        'password' => '',
                        'sessionid' => '',
                    )));
                }
                $this->render(FLASH_JSON);
            }
        } else {
            // set var $redirect for the view
            $this->set('redirect', $this->Auth->redirect(array('controller' => 'users', 'action' => 'index')));
            $this->layout = 'login_layout';
//            $this->render('/Users/login_old');
        }
        
    }

    function logout() {
        $this->Auth->logout();
        if (!$this->request->is('ajax')) {
//            $this->Flash->error(__('Anmeldung erforderlich'));
            $this->redirect(array('controller' => 'users', 'action' => 'login'));
        } else {
            $this->Flash->success(__('Sie wurden ausgelogged'));
            $json = array_merge($this->data, array('id' => '', 'username' => '', 'name' => '', 'password' => '', 'sessionid' => ''));
            $this->set('_serialize', $json);
            $this->render(FLASH_JSON);
        }
    }

    function auth() {
        if ($this->request->is('ajax') && $this->Auth->user('id')) {
            $user = $this->Auth->user();
            $json = array_merge($this->request->data['User'], $user['User']);
        } elseif (isset($this->request->data)) {
            $json = $this->request->data['User'];
        }
        $this->set('_serialize', $json);
        $this->render(SIMPLE_JSON);
    }

    function index() {
        if (!$this->isAuthGroup()) {
            $this->redirect(array('action' => 'login'));
        }
        $this->User->recursive = 0;
        $this->set('loggedin_user', $this->Auth->user() );
        $this->set('isAdmin', $this->isAdmin());
        $this->set('users', $this->paginate());
    }

    function view($id = null) {
        if (!$this->isAuthGroup()) {
            $this->log('no Authgroup: view');
            $this->redirect(array('action' => 'login'));
        }
        if (!$id) {
            $this->Flash->error(__('Invalid user', true));
//      $this->redirect(array('action' => 'index'));
        }
        $this->set('user', $this->User->read(null, $id));
    }

    function add() {
        $this->allowedGroups = array('Administrators');
        if (!$this->isAuthGroup()) {
            $this->log('no Authgroup: add');
            $this->redirect(array('action' => 'login'));
        }
        if (!empty($this->request->data)) {
            $this->User->create();
            if ($this->User->save($this->data)) {
                $this->Flash->success(__('The user has been saved', true));
                if ($this->request->is('ajax')) {
                    $this->render(SIMPLE_JSON);
                } else {
                    $this->redirect(array('action' => 'index'));
                }
            } else {
                if ($this->request->is('ajax')) {
                    $value = $this->User->invalidFields();
                    foreach ($value as $field => $error) {
                        $json = array_merge($value, array($field => array('error' => $error)));
                    }
                    $this->set('_serialize', $json);
                    $this->response->header("HTTP/1.1 500 Internal Server Error");
                    $this->render(SIMPLE_JSON);
                } else {
                    $this->Flash->error(__('The user could not be saved. Please, try again.', true));
                    $this->redirect(array('action' => 'index'));
                }
            }
        }
        $groups = $this->User->Group->find('list');
        $this->set(compact('groups'));
    }

    function edit($id = null) {
        if (!$this->isAuthGroup()) {
            $this->redirect(array('action' => 'login'));
        }
        if (!$id && empty($this->data)) {
            $this->Session->setFlash(__('Ungültiger Benutzer', true));
            $this->redirect(array('action' => 'index'));
        }
        if (!empty($this->data)) {
            if ($this->User->save($this->request->data)) {
                $this->Flash->success(__('Erfolgreich gespeichert', true));
//                $this->redirect(array( 'action' => 'index' ));
            } else {
                $this->Flash->error(__('Benutzer konnte nicht gespeichert werden. Bitte erneut versuchen.', true));
            }
        }
        if (empty($this->request->data)) {
            /*
             * Iniatial Request
             * 
             */
            $this->request->data = $this->User->read(null, $id);
        } else {
            /*
             * If validation failes after save
             * we need to fill up empty form fields (don't call read since it manipulates $this->data, use findById instead !!)
             */
            $user = $this->User->findById($id);
            $this->request->data['User'] = array_merge($this->request->data['User'], $user['User'] );
        }
        $groups = $this->User->Group->find('list');
        $isAdmin = $this->isAdmin();
        $this->set(compact('groups', 'isAdmin'));
    }

    function delete($id = null) {
        if (!$this->isAuthGroup()) {
            $this->redirect(array('action' => 'login'));
        }
        if (!$id) {
            $this->Session->setFlash(__('Invalid id for user', true));
            $this->redirect(array('action' => 'index'));
        }
        if ($this->User->delete($id)) {
            $this->Flash->success(__('User deleted', true));
            $this->redirect(array('action' => 'index'));
        }
        $this->Flash->error(__('User was not deleted', true));
        $this->redirect(array('action' => 'index'));
    }

    function ping() {
//        $this->log($this->Session->read(), LOG_DEBUG);
        if ($this->request->is('ajax')) {
            if (!empty($this->data) && !empty($user)) {
                $tmi = $this->User->read('tmi', $this->Auth->user('id'));
                $this->Flash->success('That\'s a pain');
                $this->set('_serialize', array_merge($this->data, array('id' => $this->Auth->user('id'), 'sessionid' => $this->Session->id(), 'success' => true, 'tmi' => $tmi['User']['tmi'])));
            } else {
                $this->set('_serialize', array('success' => false));
            }
            $this->render(SIMPLE_JSON);
        }
    }

    function getTmi() {
        if ($this->request->is('ajax')) {

            if ($this->Auth->user()) {
                $user_id = $this->Auth->user('id');
            } else {
                $user = $this->User->find('first', array('conditions' => array('User.username' => DEFAULT_USER)));
                $user_id = $user['User']['id'];
            }

            $tmi = $this->User->read('tmi', $user_id);
            $this->set('_serialize', array('tmi' => $tmi['User']['tmi']));
            $this->render(SIMPLE_JSON);
        }
    }

    function setTmi() {
        if ($this->request->is('ajax')) {
            if ($user = $this->Auth->user()) {
                $this->User->id = $this->data['id'];
                $res = $this->User->saveField('tmi', $this->data['tmi']);
                $this->set('_serialize', array('success' => TRUE, 'tmi' => $res));
            } else {
                $this->Flash->error(__('Login fehlgeschlagen'));
                $this->response->header("WWW-Authenticate: Negotiate");
                $this->set('_serialize', array('success' => FALSE));
            }
            $this->render(SIMPLE_JSON);
        } else {
            
        }
    }

    function isValid() {
        $session = Configure::read('Session');
//    $this->log($session['countdown'], LOG_DEBUG);
        if ($this->request->is('ajax')) {
            if ($this->Auth->user()) {
                $this->set('_serialize', array('success' => TRUE, 'timeout' => $session['timeout'], 'sessionid' => $this->Session->id()));
            } else {
                $this->set('_serialize', array('success' => FALSE));
            }
            $this->render(SIMPLE_JSON);
        }
    }
    
    
    
    public function lastSaved( $human_readable = FALSE ) {
        $session = Configure::read('Session');
        $this->autoLayout = FALSE;

        $files = l($human_readable);
        reset( $files );
        $first_file = current($files);
        
        $this->set( 'content', $first_file );
        $this->render('/Elements/content');
    }
    
    public function apiLastSaved() {
        $session = Configure::read('Session');
        $this->autoLayout = FALSE;

        $files = l2();
//        $this->log($files, LOG_DEBUG);
//        die;
        reset( $files );
        
        $first_file = current($files);
        $text = get_time_diff_text($first_file);
        $this->set( '_serialize', array( 'last' => $first_file , 'text' => $text ) );
        
        $this->render(SIMPLE_JSON);
        
//        $this->set( 'content', $first_file );
//        $this->render('/Elements/content');
    }

}

?>