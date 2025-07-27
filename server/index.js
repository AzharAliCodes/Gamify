require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose'); // *! setup backed later 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Basic Route
app.get('/', (req, res) => {
  res.send('Gamify Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
