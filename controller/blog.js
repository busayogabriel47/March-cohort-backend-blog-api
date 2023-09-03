const express = require('express');
const blog  = require('../model/blog')

const router = express.Router()

//Get all blog posts
const getBlogs = async(req, res) => {
    try{
        const blogpost = await blog.find()
        res.status(200).json(blogpost)
    }catch(error){
        res.status(404).json(message.error)
    }
}


//Get individual blogpost
const getBlog = async(req, res) => {
    try{
        const post = await blog.findById()
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//create new blogpost
const createBlog = async(req, res) => {
    const blog = req.body

    const newblogpost = new blog({...blog, createAt: new Date().toISOString})
    try{
        await newblogpost.save(); 
        res.status(200).json(newblogpost)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

module.exports = {router, getBlog, getBlogs, createBlog}









