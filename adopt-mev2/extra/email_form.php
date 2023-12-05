<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

$phpmailer = new PHPMailer();

$phpmailer->isSMTP();
$phpmailer->Host = 'localhost';
$phpmailer->SMTPAuth = false;
$phpmailer->Port = 1025;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];
    $userMessage = $_POST["message"];
    $companyEmail = "engineeingsoftware@gmail.com"; // Our company email address

    // Send confirmation email to the user
    $userSubject = "Thank you for contacting Pet Connect";
    $userMessage = "Hello,\n\nThank you for reaching out to Pet Connect. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Pet Connect Team";
    mail($userEmail, $userSubject, $userMessage);

    // Send notification email to the company
    $companySubject = "New message from Pet Connect Contact Form";
    $companyMessage = "You have received a new message from:\n\nEmail: $userEmail\nMessage:\n$userMessage";
    mail($companyEmail, $companySubject, $companyMessage);

    // Redirect back to the home page
    header("/index.html");
    exit();
}
?>
