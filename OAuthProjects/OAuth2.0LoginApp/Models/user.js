var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    username : {
        type:String,
        required:[true," user name is required for registration"]
    },
    password:{
        type:String,
        required:[true," password is required for registration"]
    }
});


module.exports =  user = mongoose.model("user",userSchema);

