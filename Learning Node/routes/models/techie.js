const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
//create geolocation schema
const GeoSchema = new Schema({
  type:{
    type:String,
    default:"point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});

//create techie schema&model
const TechieSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name field is required"]
   },
   id:{
    type:Number
   },
   role:{
    type:String
   },
   geometry:GeoSchema
 
});
const Techie = mongoose.model('techie',TechieSchema);
module.exports = Techie; 