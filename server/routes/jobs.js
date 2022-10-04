const express = require('express')
const { MongoDriverError } = require('mongodb')
const router = express.Router()
const path = require('path')
const { getJobs, deleteJob } = require('../controller/jobs')


router.get('/jobs', getJobs)

router.delete('/jobs/:Id', deleteJob)

module.exports = router
// exporting router object 