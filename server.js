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
    <title>Request GPS Data</title>
    <script>
        function requestGPSData() {
            // Check if geolocation is available in the user's browser
            if (navigator.geolocation) {
                // Request the current position
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // On success, retrieve the coordinates
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        // Display the coordinates
                        alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
                    },
                    (error) => {
                        // Handle errors (like if the user denies permission)
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                alert("User denied the request for Geolocation.");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                alert("Location information is unavailable.");
                                break;
                            case error.TIMEOUT:
                                alert("The request to get user location timed out.");
                                break;
                            default:
                                alert("An unknown error occurred.");
                                break;
                        }
                    }
                );
            } else {
                // Geolocation is not supported by the browser
                alert("Geolocation is not supported by this browser.");
            }
        }
    </script>
</head>
<body>
    <button onclick="requestGPSData()">Get GPS Location</button>
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
