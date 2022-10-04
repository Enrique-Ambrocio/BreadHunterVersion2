// gets the function that returns the database  
const getDb = require('../db/conn').getDB

module.exports = class AddJob {
    constructor(CompanyName, Title, Location, Industry) {
        this.company = CompanyName;
        this.title = Title;
        this.location = Location;
        this.industry = Industry
    }

    // will add the posted object to the mongoDB database
    save() {
        // returns the database 
        const db = getDb();
        return db.collection('jobs').insertOne(this)
            .catch(error => console.log(error))
    }

    // will fetch all jobs from the mongoDB database
    static getAllJobs() {
        const db = getDb();
        return db.collection('jobs')
            .find()
            .toArray()
            .then(products => {
                console.log(products)
                return products
            })
            .catch(err => {
                console.log(err)
            })
    }
}

