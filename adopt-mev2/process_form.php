<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';


$phpmailer->isSMTP();
$phpmailer->Host = 'localhost';
$phpmailer->SMTPAuth = false;
$phpmailer->Port = 1025;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $phpmailer = new PHPMailer();

    try {
        // Server settings
        $phpmailer->isSMTP();
        $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = '23cddaabbd02b3';
        $phpmailer->Password = '9f93c734cb7152';

        // Recipients
        $phpmailer->setFrom($email, $name);
        $phpmailer->addAddress('engineeingsoftware@gmail.com', 'Your Name'); // Replace with your email and name

        // Email content
        $phpmailer->isHTML(true);
        $phpmailer->Subject = 'New Contact Form Submission';
        $phpmailer->Body = "Name: $name <br> Email: $email <br> Message: $message";

        // Send email
        $phpmailer->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo 'Email could not be sent. Mailer Error: ', $phpmailer->ErrorInfo;
    }
}
?>
