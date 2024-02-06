<?php
require_once 'vendor/autoload.php'; // Twilio SDK

use Twilio\Rest\Client;

// Twilio account credentials
$twilioAccountSid = 'AC9b05b3c637b73a23d42884121bcd4e5d';
$twilioAuthToken = '91da1479319cb1db68cdeff59ff3630a';
$twilioPhoneNumber = '+18602189530';

// Odbieranie danych z formularza
$to = $_POST['to'];
$message = $_POST['message'];

// Inicjowanie klienta Twilio
$client = new Client($twilioAccountSid, $twilioAuthToken);

try {
    // Wysyłanie SMS-a
    $client->messages->create(
        $to,
        array(
            'from' => $twilioPhoneNumber,
            'body' => $message
        )
    );
    echo 'SMS został wysłany!';
} catch (Exception $e) {
    echo 'Wystąpił błąd: ' . $e->getMessage();
}
?>