const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sumithra:sumithra@cluster0.bis5s.mongodb.net/softskillapp")
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const PORT =  8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});