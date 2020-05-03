/*jshint -W033 */
const blogs = require('express').Router();
const allBlogs = require('./allBlogs');
const addBlog = require('./addBlog')

const bodyParser= require('body-parser');
blogs.use(bodyParser.json());


blogs.get('/', allBlogs);
blogs.post('/', addBlog);


module.exports = blogs;