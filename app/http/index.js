/*jshint -W033 */
const routes = require('express').Router();

const foodModule = require('./routes/food');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to root http!' });
});

routes.use('/food-items', foodModule)

routes.use('/*', (_req, res)=> {
    res.status(401).json({
        message: 'welcome to WildCard' 
    })
})

module.exports = routes;