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

  // Find the  existing area that has this location
  //    If it's the current locations area then do nothing
  //    Else
  //      if not none
  //        remove location from the area
  //      add the location to the new area
  //
  var _this = this;
  Area.findOne({locations: this.area }, function (err, oldArea) {
    if (!err) {
      var areaId = oldArea?oldArea.id:null;
      if (areaId != _this.area) {
        if (areaId) {
          var i = area.locations.indexOf(_this.id);
          oldArea.locations.splice(i, 1);
          oldArea.save();
        }
        var locationId = _this.id;
        Area.findById(_this.area, function (err, newArea) {
          if (!err) {
            newArea.locations.push(locationId);
            newArea.save();
          }
        });
      }
    }
  });
  next();
});


exports.Location = mongoose.model('Location', LocationSchema);