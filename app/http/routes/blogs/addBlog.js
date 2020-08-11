/*jshint -W033 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blog-post');


function sendResponse(res,err,data){
    if (err){
        res.json({
            success: false,
            message: err
        })
    } else if (!data){
            res.json({
            success: false,
            message: "Not Found"
        })
    } else {
        res.json({
            success: true,
            data: data
        })
    }
}

module.exports = (req, res) => {
    Blog.create(
    {
        ...req.body.newBlog,
    },
    (err,data)=>{
        sendResponse(res,err,data);
    });

};