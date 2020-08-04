/*jshint -W033 */
const routes = require('express').Router();
// const users = require('../http/routes/users')
// const blogs = require('./routes/blogs')
const food = require('./routes/food');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to root http!' });
});

// routes.use('/blogs', blogs)
// routes.use('/users', users)
routes.use('/food', food)



routes.use('/*', (req, res)=> {
    res.status(401).json({
        message: 'welcome to WildCard' 
    })
})

module.exports = routes;