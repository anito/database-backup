<?php
namespace App\Controller\Api;

use Cake\Event\Event;
use Cake\Network\Exception\UnauthorizedException;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

class UsersController extends AppController
{
    public function initialize() {
        parent::initialize();
        $this->autoRender = false;
        $this->Auth->allow(['add', 'token']);
    }

    public function add() {
        $this->Crud->on('afterSave', function(Event $event) {
            if ($event->subject->created) {
                $this->set('data', [
                    'id' => $event->subject->entity->id,
                    'token' => JWT::encode([
                        'sub' => $event->subject->entity->id,
                        'exp' =>  time() + 604800
                    ],
                    Security::salt())
                ]);
                $this->Crud->action()->config('serialize.data', 'data');
            }
        });
        return $this->Crud->execute();
    }

    public function token() {
        $user = $this->Auth->identify();
        if (!$user) {
            throw new UnauthorizedException(__('Invalid username or password'));
        }

        $this->set([
            'success' => true,
            'data' => [
                'token' => JWT::encode([
                    'sub' => $user['id'],
                    'exp' =>  time() + 604800 // 1 week [ 604800/60/60/24 = 7 days || 86400/60/60/24 = 1 day ]
                ],
                Security::salt())
            ],
            '_serialize' => ['success', 'data']
        ]);
        $this->render();
    }

}