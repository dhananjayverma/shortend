const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); 
const authRoutes = require('./routes/authRoutes');
const urlRoutes = require('./routes/urlRoutes');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/url', urlRoutes);

// Basic route for health check
app.get('/', (req, res) => res.send('API is running...'));

module.exports = app;
