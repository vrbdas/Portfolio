<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

$name = '';
$email = '';
$text = '';

$nameErr = '';
$emailErr = '';

$result = []; // массив на выходе

function testInput($data) { // обрезает пробелы и заменяет специальные символы на html коды для безопасности
    $data = mb_substr($data, 0, 1000);  // обрезает, если длиннее 1000 символов
    $data = trim($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ( // проверка значений на пустоту и соответствие
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    !preg_match("/^[а-яёА-ЯЁA-Za-z ]*$/u", $_POST['name']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    if (empty($_POST['name'])) {
        $nameErr = "Поле «Имя» не должно быть пустым";
    } elseif (!preg_match("/^[а-яёА-ЯЁA-Za-z ]*$/u", $_POST['name'])) {
        $nameErr = "В поле «Имя» разрешены только буквы и пробелы";
    }

    if (empty($_POST['email'])) {
        $emailErr = "Поле «email» не должно быть пустым";
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Некорректное значение в поле «email»";
    }
} else { // если все проверки прошли, сохраняет данные формы
    $name = testInput($_POST['name']);
    $email = testInput($_POST['email']);
    $text = testInput($_POST['text']);
}

if (!empty($name) && !empty($email)) {
    $result = [
        'code' => '1',
        'message' => 'Форма успешно отправлена',
    ];
    send_mail($name, $email, $text);

} else {
    $result = [
        'code' => '0',
        'nameErr' => $nameErr,
        'emailErr' => $emailErr,
        'message' => 'Форма не прошла валидацию на сервере',
    ];
}

function send_mail($name, $email, $text) {
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer();

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
}

echo json_encode($result); // кодирует массив в JSON