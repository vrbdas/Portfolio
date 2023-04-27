<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST["name"];
$email = $_POST["email"];
$text = $_POST["text"];

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP(); //Send using SMTP
    $mail->Host = 'ssl://smtp.mail.ru'; //Set the SMTP server to send through
    $mail->SMTPAuth = true; //Enable SMTP authentication
    $mail->Username = 'lubosvet108@mail.ru'; //SMTP username
    $mail->Password = 'uqcUmVb1HCm0sD9pisBa'; //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
    $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->setLanguage('ru');

    //Recipients
    $mail->setFrom('lubosvet108@mail.ru', 'Portfolio');
    $mail->addAddress('lubosvet108@gmail.com', 'Admin'); //Add a recipient

    //Content
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->isHTML(true); //Set email format to HTML
    $mail->Subject = 'Данные из формы на сайте';
    $mail->Body = '
        Пользователь оставил данные <br>
        Имя: ' . $name . ' <br>
        E-mail: ' . $email . ' <br>
        Сообщение: ' . $text . '<br>';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}