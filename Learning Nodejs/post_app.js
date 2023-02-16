
var express = require('express');
var app = express();
bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false});
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/',function(req,res){
   res.render('index');
});
app.get('/contact1',function(req,res){
   console.log(req.query);
    res.render('contact1',{qs:req.query});
 });
 app.post('/contact1',urlencodedParser, function(req,res){
   console.log(req.body);
    res.render('contact-success',{data: req.body});
 });
 app.get('/profile/:name',function(req,res){
   var data = {age:30,job:'testing engineer',hobbies:['eating','learning','listening music']};
   
   res.render('profile',{person: req.params.name,data: data});
 });
app.listen(3000);

