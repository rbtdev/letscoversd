module.exports = function(app) {
  var express = require('express');
  var locationsRouter = express.Router();
  var LocationModel = require('../models/location.js')
  var Location = LocationModel.Location;

  locationsRouter.get('/', function(req, res) {
    Location.find({}, function(err, locations) {
           res.send({"locations":locations});
    });
  });

  locationsRouter.get('/:id', function(req, res) {
    Location.find({_id: req.params.id}, function(err, location) {
           res.send({"location":location});
    });
  });

  locationsRouter.delete('/:id', function (req,res) {
    Location.findById(req.params.id, function (err, location) {
      if (!err) {
        location.remove(function (err) {
          if (!err) {
            res.send({});
          }
          else {
            res.send(err);
          }
        });
      }
      else {
        res.send(err);
      }
    });
  });

  locationsRouter.post('/', function(req, res) {
  	console.log('Req: ' + JSON.stringify(req.body))
  	var location = new Location({
  		name: req.body.location.name,
  		address: req.body.location.address,
  		phone: req.body.location.phone,
  		incentive: req.body.location.incentive,
  		area: req.body.location.area
  	});
  	 console.log('Location: ' + JSON.stringify(location))


  	location.save(function (err, record) {
  		if (!err) {
  			return res.send({location: record})
  		}
  		else {
  			return res.send(err)
  		}
  	})

  });
  app.use('/api/locations', locationsRouter);
};