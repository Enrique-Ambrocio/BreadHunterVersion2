const getDb = require('../db/conn').getDB
const ObejectId = require('mongodb').ObjectId
const Event = require('../models/Event')

exports.getJobDetails = (req, res, next) => {
    const db = getDb()
    console.log(req)
    let myQuery = { _id: ObejectId(req.params.id) }
    db.collection('jobs').findOne(myQuery)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getCalendarEvents = (req, res, next) => {
    Event.getAllEvents(req.params.id)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postCalendarEvent = (req, res, next) => {
    const title = req.body.title
    const time = req.body.time
    const description = req.body.description
    const eventId = req.body.dateId
    const jobId = req.params.id
    const addedEvent = new Event(title, time, description, eventId, jobId)
    addedEvent.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.deletePostCalendarDetails = (req, res, next) => {
    Event.deleteEvent(req.params.id, req.params.EventId)
        .then(result =>
            res.json(result))
        .catch(err => console.log(err))
}
