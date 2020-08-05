// Bring in our dependencies
const express = require('express');
const routes = require('./app/http');

var app = express();

//  Connect all our routes to our application
app.use('/', routes);

// Turn on that server!
app.listen(8000, () => {
  console.log('App listening on port 8000');
});