const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    nextOfKin: {type: String, required: true},
    department: {type: String, required: true},
    salary: {type: String, required: true},
}, {timestamps: true})


const employeesModel = mongoose.model("employees", employeesSchema)

module.exports = employeesModel;