/*jshint -W033 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../../../models/User');
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
        message: 'changes are made successfully!'
        })
    }
}

module.exports = (req, res) => {
    bcrypt.hash(req.body.newUser.password, saltRounds, function(err, hash) {
        User.findByIdAndUpdate(
            req.params.userId,
            {
                ...req.body.newUser,
                password: hash  
            },
            (err,data)=>{
                sendResponse(res,err,data);
            });
    });

};