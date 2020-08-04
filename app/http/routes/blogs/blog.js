const mongoose = require('mongoose');

const Blog = require('../../../models/Blog');
// mongoose.connect('mongodb://localhost/blogs');

module.exports = (req, res) => {

    res.json({ message: "single blog",
            data : req.params.id
    });
    // const blogId = req.params.blogId;
    // Blog.findById( blogId, (err, data)=>{
    //     if(err){
    //         res.status(500).json({ 
    //             'success' : false,
    //             'message' : err
    //         });
    //     } 
    //     else if(!data){
    //         res.status(404).json({
    //             success : false,
    //          message :  'not Found'});
    //     }
    //     else {
    //         res.status(200).json({ 
    //             success: true,
    //             message : data });
    //     }
    // });

};