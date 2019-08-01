<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Log\Log;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 *
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{

    public function initialize() {
        parent::initialize();
        $this->allowedGroups = ['Administrators'];
    }

    public function login() {
        $this->Auth->logout();
        if( $this->request->is('ajax') ) {
            if ($user = $this->Auth->identify()) {
                $this->Auth->setUser($user);
                $_user = $this->Users->get($user['id']);
                $_user->last_login = date('Y-m-d H:i:s');
                $this->Users->save($_user);
                $this->Flash->success(sprintf( __('Logged in as <strong>%s</strong>'), $user['name'] ), ['escape' => false] );
                $this->set('_serialize', [
                    'success' => true,
                    'data' => [
                        'token' => JWT::encode([
                            'sub' => $user['id'],
                            'exp' =>  time() + 604800
                        ],
                        Security::getSalt()),
                        'id' => $user['id']
                    ]
                ]);
            } else {
                $this->Flash->error(__('Login failed'));
                $this->set('_serialize', []);
                $this->response->header("WWW-Authenticate: Negotiate");
            }
            $this->render(FLASH_JSON);
        } else {
            $this->viewBuilder()->setLayout('login_layout');
            $this->Flash->default(__('Username und Password'));
            $this->render();
        }
    }

    public function logout() {
        $this->Auth->logout();
        $this->Flash->success(__('You are now logged out'));
        if( $this->request->is('ajax') ) {
            $this->set('_serialize', [
                'success' => true
            ]);
            $this->render(SIMPLE_JSON);
        } else {
            return $this->redirect($this->Auth->logout());
        }
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        // $this->allowedGroups = array_merge($this->allowedGroups, ['Managers', 'Users']);
        $this->paginate = [
            'contain' => ['Groups']
        ];

        if (!$this->isAdmin()) {
            $this->paginate = array_merge($this->paginate, [
                'conditions' => function($q) {
                    return ['Users.id' => $this->Auth->user('id')];
                }
            ]);
        }

        $users = $this->paginate($this->Users);

        $this->set(compact('users'));
    }

    /**
     * View method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => ['Groups']
        ]);

        $this->set('user', $user);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        if (!$this->isAuthGroup()) {
            $this->Flash->error(__('You are not allowed to add new users.'));
            return $this->redirect(array('action' => 'login'));
        }
        $user = $this->Users->newEntity();
        if ($this->request->is('post')) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $isAdmin = $this->isAdmin();
        $group = $this->Users->Groups->find('list', ['limit' => 200]);
        $this->set(compact('user', 'group', 'isAdmin'));
    }

    /**
     * Edit method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $this->allowedGroups = array_merge($this->allowedGroups, ['Managers']);
        if (!$this->isAuthGroup()) {
            $this->Flash->error(__('You are not allowed to edit this user.'));
            return $this->redirect(array('action' => 'login'));
        }
        $user = $this->Users->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('The user has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The user could not be saved. Please, try again.'));
        }
        $isAdmin = $this->isAdmin();
        $group = $this->Users->Groups->find('list', ['limit' => 200]);
        $this->set(compact('user', 'group', 'isAdmin'));
    }

    /**
     * Delete method
     *
     * @param string|null $id User id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        if (!$this->isAuthGroup()) {
            $this->Flash->error(__('You are not allowed to delete this user.'));
            return $this->redirect(array('action' => 'login'));
        }

        $this->request->allowMethod(['post', 'delete']);
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $this->Flash->success(__('The user has been deleted.'));
        } else {
            $this->Flash->error(__('The user could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }

}
