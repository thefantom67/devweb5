<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;

require 'bootstrap.php';
require 'vendor/autoload.php';

$app = new \Slim\App();

const SECRET = "makey1234567";
$jwt = new \Slim\Middleware\JwtAuthentication([
"path" => "/api",
"secure" => false,
"passthrough" => ["/login"],
"secret" => JWT_SECRET,
"attribute" => "decoded_token_data",
"algorithm" => ["HS256"],
"error" => function ($response, $arguments) {

$data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'AUTO');
return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
}

]);

$app->add($jwt);


header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');
header("Access-Control-Allow-Origin", "*");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
header('Content-Type: application/json');

$app->get('/catalogue-list/client', 'AddUsers');
$app->get('/catalogue-list/hotel', 'GetHotel');

function AddUsers ($request, $response, $args)
{
   global $entityManager;

   $userRepository = $entityManager->getRepository('Users');
   $users = $userRepository->findAll();
    
    return $response->write(json_encode($users));

};

function GetHotel($request, $response, $args)
{
   $nom = $args['nom'];

   global $entityManager;

   $hotelRepository = $entityManager->getRepository('Hotels');
   $hotels = $userRepository->findOnByNom($nom);
    
    return $response->write(json_encode($hotels));

};

$app->run();

?>