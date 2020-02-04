<?php
require_once 'vendor/autoload.php';

Requests::register_autoloader();

var_dump($argv);
var_dump($_ENV);

$response = Requests::post(
    $_ENV['INPUT_SLACK_WEBHOOK'], 
    array(
        'Content-type' => 'application/json'
    ),
    json_encode(array(
        "text" => $_ENV['INPUT_MESSAGE']
    ))
);

// var_dump($response->body);
echo "::set-env name=HELLO::loool\n";
// echo $output;

if(!$response->success) {
    echo $response->body;
    // exit(1);
}