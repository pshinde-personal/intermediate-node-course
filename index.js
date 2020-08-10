// Bring in our dependencies
const app = require('express')();
const routes = require('./app/http');
var cors = require('cors')


// add cross origin resource sharing
app.use(cors());

//  Connect all our routes to our application
app.use('/', routes);


// Turn on that server!
app.listen(8000, () => {
  console.log('App listening on port 8000');
});