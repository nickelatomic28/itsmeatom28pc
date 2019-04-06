let mongoose = require('mongoose');

const restaurantInfoSchema = mongoose.Schema({

    restaurant_id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    cuisines:{
        type:String,
        require:true
    },
    average_Cost_for_two:{
        type:Number,
        require:true,
    },
    currency:{
        type:String,
        require:true
    },
    has_Table_Booking:{
        type:Boolean,
        default:false
    },
    has_Online_Delivery:{
        type:Boolean,
        default:false
    },
    aggregate_rating:{
        type:Number,
        require:true
    },
    rating_Color:{
        type:String,
        require:true
    },
    rating_text:{
        type:String,
        require:true
    },
    votes:{
        type:Number        
    }
});


const restaurantInfo = mongoose.model("RestaurantInfo",restaurantInfoSchema);

module.exports = restaurantInfo;