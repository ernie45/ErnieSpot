<?php 
    $receiver = "h_ernesto@ymail.com";
    $name = $_POST["name"];
    $message = $_POST["message"];
    $content = "Name: " . $name . "\nMessage: " . $message;
    mail($receiver, "Contact", $content);
    // header("Location:thanks.html");
?>