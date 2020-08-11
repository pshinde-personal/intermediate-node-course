const mongoose = require('mongoose');

const User = require('../../../models/User');
mongoose.connect('mongodb://localhost/blog-post');

module.exports = (req, res) => {
    
    const userId = req.params.userId;
    User.findByIdAndDelete(userId, (err, data)=>{
        if(err){
            res.status(500).json({
                'error' : err,
                'message' : 'got error'
            });
        }
        else if(!data){
            res.status(404).json({ 'message' : 'Not Found' });
        }
        else {
            res.status(200).json({ 
                'success' : true, 
                'data' :data,
                'message' : 'deleted successfully..'
            });
        }
    });

};