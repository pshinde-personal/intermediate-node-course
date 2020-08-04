const items = require('express').Router();
require('dotenv').config("../../../.env");
const { Client } = require('pg');
var connectionString = process.env['pgConnection'];
const client = new Client({
    connectionString: connectionString
});
client.connect();

module.exports = (req, res) => {
  const item = req.body.newItem;

  const text = 'insert into food_item values ($1, $2, $3, $4, $5)';
  let values = [item.id, item.name, item.quantity, item.price, item.category]
  client.query(text, values, function (err, result) {
      if (err) {
          res.status(400).send(err);
      }
      else
        res.status(200).send({ affectedRows: result.rowCount });

  });
};