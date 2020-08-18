const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../../../models/User');
mongoose.connect('mongodb://localhost/blog-post');

module.exports = (req, res) => {
	if(req.body.user!=='undefined')
    		{
    		const {email, password} = req.body.user;
    console.log(req.body.user);

    User.findOne({email: email}, (err, data)=> {
      if(err) {
        res.json({
          success: false,
          message: null,
            error: err
        }) 
      }
      else if(!data) {
        res.json({
          success: false,
          message: null,
          error: "incorrect email or password!"
        })
      } 
      else {
        bcrypt.compare(password, data.password, function(err, result) {
          result
            ? res.json({
                success: true,
                message: data,
                error: null
              })
            : res.json({
              success: false,
              message: null,
              error: "incorrect password"
            })
        })
      }
    })
    }
    else res.sendStatus(401)
};
