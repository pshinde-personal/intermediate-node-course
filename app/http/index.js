/*jshint -W033 */
const routes = require('express').Router();
const users = require('../http/routes/users')
const blogs = require('./routes/blogs')
const authHandle = require("./routes/auth")

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to root http!' });
});

routes.use('/blogs', blogs)
routes.use('/users', users)
routes.use('/auth', authHandle)

routes.use('/*', (req, res)=> {
    res.status(401).json({
        message: 'welcome to WildCard' 
    })
})

module.exports = routes;