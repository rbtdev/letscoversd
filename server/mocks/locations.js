module.exports = function(app) {
  var express = require('express');
  var locationsRouter = express.Router();
  var LocationModel = require('../models/location.js')
  var Location = LocationModel.Location;

  locationsRouter.get('/', function(req, res) {
    Location.find({}, function(err, locations) {
           res.status(200).send({"locations":locations});
    });
  });

  locationsRouter.get('/:id', function(req, res) {
    Location.find({_id: req.params.id}, function(err, location) {
           res.status(200).send({"location":location});
    });
  });

  locationsRouter.delete('/:id', function (req,res) {
    Location.findById(req.params.id, function (err, location) {
      if (!err) {
        location.remove(function (err) {
          if (!err) {
            res.status(200).send({});
          }
          else {
            res.status(500).send(err);
          }
        });
      }
      else {
        res.status(500).send(err);
      }
    });
  });

  locationsRouter.put('/:id', function (req, res) {
    Location.findById(req.params.id, function (err, location) {
      if (!err) {
        location.name = req.body.location.name,
        location.address = req.body.location.address,
        location.phone = req.body.location.phone,
        location.incentive = req.body.location.incentive,
        location.lat = req.body.location.lat,
        location.lon = req.body.location.lon,
        location.area  = req.body.location.area

        location.save(function (err, record) {
            if (!err) {
              return res.status(200).send({location: record});
            }
            else {
              return res.status(500).send(err);
            }
        });
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
  			return res.status(200).send({location: record})
  		}
  		else {
  			return res.status(500).send(err)
  		}
  	});

  });
  app.use('/api/locations', locationsRouter);
};