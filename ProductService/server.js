var express = require('express');

var app = express();

var productController = function(req,res){
    var products = [
        {id : 1, title : "Rose"},
        {id : 2, title : "Jasmin"},
        {id : 3, title : "Lily"},
        {id : 1, title : "Gerbera"},
        {id : 1, title : "Lotus"},
        {id : 1, title : "Worship"},
    ];
    res.send(products);
}
app.get('/products',productController);
var server = app.listen(8086,function(){
    console.log("Product Service Started On Server 8086");
});