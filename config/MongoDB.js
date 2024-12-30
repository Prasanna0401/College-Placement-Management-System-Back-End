const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database, please enjoy using the database!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;