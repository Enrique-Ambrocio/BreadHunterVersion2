const { MongoClient } = require('mongodb')
const Db = process.env.ATLAS_URI;

// creating an instance (object) of MongoClient. Additional options passsed are for DeprecationWarnings
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db

// client.connect will return a promise.
module.exports = {
    connectToServer: (callback) => {
        // will return a client object that will give us access to the database
        client.connect()
            .then(result => {
                console.log('Connected')
                // connecting me to the shop database. If it doesnt exist it, mongodb will create it for me.
                _db = result.db('jobs')
                callback(result)
            })
            .catch(error => {
                console.log(error)
            });
    }
    ,

    // will return access to the database 
    getDB: () => {
        return _db
    }
}