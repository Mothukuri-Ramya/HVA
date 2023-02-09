var express = require('express');
var app = express();
app.get('/',function(req,res){
   res.send('welcome to home page');
});
app.get('/contact',function(req,res){
    res.send('welcome to contact page');
 });
 app.get('/profile/:id',function(req,res){
    res.send('requested to see the profile with id of ' + req.params.id );
 });
app.listen(3000);

