
const foodItem = require('express').Router();

const bodyParser= require('body-parser');
foodItem.use(bodyParser.json());
const { Client } = require('pg');

var connectionString = "postgres://postgres:postgres@localhost:5432/omnifood";

const client = new Client({
    connectionString: connectionString
});

client.connect();

foodItem.get('/', function (req, res) {
  client.query('SELECT * FROM food_item', [1], function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      res.status(200).send(result.rows);
  });
});

