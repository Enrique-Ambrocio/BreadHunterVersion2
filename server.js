const express = require('express')
const app = express()
const cors = require('cors')
const dbo = require('./db/conn')
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 3002

// imported router objects
const addJobRoutes = require('./routes/addJob')
const jobRoutes = require('./routes/jobs')
const jobDetailsRoutes = require('./routes/jobDetails')
const jobDetails2Routes = require('./routes/jobDetails2')

app.use(cors());

// Middleware that will be used to read JSON payload from post requests
app.use(express.json());

// Middleware that will parse all bodies coming from a form. Package wil also automatically call next
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware that allows read access to the build folder. 
app.use(express.static(path.join(__dirname, './client/build')))

// Routes 
app.use(addJobRoutes)
app.use(jobRoutes)
app.use(jobDetailsRoutes)
app.use(jobDetails2Routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Starts a server and will listen to port 3000 for connections and will initaite the data base connection.
app.listen(port, () => {
    dbo.connectToServer((client) => {
        console.log(client)
    });
    console.log(`Server is running on Port: ${port}`)
})