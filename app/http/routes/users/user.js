const mongoose = require('mongoose');

const User = require('../../../models/User');
mongoose.connect('mongodb://localhost/userData');

module.exports = (req, res) => {

    const userId = req.params.userId;
    User.findById(userId, (err, data)=>{
        if(err){
            res.status(500).json({ 
                success : false,
                message : err
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
    });

};