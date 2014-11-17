var mongoose = require('mongoose');
var AreaModel = require('./area.js');
var Area = AreaModel.Area;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var LocationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    hours: String,
    notes: String,
    website: String,
    incentive: String,
    lat: String,
    lon: String,
    area:ObjectId
});

LocationSchema.pre('remove', function (next) {
	var _this = this;
	Area.findById(this.area, function (err, area) {
		if (!err) {
			var locations = area.locations;
			if (locations) {
				for (var i = 0; i< locations.length; i++) {
					if (locations[i] == _this.id) {
						 locations.splice(i, 1);
					}
				}
			}
			area.save();
		}
		next();
	});
});


LocationSchema.pre('save', function (next) {

  //
  // This pre save trigger ensures that referential integrity 
  //  is maintained between the location.area id and the list of locations
  //  in associated areas.
  //
  //  if the associated area for this location has changed, then remove the 
  //  location from the list in the old area and add it to the new one.
  //
  var _this = this;
  Area.findOne({locations: this.area }, function (err, oldArea) {
    if (!err) {
      var areaId = oldArea?oldArea.id:null;
      if (areaId != _this.area) {
        if (areaId) {
          var i = area.locations.indexOf(_this.id);
          oldArea.locations.splice(i, 1);
          oldArea.save(function (err) {
            if (!err) {
              next();
            }
            else {
              console.log("Error");
              next(err);
            }
          });
        }
        var locationId = _this.id;
        Area.findById(_this.area, function (err, newArea) {
          if (!err) {
            newArea.locations.push(locationId);
            newArea.save(function (err) {
              if (!err) {
                next();
              }
              else {
                console.log("Error");
                next(err);
              }
            });
          }
          else {
            console.log("Error");
            next(err);
          }
        });
      }
    }
    else {
      console.log("Error");
      next(err);
    }
  });
});


exports.Location = mongoose.model('Location', LocationSchema);