import DS from "ember-data";
var Area = DS.Model.extend({
	name: DS.attr('string'),
	locations: DS.hasMany('location', {async: true})
});
export default Area;