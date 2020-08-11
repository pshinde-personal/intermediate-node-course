const mongoose = require('mongoose');

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blog-post');

module.exports = (req, res) => {

    const blogId = req.params.blogId;
    Blog.findById( blogId)
        .populate('author')
        .populate('comments.postedBy')
        .exec((err, data)=>{
            if(err){
                res.status(500).json({ 
                    'success' : false,
                    'message' : err
                });
            } 
            else if(!data){
                res.status(404).json({
                    success : false,
                    message :  'not Found'});
            }
            else {
                res.status(200).json({ 
                    success: true,
                    message : data });
            }
        })
};