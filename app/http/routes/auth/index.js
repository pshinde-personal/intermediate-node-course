/*jshint -W033 */
const auth = require('express').Router();
const jwt = require('jsonwebtoken')

const bodyParser= require('body-parser');
const { json } = require('express');
auth.use(bodyParser.json());

// Routes

// auth.get('/', checkToken, (req,res) =>{

//   // verify if token is valid or not ..
//   // basically used to secure the end point

//   jwt.verify(req.token, 'SecretKey!!', (err, authData) => {
//     if(!err) {
//       res.json({
//         message: authData
//       })
//     }
//     else {
//       res.sendStatus(403)
//     }
//   })
// })

auth.post('/', (req, res) => {
  let user = req.body.user;

  //create new token for user and pass it in responce

  jwt.sign({user: user}, 'SecretKey!!', {expiresIn: '10h'}, (err, token) => {
    res.json({
      token 
    })
  })
});

function checkToken(req, res, next) {

  let bearerHeader = req.headers['authorization'];

  // if token is provided in authorization header proceed else forbid
  
  if(bearerHeader !== undefined) {
    let barray = bearerHeader.split(" ");
    let token = barray[1];
    console.log(token);
    req.token = token;
    next()
  }
  else res.sendStatus(403)
}

module.exports = auth;