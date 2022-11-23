<?php 
use PHPMailer/PHPMailer/PHPMailer;
use PHPMailer/PHPMailer/Exception;

require "PHPMailer/src/Exception.php";
require "PHPMailer/src/PHPMaster.php";

$mail = new PHPMailer(true);
$mail -> CharSet = 'UTF-8';
$mail -> setLanguage("ru", "PHPMailer/language/");
$mail ->IsHTML(true);

$mail -> setForm("altarev@mail.ru", "VR Tehnym");
$mail -> addAddress("zdanov.dz.@gmail.com");
$mail -> Subject = "Заявка";

$body = "<h1>Здарова</h1>";

$body = "<p>Имя: "$_POST["name"]"</p>";
$body = "<p>E-mail: "$_POST["email"]"</p>";
$body = "<p>Сообщение: "$_POST["textarea"]"</p>";


$mail -> $body = $body;
if(!$mail->send()) {
    $message = "error";
} else {
    $message = "Good";
}

$response = ["message" => $message];

header("content-type: application/json");
echo json_encode($response);
