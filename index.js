const express = require("express");
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const employeesData = require('./data.js')
const blog = require('./routes/blog')

dotenv.config()

const app = express()

// const StaticPath = path.join(__dirname, './public/Bootstrap')

// app.use(express.static(StaticPath))

app.use('/api/blog', blog)

//insert dummy data into mongoDb
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
}).then(()=> console.log("Database connected!"))
.catch(err => console.log(err.message))


app.listen(8000, ()=> {
    console.log("App is running on port 8000")
})
