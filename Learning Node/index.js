const express = require('express');
const routes = require('./routes/api')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//set up express app 
const app = express();

//connect to mongodb
mongoose.connect('mongodb+srv://Ramya:test1234@cluster0.wma2gny.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());
//initialize routes
app.use('/api',routes);

//error handlig middile ware
app.use(function(err,req,res,next){
   //console.log(err);
   res.send({error:err.message});
});



//listen for reques
app.listen(3000 || 8080,function(){
console.log('listening for requests');
});