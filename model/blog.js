const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    desc: {type: String, required: true},
    except: {type: String, required: true},
}, {timestamps: true})


const blogModel = mongoose.model("blog", blogSchema)

module.exports = blogModel;