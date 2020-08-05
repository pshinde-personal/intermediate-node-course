const foodModule = require('express').Router();
const foodItems = require('./getAllFoodItems');
const foodItem = require('./getFood');
const delFood = require('./delFood');
const addFood = require('./addFoodItem');
const updateFood = require('./updateFoodItem');

const bodyParser= require('body-parser');
foodModule.use(bodyParser.json());

// all items
foodModule.get('/', foodItems);
// insert item
foodModule.post('/', addFood);
// find item by id
foodModule.get('/:id', foodItem);
// update item
foodModule.put('/:id', updateFood);
// delete item by id
foodModule.delete('/:id', delFood);


module.exports = foodModule;
