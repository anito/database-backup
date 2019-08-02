<?php
$baseDir = dirname(dirname(__FILE__));
return [
    'plugins' => [
        'ADmad/JwtAuth' => $baseDir . '/vendor/admad/cakephp-jwt-auth/',
        'Bake' => $baseDir . '/vendor/cakephp/bake/',
        'Cors' => $baseDir . '/vendor/ozee31/cakephp-cors/',
        'Crud' => $baseDir . '/vendor/friendsofcake/crud/',
        'CrudJsonApi' => $baseDir . '/vendor/friendsofcake/crud-json-api/',
        'DebugKit' => $baseDir . '/vendor/cakephp/debug_kit/',
        'Migrations' => $baseDir . '/vendor/cakephp/migrations/',
        'WyriHaximus/TwigView' => $baseDir . '/vendor/wyrihaximus/twig-view/'
    ]
];