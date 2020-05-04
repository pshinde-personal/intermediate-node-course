/*jshint -W033 */
const blogs = require('express').Router();
const blog = require('./blog');
const allBlogs = require('./allBlogs');
const addBlog = require('./addBlog')
const delBlog = require('./delBlog')
const putBlog = require('./putBlog')

const bodyParser= require('body-parser');
blogs.use(bodyParser.json());

// Routes


blogs.get('/', allBlogs);
blogs.get('/:blogId', blog);

blogs.post('/', addBlog);
blogs.delete('/:blogId', delBlog);
blogs.put('/:blogId', putBlog);


module.exports = blogs;