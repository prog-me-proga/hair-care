<?php
    https://api.telegram.org/bot1038781650:AAEyqJWaIfZ_cKBWd_GlcbllfYHbVjFpwTc/getUpdates
    
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $message = $_POST['user_message'];
    $token = "1038781650:AAEyqJWaIfZ_cKBWd_GlcbllfYHbVjFpwTc";
    $chat_id ="-343384582";
    
    $arr = array(
        'Your Name:' => $name,
        'Your Phone Number:' => $phone,
        'Your Message:' => $message,
    );
    
    foreach ($arr as $key => $value) {
        $txt .= "<b>".$key."</b>" .$value."%0A";
    }
    
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    
    if ($sendToTelegram) {
        header('Location: okay.html');
     }
     else{
         echo "Error 404";
     }
    
?>