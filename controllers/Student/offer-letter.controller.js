const User = require('../../models/user.model');
const JobSchema = require('../../models/job.model');

const UploadOfferLetter = async (req, res) => {
  try {
    // if file is sended from frontend
    if (!req.file) return res.status(400).send('No resume uploaded');

    const job = await JobSchema.findById(req.body.jobId);

    if (!job) return res.status(400).send('Job not found!');

    const offerLetterPath = "/" + req.file.fieldname + "/" + req.file.filename;

    // finding respected applicants to upload offer letter
    const applicant = job?.applicants?.find(app => app.studentId == req.body.studentId);

    if (!applicant) return res.status(400).send('Error in uploading: student not applied to this job!');

    // Update offer letter path
    applicant.offerLetter = offerLetterPath;

    await job.save();

    return res.json({ msg: 'Offer Letter Uploaded Successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error', error: error });
  }
}

const DeleteOfferLetter = async (req, res) => {
  try {
    if (!req.params) return res.status(400).send('Error while receiving data!');

    const job = await JobSchema.findById(req.params.jobId);

    if (!job) return res.status(400).send('Job not found!');

    const updatedApplicants = job.applicants.map(app => {
      if (app.studentId == req.params.studentId) {
        const { offerLetter, ...rest } = app.toObject(); // Destructure to remove offerLetter
        return rest; // Return the applicant object without offerLetter
      }
      return app;
    });

    job.applicants = updatedApplicants;

    // Save the job document
    await job.save();

    return res.json({ msg: 'Offer Letter Deleted Successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Server error', error: error });
  }
}

module.exports = {
  UploadOfferLetter,
  DeleteOfferLetter,
};