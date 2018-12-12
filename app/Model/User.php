<?php

App::uses('AppModel', 'Model');
App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');

/**
 * User Model
 *
 * @property Group $Group
 */
class User extends AppModel {

    /**
     * Display field
     *
     * @var string
     */
    public $displayField = 'name';
    public $useDbConfig = 'default';

    //The Associations below have been created with all possible keys, those that are not needed can be removed

    public function beforeSave($options = array()) {
        $this->log($this->alias, LOG_DEBUG);
        $this->log($this->data, LOG_DEBUG);
        if (!empty($this->data[$this->alias]['pwd'])) {
            $passwordHasher = new BlowfishPasswordHasher();
            $this->data[$this->alias]['password'] = $passwordHasher->hash(
                    $this->data[$this->alias]['pwd']
            );
        }
        return true;
    }

    public $validate = array(
        'username' => array(
            'rule' => 'isUnique',
            'message' => 'This username has already been taken.'
        ),
        'pwd' => array(
            'rule' => array('minLength', '5'),
            'message' => 'Minimum 5 characters long',
            'allowEmpty' => true,
            'on' => 'update'
        ),
        'pwd_repeat' => array(
            'rule' => array('minLength', '5'),
            'message' => 'Minimum 5 characters long',
            'allowEmpty' => true,
            'on' => 'update'
        ),
    );

    /**
     * hasMany associations
     *
     * @var array
     */
    public $hasMany = array();

    /**
     * belongsTo associations
     *
     * @var array
     */
    public $belongsTo = array(
        'Group' => array(
            'className' => 'Group',
            'foreignKey' => 'group_id',
            'conditions' => '',
            'fields' => '',
            'order' => ''
        )
    );

}
