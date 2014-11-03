var api = {

	areas: {
		url: '/api/areas',
		findAll: function (resolve, reject) {
			var _resolve = resolve;
			var _reject = reject;
			$.ajax(this.url).then (
				  function(data) {
					_resolve(JSON.parse(data));
				  },
				  function() {
					reject();
				  }
			   );
		},
	},
	locations: {
		url: '/api/locations',
		findAll: function (resolve, reject) {
			var _resolve = resolve;
			var _reject = reject;
			$.ajax(this.url).then (
				  function(data) {
					_resolve(JSON.parse(data));
				  },
				  function() {
					reject();
				  }
			   );
		},
	},
	

	// qs: function(a) {
		// if (a == "") return {};
		// var b = {};
		// for (var i = 0; i < a.length; ++i)
		// {
			// var p=a[i].split('=');
			// if (p.length != 2) continue;
			// b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		// }
		// return b;
	// })(window.location.search.substr(1).split('&');

	associate: function (areas,locations) {
		var list = [];
		locations.sort(
			function (a,b) {
				a.areaId=parseInt(a.areaId);b.id=parseInt(b.areaId);
				if (a.areaId < b.areaId)
					return -1;
				if (a.areaId > b.areaId)
					return 1;
				return 0;
			}
		)
		
		areas.sort(
			function (a,b) {
				a.id=parseInt(a.id);b.id=parseInt(b.id);
				if (a.id < b.id)
					return -1;
				if (a.id > b.id)
					return 1;
				return 0;
			}
		)
		var area = 0;
		var currentArea = locations[0].areaId;
		for (var l = 0; l<locations.length; l++) {
			locations[l].areaId = parseInt(locations[l].areaId);
			if (areas[area].id != currentArea) {
				list.push({name: areas[area].name, locations: []});
				area++;
			}
			list[area-1].locations.push(locations[l]);
			currentArea = locations[l].areaId;
		}
		debugger
		return({drops: list})
	},
	locationList: function () {

		document.write('<ul class="locationList">');
		for (var i=0; i<drops.areas.length; i++) {
			document.write('<li class="area"><span class = "title">' + drops.areas[i].name + '</span>');
			
			for (var j=0; j<drops.areas[i].locations.length; j++) {
				document.write('<div class="location">');
				document.write('<div class = "name"><a href = javascript:loadDetailsPage(' + i + ',' + j + ');>' + drops.areas[i].locations[j].name + '</a></div>');
				if(drops.areas[i].locations[j].incentive != "") {
					document.write('<div class = "incentive">' + drops.areas[i].locations[j].incentive + '</span></div>');
				}
				document.write('</div>');
			}
			document.write('</li>');

		}
		document.write('</ul>');
	},

	loadDetailsPage: function (area, location) {
		window.location = "location.html?area=" + area + "&location=" + location;
	},
	
	writeDetail: function (className, detail) {
		if (detail != "") {
			document.write("<p class = '" + className + "'>" + detail + "</p>");
		}
	},

	locationDetailsfunction: function (area, location) {

		var drop = drops.areas[area].locations[location];
		writeDetail("dropName", drop.name);
		writeDetail("dropAddress", drop.address);
		writeDetail("dropNote", drop.note);
		writeDetail("dropPhone", drop.phone);
		writeDetail("dropHours", drop.hours);
		writeDetail("dropIncentive",drop.incentive);
		writeDetail("dropUrl", "<a href = http://" + drop.website + ">"+ drop.website + "</a>");
	},

}