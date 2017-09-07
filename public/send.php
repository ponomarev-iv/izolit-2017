<?php

$frm_name  = "Сообщение с сайта http://izolit.net/";
$recepient = "izolit.pm@mail.ru";
$sitename  = "izolit";
$subject   = "Сообщение с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["mess"]);


$message = "
Имя: $name <br>
E-mail: $email <br>
Сообщение: $comment
";

mail($recepient, $subject, $message, "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
