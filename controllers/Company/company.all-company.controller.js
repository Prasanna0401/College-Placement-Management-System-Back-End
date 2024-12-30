const CompanySchema = require("../../models/company.model");


const AddCompany = async (req, res) => {
  try {
    const companyName = req.body.companyName;
    const companyDescription = req.body.companyDescription;
    const companyWebsite = req.body.companyWebsite;
    const companyLocation = req.body.companyLocation;
    const companyDifficulty = req.body.companyDifficulty;

    if (await CompanySchema.findOne({ companyName: companyName })) {
      return res.json({ msg: "Company Name Already Exist!" })
    }

    const newcmp = new CompanySchema({
      companyName,
      companyDescription,
      companyWebsite,
      companyLocation,
      companyDifficulty
    });

    await newcmp.save();

    return res.status(201).json({ msg: "Company Created Successfully!", });
  } catch (error) {
    console.log("company.all-company.controller.js = AddCompany => ", error);
    return res.status(500).json({ msg: 'Server Error' });
  }
}


const CompanyDetail = async (req, res) => {
  try {
    if (req.query.companyId) {
      const company = await CompanySchema.findById(req.query.companyId);
      return res.json({ company });
    }
  } catch (error) {
    console.log("company.all-company.controller.js = CompanyDetail => ", error);
    return res.status(500).json({ msg: 'Server Error' });
  }
}

const AllCompanyDetail = async (req, res) => {
  try {
    const companys = await CompanySchema.find();
    // console.log(companys)
    return res.json({ companys });
  } catch (error) {
    console.log("company.all-company.controller.js = AllCompanyDetail => ", error);
    return res.status(500).json({ msg: 'Server Error' });
  }
}

const DeleteCompany = async (req, res) => {
  try {
    // await CompanySchema.findByIdAndDelete(req.body.companyId);
    const company = await CompanySchema.findById(req.body.companyId);
    // company and related jobs removed
    await company.deleteOne();
    return res.json({ msg: "Company Deleted Successfully!" });
  } catch (error) {
    console.log("company.all-company.controller.js = DeleteCompany => ", error);
    return res.status(500).json({ msg: 'Server Error' });
  }
}


module.exports = {
  AddCompany,
  CompanyDetail,
  AllCompanyDetail,
  DeleteCompany
};