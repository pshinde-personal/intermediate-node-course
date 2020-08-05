const items = require('express').Router();
require('dotenv').config("../../../.env");
const { Client } = require('pg');
var connectionString = process.env['pgConnection'];
const client = new Client({
    connectionString: connectionString
});
client.connect();

module.exports = (req, res) => {
    let text = 'SELECT * FROM food_item';
    let values = []
    client.query(text, values, function (err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else res.status(200).send(result.rows);
    });
};