const mongoose = require('mongoose');

const employees = require('./model/employees.js')


const employeesData = new employees({
    firstname: "salami",
    lastname: "Adebayo",
    username: "salami24",
    email: "salami3@gmail.com",
    phone: "08061646491",
    department: "Software testing",
    nextOfKin: "solomon Adebayo",
    password: "123456",
    salary: "$120k"
})


module.exports = employeesData;









