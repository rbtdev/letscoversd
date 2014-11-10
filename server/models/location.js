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
  console.log("doc: " + JSON.stringify(this));
  var _this = this;
  Area.findById(this.area, function (err, area) {
  	if (!err) {
  		if (!area.locations) {
  			area.locations = [_this.id];
  		}
  		else {
  			area.locations.push(_this.id);
  		}
  		area.save();
  	}
  	else {
  		console.log("error finding referenced area.");
  	}
  });
  next();
});
exports.Location = mongoose.model('Location', LocationSchema);