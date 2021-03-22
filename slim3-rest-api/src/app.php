<?php

define("ROOT_DIR", dirname(__DIR__));

use Dotenv\Dotenv;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Facade;
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Events\Dispatcher;
use Illuminate\Validation;
use Illuminate\Database\ConnectionResolver;
use App\Helpers\Translation\Translator;
use Slim\App;

/**
 * Load dotenv
 * @see https://github.com/vlucas/phpdotenv
 */
$dotenv = Dotenv::createUnsafeImmutable(ROOT_DIR);
$dotenv->load();

if (getenv('APP_ENV') !== 'test') {
    $dotenv->required([
        'DB_CONNECTION',
        'DB_HOST',
        'DB_DATABASE',
        'DB_USERNAME',
        'DB_PASSWORD'
    ]);    
}

/**
 * Usage laravel facage laravel facades
 * @see https://stackoverflow.com/questions/53942294/is-it-possible-to-use-laravel-facades-with-illuminate-database-standalone
 */
$container = new Container;
Facade::setFacadeApplication($container);

$capsule = new Capsule;
$capsule->addConnection([
    'driver' => getenv('DB_CONNECTION'),
    'host' => getenv('DB_HOST'),
    'port' => getenv('DB_PORT') ?? 3306,
    'database' => getenv('DB_DATABASE'),
    'username' => getenv('DB_USERNAME'),
    'password' => getenv('DB_PASSWORD'),
    'charset'   => 'utf8',
    'collation' => 'utf8_general_ci',
]);
$capsule->setEventDispatcher(new Dispatcher($container));
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container->singleton('db', function () use ($capsule) {
    return $capsule;
});

$container->singleton('validator', function () use ($capsule) {
    $validation = new Validation\Factory(new Translator);
    $connection = $capsule->getConnection();
    $db = new ConnectionResolver(['default' => $connection]);
    $db->setDefaultConnection('default');
    $validation->setPresenceVerifier(new Validation\DatabasePresenceVerifier($db));
    return $validation;
});

$app = new App([
    'settings' => [
        'addContentLengthHeader' => false,
        'displayErrorDetails' => filter_var(getenv('APP_DEBUG'), FILTER_VALIDATE_BOOLEAN),
    ]
]);

$app->add(new \App\Middlewares\TrailingSlash);
$app->add(new \App\Middlewares\Cors);

require 'dependencies.php';
require 'routes.php';

$app->run();
