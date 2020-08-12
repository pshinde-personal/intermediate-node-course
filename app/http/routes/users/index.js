/*jshint -W033 */
const users = require('express').Router();
const allUsers = require('./allUsers');
const addUser = require('./addUser')
const user = require('./user')
const delUser = require('./delUser')
const putUser = require('./putUser')
const getUserId = require('./getUserId');

const bodyParser= require('body-parser');
users.use(bodyParser.json());


//   coming from :  localhost:8000/users/

// Routes

users.get('/', allUsers);
users.get('/:userId', user);

users.post('/', addUser); 
users.delete('/:userId', delUser)
users.put('/:userId', putUser)

users.post('/getUserId', getUserId)
module.exports = users;