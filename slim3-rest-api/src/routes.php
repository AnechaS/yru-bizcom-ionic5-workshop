<?php

$app->get('/', 'App\Controllers\HomeController:index');

$app->group('/items', function($app) {
    $app->get('', 'App\Controllers\ItemController:find');
    $app->post('', 'App\Controllers\ItemController:create');
    $app->get('/{id}', 'App\Controllers\ItemController:get');
    $app->put('/{id}', 'App\Controllers\ItemController:update');
    $app->delete('/{id}', 'App\Controllers\ItemController:delete');
});