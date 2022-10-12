const express = require('express')
const router = express.Router()
const path = require('path')
const { postCalendarEvent, deletePostCalendarDetails, getCalendarEvents } = require('../controller/jobDetails')

console.log(router)


router.get('/job-details/:id', getCalendarEvents)

router.post('/job-details/:id', postCalendarEvent)

router.delete('/job-details/:id', deletePostCalendarDetails)

module.exports = router