const express = require('express')
const router = express.Router()
const { getJobs, deleteJob } = require('../controller/jobs')


router.get('/jobs', getJobs)

router.delete('/jobs/:Id', deleteJob)

module.exports = router
// exporting router object 