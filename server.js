/*jshint -W033 */

const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();

const jwt = require('jsonwebtoken');


const User=require('./src/models/User');
mongoose.connect('mongodb://localhost/userData')

app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const saltRounds = 10;


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
});

// CREATE
app.post('/users',(req,res)=>{
  
  bcrypt.hash(req.body.newData.password, saltRounds, function(err, hash) {
    User.create(
      {...req.body.newData,
      password: hash
      },
      (err,data)=>{
        sendResponse(res,err,data)
    })
  });
  
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  User.findById(req.params.id,(err,data)=>{
    sendResponse(res,err,data)
  })
})

// UPDATE
.put((req,res)=>{

  bcrypt.hash(req.body.newData.password, saltRounds, function(err, hash) {
    User.findByIdAndUpdate(
      req.params.id,
      {...req.body.newData,
      password: hash},
      {
        new:true
      },
      (err,data)=>{
        sendResponse(res,err,data)
      }
    )
  
    })
})
// DELETE
.delete((req,res)=>{
  User.findByIdAndDelete(
    req.params.id,
    (err,data)=>{
      sendResponse(res,err,data)
    }
  )
})


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


app.get('/jwt/hello',(req, res)=>{
  res.json({
    message: "Hello There!"
  })
})


app.post('/jwt/posts', verifyToken, (req, res)=>{

  jwt.verify(req.token, 'this is secret key', (err, authData)=>{
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        success: true,
        message: "Posted Successfully!",
        data: authData
      })
    }
  })
})


app.post('/jwt/registration', (req, res)=>{
  const USER = {
    id: 1,
    name: 'Pratik',
    age: 23
  }
  jwt.sign(USER, 'this is secret key', (err, token)=>{
    if(err){
      res.json({
        success: false,
        message: err
      })
    }
    else {
      res.json({
        success: true,
        message: token,
        detail: 'save this to use it in the Authentication!'
      })
    }
  })
})

function verifyToken(req, res, next){
  const BearerHeader = req.headers.authorization;

  if (typeof BearerHeader !== 'undefined') {
    const bearer = BearerHeader.split(' ');
    const bearerToken = bearer[1]
    req.token = bearerToken

    next()
  }
  else {
    res.sendStatus(403)
  }
}