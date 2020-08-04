// Bring in our dependencies
const express = require('express');
// const routes = require('./app/http');

//  Connect all our routes to our application
// app.use('/', routes);

var app = express();

const { Client } = require('pg');

var connectionString = "postgres://postgres:postgres@localhost:5432/omnifood";

const client = new Client({
    connectionString: connectionString
});

client.connect();

// get data from db

app.get('/food-items', function (req, res) {
  client.query('SELECT * FROM food_item', [], function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});


app.get('/admin', function (req, res) {
  client.query('SELECT * FROM admin', [], function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});

app.get('/orders', function (req, res) {
  client.query('SELECT * FROM orders', [], function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});


// Turn on that server!
app.listen(8000, () => {
  console.log('App listening on port 8000');
});