<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'driver' => 'pdo_mysql',
'user' => 'root',
'password' => 'root',
'dbname' => 'web',
'port' => '8889',
'unix_socket' => '/Applications/MAMP/tmp/mysql/mysql.sock'
);
$entityManager = EntityManager::create($conn, $config);
?>