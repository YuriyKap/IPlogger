const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Serve HTML page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Request GPS Data</title>
            <script>
                function requestGPSData() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                const latitude = position.coords.latitude;
                                const longitude = position.coords.longitude;

                                // Display the coordinates
                                alert(\`Latitude: \${latitude}, Longitude: \${longitude}\`);

                                // Send data to the server
                                fetch('/location', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ latitude, longitude })
                                })
                                .then(response => response.json())
                                .then(data => {
                                    console.log(data.status);
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                            },
                            (error) => {
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

// Handle POST request to receive coordinates
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Received coordinates: Latitude - ${latitude}, Longitude - ${longitude}`);
    res.json({ status: 'Location received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
