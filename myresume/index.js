var express = require('express');


var app = express();

var port = process.env.PORT || 3000

app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.contentType("text/html");
    res.sendfile(__dirname+'/index.html');
})

app.listen(3000,function(){
    console.log("app listening on port 3000");
});
console.log("hello ganesha");

