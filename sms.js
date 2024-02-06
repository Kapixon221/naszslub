<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wysyłanie SMS przez Twilio</title>
</head>
<body>
    <h2>Wysyłanie SMS przez Twilio</h2>
    <label for="phoneNumber">Numer telefonu:</label><br>
    <input type="text" id="phoneNumber" name="phoneNumber" required><br><br>
    <label for="message">Wiadomość:</label><br>
    <textarea id="message" name="message" required></textarea><br><br>
    <button onclick="sendSMS()">Wyślij SMS</button>

    <script>
        function sendSMS() {
            var phoneNumber = document.getElementById('phoneNumber').value;
            var message = document.getElementById('message').value;

            // Twój kod integracji z Twilio tutaj
            // Należy użyć biblioteki Twilio w języku JavaScript lub innych języków

            // Poniżej znajduje się przykład kodu JavaScript, który używa biblioteki twilio.js
            // Upewnij się, że wcześniej załączyłeś bibliotekę twilio.js w sekcji nagłówka HTML

            Twilio.sendMessage({
                to: phoneNumber,
                body: message
            }).then(function() {
                alert('Wiadomość SMS została wysłana!');
            }).catch(function(err) {
                console.error('Wystąpił błąd podczas wysyłania SMS: ', err);
                alert('Wystąpił błąd podczas wysyłania SMS.');
            });
        }
    </script>
</body>
</html>