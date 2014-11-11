module.exports = function(app) {
  var express = require('express');
  var areasRouter = express.Router();
  var AreaModel = require('../models/area.js')
  var Area = AreaModel.Area;

  areasRouter.get('/', function(req, res) {
  	Area.find({}, function(err, areas) {
          return res.status(200).send({"areas":areas});
    });
  });

  areasRouter.get('/:id', function(req, res) {
    Area.findOne({_id: req.params.id}, function(err, area) {
        var status = 200;
        if (!area) {
          var status = 404;
        }
        return res.status(status).send({"area":area});
    });
  });

  areasRouter.post('/', function(req, res) {
  	console.log('Req: ' + JSON.stringify(req.body))
  	var area = new Area({
  		name: req.body.area.name,
  		locations: req.body.area.locations
  	});
  	 console.log('Area: ' + JSON.stringify(area))


  	area.save(function (err, record) {
  		if (!err) {
  			return res.status(200).send({area: record})
  		}
  		else {
  			return res.status(500).send(err)
  		}
  	})

  });

  areasRouter.put('/:id', function(req, res) {
    console.log('Req: ' + JSON.stringify(req.body))
    Area.findById(req.params.id, function (err, area) {
      if (!err) {
        if (!area) {
          return res.status(404).send({});
        }
        area.name = req.body.area.name;
        area.locations = req.body.area.locations
        area.save(function (err, area) {
          if (!err) {
            return res.status(200).send({area: area})
          }
          else {
            return res.status(500).send(err)
          }
        })  
      }
      else {
        return res.status(500).send(err)
      }
    });
  });

  app.use('/api/areas', areasRouter);
};
