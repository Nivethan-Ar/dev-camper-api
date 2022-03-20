const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const connectDB = require('./config/db')

// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Deb logging middleware
app.use(morgan('tiny'))

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
