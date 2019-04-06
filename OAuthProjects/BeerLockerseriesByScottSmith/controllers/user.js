var User = require('../models/user');

//Create an Endpoint /api/users for POST
exports.postUsers=(req,res)=>{
    console.log("User POST method");
    var user= new User({
        username:req.body.username,
        password:req.body.password
    });
    user.save(err=>{
        if(err)
        res.send(err);
        res.json({ message: 'User added to the locker!', data: user });
    })        
}

//Create an Endpoint /api/users for GET
exports.getUsers=(req,res)=>{
    console.log("User GET method");
    User.find({}).then(user=>{
        res.send(user);
    })
}


//Create an Endpoint /api/users/:userid for PUT
exports.putUser=(req,res)=>{
    console.log("User PUT method");
    User.findByIdAndUpdate({"_id":req.params.userid},req.body).then(()=>{
        User.findById({_id:req.params.userid}).then(user=>{
            res.send(user);
        })
    })
}


//Create an Endpoint /api/users/:userid for DELETE
exports.deleteUser=(req,res)=>{
    console.log("User DELETE method");
    User.findByIdAndRemove({_id:req.params.userid}).then(user=>{
        res.send(user);
    })
}
