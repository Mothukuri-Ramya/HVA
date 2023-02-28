const express = require('express');
const routes = require('./routes/api')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

//set up express app 
const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URL);
app.use(express.static('public'));
app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//error handlig middile ware
app.use(function(err,req,res,next){
   res.send({error:err.message});
});

//listen for requests
app.listen(process.env.port,function(){
console.log('listening for requests');
});