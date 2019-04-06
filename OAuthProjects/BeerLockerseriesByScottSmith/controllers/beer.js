var Beer = require('../models/beer');

// create endpoint /api/beers for POST
exports.postBeers = (req,res)=>{
    console.log("POST beers method");
    // create a new Beer Instance
    var beer = new Beer();
    console.log(req.body.name)
    //set the beer properties that came from POST data
    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.quantity = req.body.quantity;
    beer.userId=req.user._id;
    console.log(beer.userId);
    console.log(beer);
    beer.save(err=>{
        if(err)
        res.send(err);
        res.json({ message: 'Beer added to the locker!', data: beer });
    })
};

// create endpoint /api/beers for GET
exports.getBeers = (req,res)=>{
    console.log("GET beers method");
    console.log(req.user._id)
    Beer.find({userId:req.user._id}).then(beers=>{
        res.send(beers);
    })

};

// create endpoint /api/beers/beer_id for GET
exports.getBeer = (req,res)=>{
    console.log("GET beer method");
    Beer.findById({userId:req.user._id,_id:req.params.beer_id}).then(beer=>{
        res.send(beer);
    })
};

// create endpoint /api/beers/beer_id for PUT
 exports.putBeer = (req,res)=>{
    console.log("PUT beer method");
    Beer.findByIdAndUpdate({userId:req.user._id,_id:req.params.beer_id},req.body).then(()=>{
        Beer.findById({_id:req.params.beer_id}).then(beer=>{
            res.send(beer);
        })
    })
};

// create endpoint /api/beers/beer_id for DELETE
exports.deleteBeer = (req,res)=>{
    console.log("DELETE beer method");
    Beer.findByIdAndRemove({userId:req.user._id,_id:req.params.beer_id}).then(beer=>{
        res.send(beer);
    })
};
