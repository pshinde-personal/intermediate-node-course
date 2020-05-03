/*jshint -W033 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blogs');


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
    bcrypt.hash(req.body.newBlog.extract, saltRounds, function(err, hash) {
        Blog.create(
        {...req.body.newBlog,
        url: hash
        },
        (err,data)=>{
            sendResponse(res,err,data);
        });
    });

};