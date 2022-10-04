const { ObjectId } = require('mongodb');

const getDb = require('../db/conn').getDB
const ObejectId = require('mongodb').ObjectId

module.exports = class Event {
    constructor(title, time, description, eventId, dayID) {
        this.title = title;
        this.time = time;
        this.description = description
        this.eventId = eventId
        this.dayId = dayID
    }

    save() {
        const db = getDb();
        return db.collection('jobs')
            .updateOne({ _id: ObjectId(this.dayId) },
                { $push: { events: this } })
            .catch(err => {
                console.log(err)
            })
    }

    static getAllEvents(dayId) {
        const db = getDb();
        // Query value that finds the matching job document to that of the request Id
        return db.collection('jobs').find({ _id: { $eq: ObejectId(dayId) } })
            // projection used to limit the return to only the event title and description
            // .project({ _id: 0, 'events.title': 1, 'events.description': 1 })
            .toArray()
            .then(result => {
                console.log(result)
                return result
            })
            .catch(err => console.log(err))
    }
}