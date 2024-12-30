const express = require('express');
const cors = require('cors');
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// public folder for users profile
app.use('/profileImgs', express.static(path.join(__dirname, 'public/profileImgs')));
app.use('/resume', express.static(path.join(__dirname, 'public/resumes')));
app.use('/offerLetter', express.static(path.join(__dirname, 'public/offerLetter')));

// database import 
const mongodb = require('./config/MongoDB');
mongodb();


// routes for user
app.use('/api/v1/user', require('./routes/user.route'));
// routes for student user
app.use('/api/v1/student', require('./routes/student.route'));
// routes for tpo user
app.use('/api/v1/tpo', require('./routes/tpo.route'));
// routes for management user
app.use('/api/v1/management', require('./routes/management.route'));
// routes for admin user
app.use('/api/v1/admin', require('./routes/superuser.route'));
// route for company
app.use('/api/v1/company', require('./routes/company.route'));


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});