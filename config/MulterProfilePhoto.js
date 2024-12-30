const multer = require('multer');
const path = require("path");

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/profileImgs/'); // Folder to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});



const uploadUserProfile = multer({ storage: storage });

module.exports = uploadUserProfile;
