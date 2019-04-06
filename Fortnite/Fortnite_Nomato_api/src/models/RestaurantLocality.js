let mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({

    id:{
        type:Number,
        require:true
    },
    country_code:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true,
    },
    locality:{
        type:String,
        require:true
    },
    localityVerbose:{
        type:String,
        require:true
    },
    longitude:{
        type:Number,
        require:true
    },
    latitude:{
        type:Number,
        require:true
    }
});


const restaurantLocality = mongoose.model("RestaurantLocality",restaurantSchema);

module.exports = restaurantLocality;