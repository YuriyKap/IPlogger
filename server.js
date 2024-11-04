const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Отправка HTML-страницы при заходе на сервер
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GPS Location</title>
        </head>
        <body>
            <h1>Requesting GPS Location</h1>
            <script>
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            position => {
                                const { latitude, longitude } = position.coords;
                                sendLocationToServer(latitude, longitude);
                            },
                            error => {
                                console.error("Error getting location:", error);
                            }
                        );
                    } else {
                        alert("Geolocation is not supported by this browser.");
                    }
                }

                function sendLocationToServer(latitude, longitude) {
                    fetch('/location', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ latitude, longitude })
                    })
                    .then(response => response.json())
                    .then(data => console.log("Location sent successfully:", data))
                    .catch(error => console.error("Error sending location:", error));
                }

                // Запрашиваем координаты при загрузке страницы
                window.onload = getLocation;
            </script>
        </body>
        </html>
    `);
});

// Обработка POST-запроса для получения координат
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received coordinates: Latitude - ${latitude}, Longitude - ${longitude}`);
    res.json({ status: 'Location received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
