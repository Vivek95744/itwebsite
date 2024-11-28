const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8081;

const SECRET_TOKEN = '11c2b1c8bef7f45cb0f6e148399f249b32'; // Replace with your secret

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define the POST endpoint
app.post('/github-webhook', (req, res) => {
    const receivedToken = req.headers['x-webhook-token'];  // Token sent in the header
    if (receivedToken !== SECRET_TOKEN) {
        return res.status(403).send('Forbidden: Invalid token');
    }

    const eventData = req.body;
    console.log('Received Event Data:', eventData);

    res.status(200).send('Event received successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});