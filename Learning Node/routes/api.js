const express = require('express');
const router = express.Router();
const Techie = require('../routes/models/techie');
//get list of techies from db
router.get('/techies', function (req, res, next) {
    /* Techie.find({}).then(function(techies){
      res.send(techies);
  
     });
     Ninja.aggregate([{   $geoNear: { near: {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]}, spherical: true, maxDistance: 100000, distanceField: "dist.calculated" } }]).then(function(results){ res.send(results); });*/
    Techie.aggregate([{ 
        $geoNear: { 
            near: { 
                type: "point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
             }, 
            spherical: true, 
            maxDistance: 100000, 
            distanceField: "dist.calculated", 
            spherical: true
         } 
        }]).then(function (techies) {
        res.send(techies);

    });

});
//add a new techie details to db
router.post('/techies', function (req, res, next) {
    Techie.create(req.body).then(function (techie) {
        res.send(techie);
    }).catch(next);

});
//update a techie details in db
router.put('/techies/:id', function (req, res, next) {
    Techie.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Techie.findOne({ _id: req.params.id }).then(function (techie) {
            res.send(techie);
        });


    });


});

//delete techie details from the db
router.delete('/techies/:id', function (req, res, next) {
    Techie.findByIdAndRemove({ _id: req.params.id }).then(function (techie) {
        res.send(techie);
    });

});

module.exports = router;