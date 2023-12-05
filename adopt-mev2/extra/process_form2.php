<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "engineeingsoftware@gmail.com";  // Replace with your email address
    $subject = "Contact Form Submission";
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    // Use mail() function to send the email
    mail($to, $subject, $message, $headers);
}
?>
