const AddJob = require('../models/addJob');
const getDb = require('../db/conn').getDB
const ObejectId = require('mongodb').ObjectId

exports.getJobs = (req, res, next) => {
    AddJob.getAllJobs()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.deleteJob = (req, res, next) => {
    const db = getDb();
    let myQuery = { _id: ObejectId(req.params.Id) }
    db.collection('jobs').deleteOne(myQuery)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}