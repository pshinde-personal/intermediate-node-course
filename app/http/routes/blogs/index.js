/*jshint -W033 */
const blogs = require('express').Router();

blogs.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to blogs!' });
});


module.exports = blogs;