// Import the express library
const express = require('express');

// Create an instance of an express application
const app = express();

// Define the port the server will run on.
// Use the PORT from environment variables for deployment, or 3000 for local development.
const PORT = process.env.PORT || 3000;

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Zomato Sustain API is running! Kaif 🌿');
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});