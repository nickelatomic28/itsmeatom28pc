let express = require('express');
let restaurantapi = require('../controllers/restaurantapi');

let localityRoute = express.Router();

localityRoute.route('/restaurants')
            .get(restaurantapi.getRestaurant)
            




module.exports = localityRoute;