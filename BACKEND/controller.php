<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;

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

$app->get('/{name}',function ($resquest,$response,$args)
 {
    $url="hotels.json";
    $hotel=file_get_contents($url);
    
    return $response->write($hotel)
                    ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                    ->withHeader("Access-Control-Allow-Origin", "*")
                    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

function addUser($request, $response, $args)
{
    $body = $request->getParsedBody();
    $civ = $body['civ'];
    $prenom = $body['prenom'];
    $nom = $body['nom'];
    $adresse = $body['adresse'];   
    $cp = $body['cp'];
    $ville = $body['ville'];
    $pays = $body['pays'];
    $tel = $body['tel']; 
    $email = $body['email']; 
    $login = $body['login']; 
    $password = hash('sha256', $body['password']); 
       
    $file = 'res/users.json';
    $user = new User($civ, $prenom, $nom, $adresse, $cp, $ville, $pays, $tel, $email, $login, $password);
    
    return $response->write(json_encode($user));

   }


$app->run();

?>