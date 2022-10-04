const express = require('express')
const router = express.Router()
const path = require('path')
const { getJobForm, postJobForm } = require('../controller/addJob')

router.post('/add-job', postJobForm)

module.exports = router