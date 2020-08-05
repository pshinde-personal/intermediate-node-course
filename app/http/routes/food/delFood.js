const items = require('express').Router();
require('dotenv').config("../../../.env");
const { Client } = require('pg');
var connectionString = process.env['pgConnection'];
const client = new Client({
    connectionString: connectionString
});
client.connect();

module.exports = (req, res) => {
  let text = 'delete FROM food_item where food_id = $1';
  let values = [req.params.id]
  client.query(text, values, function (err, result) {
      if (err) {
          console.log(err);
          res.status(400).send(err);
      }
      else
      {
        if(result.rowCount)
        res.status(200).send(req.params.id);
        else 
          res.status(405).send('Not allowed method')
      }
    });
};