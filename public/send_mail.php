<?php

function response($text = '', $code = 200) {
	header_remove();
	http_response_code($code);
	header('Content-Type: application/json');
	header('Cache-Control: no-transform,public,max-age=300,s-maxage=900');
	header("Status: $code");
	echo json_encode(array('status' => $code < 300, 'message' => $text));
}

function send_error($text = '') {
	return response($text, 500);
}

function send_success($text = 'OK') {
	return response($text, 200);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$additional = $_POST['additional']

$sender = "postmaster@erzin.moscow";
ini_set("SMTP", "postmaster@erzin.moscow");
ini_set("sendmail_from", $sender);

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\n";
$headers .= "From: ".$sender."\n";
$headers .= "Reply-To: ".$sender."\n";
$headers .= "Return-Path: ".$sender."\n";
$headers .= "X-Sender:".$sender."\n";
$headers .= "X-Sender:".$sender."\n";
$headers .= 'X-Mailer: PHP/' . phpversion()."\n";
$headers .= "X-Priority: 1\n";
$headers .= "MIME-Version: 1.0\n";

$message = $name."\n".$email."\n".$phone."\n".$additional;
$message = mb_convert_encoding($message, "UTF-8");

mail("spirin2205@yandex.ru", "Новая заявка с сайта", $message, $headers, "-f " . $sender);
  
return send_success();
?>
