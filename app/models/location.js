import DS from "ember-data";
var Location = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	phone: DS.attr('string'),
	hours: DS.attr('string'),
	website: DS.attr('string'),
	incentive: DS.attr('string'),
	area: DS.belongsTo('area', {async: false})
});
export default Location;