<?php
require_once 'vendor/autoload.php';

Requests::register_autoloader();

var_dump($argv);
var_dump(getenv('INPUT_WHO-TO-GREET'));

$response = Requests::post(
    'https://hooks.slack.com/services/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', 
    array(
        'Content-type' => 'application/json'
    ),
    json_encode(array(
        "text" => "Hello, World!"
    ))
);

// var_dump($response->body);
echo "::set-env name=HELLO::loool\n";
// echo $output;

if(!$response->success) {
    echo $response->body;
    // exit(1);
}