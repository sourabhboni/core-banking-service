const express = require('express');
const helmet = require('helmet');
const connectDB = require('../config/database');
const accountRoutes = require('../routes/accountRoutes');

// Create an Express application
const app = express();

// Connect to MongoDB
connectDB();

// Use Helmet to secure HTTP headers
app.use(helmet());

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Register account routes
app.use('/api/accounts', accountRoutes);

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Core Banking Service!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
