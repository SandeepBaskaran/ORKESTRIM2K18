<?php
/* Set e-mail recipient */
$to  = "orkestrim2k18@gmail.com";

/* Check all form inputs using check_input function */
$yourname = check_input($_POST['name'], "Enter your name");
$email    = check_input($_POST['email'], "Enter your email");
$subject  = check_input($_POST['subject'], "Enter the subject");
$message = check_input($_POST['message'], "Write your message");
$headers = "From: $to\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}

/* Let's prepare the message for the e-mail */
$message = "<p> Contact form has been submitted by: </p>
Name: $yourname <br/>
E-mail: $email <br/>
Message: <br/>$message";

mail($to, $subject, $message, $headers);

header('Location: http://www.orkestrim.com/thankyou.html');

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please check the error and try again:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>
