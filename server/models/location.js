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
  console.log('In pre-remove.')
	Area.findById(this.area, function (err, area) {
		if (!err) {
      console.log('Found area (id = ' + area._id + ')')
			var locations = area.locations;
      console.log("Area.locations: " + JSON.stringify(locations));
			if (locations) {
				for (var i = 0; i< locations.length; i++) {
          console.log('Locations[' + i + ']: ' + locations[i]);
					if (locations[i] == _this.id) {
             console.log('Splicing locations...');
						 locations.splice(i, 1);
             console.log('New locacions: ' + JSON.stringify(locations));
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