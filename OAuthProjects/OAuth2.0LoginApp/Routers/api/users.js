var express = require('express');
var USER = require('../../Models/user');

// Initialize the router
var router = express.Router();


//@method GET
//@Request /api/users
router.get('/users',(req,res,next)=>{
        USER.find({}).then(data=>{
                res.send(data);
        }).catch(next)
});

//@method POST
//@Request /api/users
router.post('/users',(req,res,next)=>{
        USER.create(req.body).then(user=>{
                res.send(user);
        }).catch(next)
});

//@method PUT
//@Request /api/users
router.put('/users/:id',(req,res,next)=>{
        USER.findByIdAndUpdate({_id:req.params.id},req.body).then(user=>{
               USER.findById({_id:req.params.id}).then(user=>{
                       res.send(user);
               })
        }).catch(next)
});

//@method DELETE
//@Request /api/users
router.delete('/users/:id',(req,res,next)=>{
        USER.findByIdAndRemove({_id:req.params.id}).then(user=>{
                res.send(user);
        })
});


module.exports = router;