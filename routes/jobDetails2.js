const express = require('express')
const router = express.Router()
const { getJobDetails } = require('../controller/jobDetails')

router.get('/job-details/:id/details', getJobDetails)


module.exports = router