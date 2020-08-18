const mongoose = require('mongoose');

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blog-post');


function sendResponse(res,err,data){
    if (err){
        res.json({
        success: false,
        message: null,
        error: err
        });
    } else if (!data){
        res.json({
        success: false,
        message: null,
        error: "Not Found"
        });
    } else {
        res.json({
        success: true,
        message: "changes made successfully",
        error: null 
        });
    }
}


module.exports = (req, res) => {
    const blogId = req.params.blogId;
    Blog.findOneAndUpdate( blogId, 
    {
        ...req.body.newBlog
    },
    (err, data)=>{
        sendResponse(res,err,data);
    });
};
