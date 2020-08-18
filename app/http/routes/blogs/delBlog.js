const mongoose = require('mongoose');

const Blog = require('../../../models/Blog');
mongoose.connect('mongodb://localhost/blog-post');

module.exports = (req, res) => {
    
    const blogId = req.params.blogId;
    Blog.findByIdAndDelete( blogId, (err, data)=>{
        if(err){
            res.status(500).json({ 
                'success' : false,
                'message' : null,
                'error': err
            });
        } 
        else if(!data){
            res.status(404).json({
                'success' : false,
                'message': null,
                'error' :  'not Found'
            });
        }
        else {
            res.status(200).json({ 
                'success': true,
                'message' : data,
                'error': null
            });
        }
    });

};
