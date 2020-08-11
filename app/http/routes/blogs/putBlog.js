const mongoose = require('mongoose');

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blog-post');


function sendResponse(res,err,data){
    if (err){
        res.json({
        success: false,
        message: err
        });
    } else if (!data){
        res.json({
        success: false,
        message: "Not Found"
        });
    } else {
        res.json({
        success: true,
        message: 'changes are made successfully!'
        });
    }
}


module.exports = (req, res) => {
    const blogId = req.params.blogId;
    Blog.findByIdAndUpdate( blogId, 
    {
        ...req.body.newBlog
    },
    (res, err,data)=>{
        sendResponse(res,err,data);
    });
};