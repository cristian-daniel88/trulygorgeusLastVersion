<?php
    $from = "test@trulygorgeous.co.uk";
    $to = "test@trulygorgeous.co.uk";
    $subject = "NEW BRIDES ENQUIRES";
    $name =  $_POST["name"];
    $from2 = $_POST["from2"];
    $phone = $_POST["phone"];
    $weddingDate = $_POST["weddingDate"];
    $appointmentDate =  $_POST["appointmentDate"];
    $details = $_POST["details"];
    
    $message = "Name: " . $name . "\nMail: " . $from2 . "\nPhone: " . $phone . "\nWedding Date: " . $weddingDate . "\nAppointment Date: " . $appointmentDate . "\nDetails: " . "\n" .  $details;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From:" . $from2;
    $htmlBody = '
    <body>
    <style>
      div, a , b {
        font-size: 20px;
      }
      .container {
       margin: auto;
       height: auto;
       border: solid 3px black;
       border-radius: 10px;
       padding: 10px;
      }
      .details {
          margin-bottom : 20px;
          font-style: italic;
      }
    </style>

    <div class="container bg-transparent">
      <h2>New Brides Enquires</h2>
      <hr>
      <div><b>Name: </b>'.$name.'</div>
      <br>
      <div><b>Email: </b> <a href="mailto:'.$from2.'?subject = Feedback&body = Message">'.$from2.'</a></div>
      <br>
      <div><b>Phone: </b>'.$phone.'</div>
      <br>
      <div><b>Wedding date: </b>'.$weddingDate.'</div>
      <br>
      <div><b>Appointment date: </b>'.$appointmentDate.'</div>
      <br>
      <div><b>Details: </b></div>
      <div class="details">'.$details.'</div>
    </div>
    </body>';
    mail($to,$subject,$htmlBody, $headers);
    header("Location:sentmessage.html");
?>