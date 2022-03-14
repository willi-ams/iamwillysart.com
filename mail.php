<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTO = "iamwillysart@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTO, $subject, $txt, $headers);
    echo "Your mail has been sucessfully sent. Thanks!";

    // header("location: index.html?mailsend");
    header("Location: http://iamwillysart.com");

}

?>