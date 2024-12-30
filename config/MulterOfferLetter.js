const multer = require('multer');
const path = require('path');

// Configure multer for offer letter uploads
const offerLetterStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/offerLetter/'); // Folder to save offerLetter
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const uploadOfferLetter = multer({
  storage: offerLetterStorage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Set file size limit (e.g., 10MB)
  fileFilter: (req, file, cb) => {
    // Only accept PDF, DOC, DOCX file formats
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Only PDF, DOC, or DOCX files are allowed!');
    }
  }
});

module.exports = uploadOfferLetter;
