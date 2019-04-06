//get the packages we needed
var mongoose = require('mongoose');

//Get the schema reference
var Schema = mongoose.Schema;

// Define our beer schema
var BeerSchema = new Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    quantity:{
        type:Number
    },
    userId: {
        type:String
    }
});

// Export the mongoose Beer model
module.exports = mongoose.model('Beer',BeerSchema);