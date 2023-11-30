<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];
    $userMessage = $_POST["message"];
    $companyEmail = "engineeingsoftware@";  // Replace with your company's email address

    // Send confirmation email to the user
    $userSubject = "Thank you for contacting Pet Connect";
    $userMessage = "Hello,\n\nThank you for reaching out to Pet Connect. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Pet Connect Team";
    mail($userEmail, $userSubject, $userMessage);

    // Send notification email to the company
    $companySubject = "New message from Pet Connect Contact Form";
    $companyMessage = "You have received a new message from:\n\nEmail: $userEmail\nMessage:\n$userMessage";
    mail($companyEmail, $companySubject, $companyMessage);

    // You can add additional processing or error handling here if needed

    // Redirect back to the contact page or show a thank you message
    header("Location: contact.html");  // Replace with the actual URL of your contact page
    exit();
}
?>
