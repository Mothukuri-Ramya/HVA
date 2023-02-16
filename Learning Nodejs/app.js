var express = require('express');
var app = express();
app.get('/',function(req,res){
   res.send('welcome to home page');
});
app.get('/contact',function(req,res){
    res.send('welcome to contact page');
 });
app.listen(3000);
/*
HTTP Methods
GET
POST
DELETE
PUT
by using express in node we can respond in each of the request easily
*/
