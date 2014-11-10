var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var AreaSchema = new Schema({
    name: String,
    locations:[ObjectId]
});

exports.Area = mongoose.model('Area', AreaSchema);