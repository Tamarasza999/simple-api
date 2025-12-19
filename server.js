const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Homepage
app.get('/', (req, res) => {
  res.send('This is the public homepage of the simple API.');
});

// The main API endpoint
app.get('/api/secret-data', (req, res) => {
  res.json({
    message: 'This is sensitive data from the protected backend!',
    serverTime: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Simple API listening on port ${PORT}`);
});