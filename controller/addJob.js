const AddJob = require('../models/addJob')

exports.postJobForm = (req, res, next) => {
    const company = req.body.company;
    const title = req.body.job
    const location = req.body.location
    const industry = req.body.industry
    const AddedJob = new AddJob(company, title, location, industry);
    AddedJob
        .save()
        .then(result => {
            res.redirect('/jobs')
        })
        .catch(err => {
            console.log(err)
        })
}