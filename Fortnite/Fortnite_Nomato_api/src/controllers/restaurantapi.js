
let getRestaurant = (req,res,next)=>{
    console.log("Inside get restaurants method");
    res.send("Inside get restaurants method");
}

let postRestaurant = (req,res,next)=>{
    console.log("Inside post restaurants method");
    res.send("Inside post restaurants method");
}

let putRestaurant = (req,res,next)=>{
    console.log("Inside put restaurants method");
    res.send("Inside put restaurants method");
}

let deleteRestaurant = (req,res,next)=>{
    console.log("Inside delete restaurants method");
    res.send("Inside delete restaurants method");
}

let restaurantsApi={
    getRestaurant,postRestaurant,putRestaurant,deleteRestaurant
}

module.exports = restaurantsApi;