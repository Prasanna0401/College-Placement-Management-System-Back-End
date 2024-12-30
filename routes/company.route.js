const express = require('express');

// router after /api/v1/company/
const router = express.Router();

const authenticateToken = require('../middleware/auth.middleware');


const { AddCompany, CompanyDetail, AllCompanyDetail, DeleteCompany } = require('../controllers/Company/company.all-company.controller');



router.get('/company-detail', authenticateToken, AllCompanyDetail);
// router.get('/company-detail/:companyId', authenticateToken, CompanyDetail);

// company details 
router.post('/add-company', authenticateToken, AddCompany);

router.post('/delete-company', authenticateToken, DeleteCompany);

router.get('/company-data', CompanyDetail);





module.exports = router;