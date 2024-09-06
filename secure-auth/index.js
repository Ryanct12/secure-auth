require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));


const PORT = 5000;
app.use('/api/user', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
