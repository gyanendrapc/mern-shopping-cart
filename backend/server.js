// getting dotenv
require('dotenv').config();

// express configuration
const express = require('express')
const app = express()
const PORT = process.env.PORT;

// connection to mongodb
const connectDB = require('./config/db');
connectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})