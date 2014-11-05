
var App = (App || {});
debugger
App.models = (App.models || {
	areas: {
		resource: 'areas',
		_data: null,
		isLoaded: false,
		fixture:
		{
		  "areas": [
		    {
		      "id": "1",
		      "name": "4S Ranch \/ Rancho Bernardo"
		    },
		    {
		      "id": "2",
		      "name": "Carmel Mountain Ranch"
		    },
		    {
		      "id": "3",
		      "name": "Downtown San Diego"
		    },
		    {
		      "id": "4",
		      "name": "East County"
		    },
		    {
		      "id": "5",
		      "name": "Hillcrest"
		    },
		    {
		      "id": "6",
		      "name": "La Mesa"
		    },
		    {
		      "id": "7",
		      "name": "Mira Mesa"
		    },
		    {
		      "id": "8",
		      "name": "Mission Valley"
		    },
		    {
		      "id": "9",
		      "name": "North County"
		    },
		    {
		      "id": "10",
		      "name": "Oceanside"
		    },
		    {
		      "id": "11",
		      "name": "Pacific Beach"
		    },
		    {
		      "id": "12",
		      "name": "Point Loma Area"
		    },
		    {
		      "id": "13",
		      "name": "Sorento Valley"
		    },
		    {
		      "id": "14",
		      "name": "South Bay"
		    }
		  ]
		},
		findAll: function (resolve, reject) {
			if(!this.isLoaded) {
				if (App.offLine) {
					debugger;
					this._data = this.fixture;
					this.isLoaded-true;
					resolve(this.fixture);
				}
				else {
					var _this = this;
					var _resolve = resolve;
					App.api.findAll(this.resource, 
						function (data) {
							_this._data = data;
							_this.isLoaded-true;
							_resolve
						}, 
						reject);
				}
			}
			else {
				resolve(this.data);
			}
		}
	},
	locations: {
		resource: "locations",
		_data: null,
		isLoaded: false,
		fixture: 
		{
	  		"locations": [
			    {
			      "id": "27",
			      "areaId": "8",
			      "name": "Hollywood Tans",
			      "address": "5171 Mission Center Rd, San Diego, CA 92108",
			      "note": "Behind Best Buy",
			      "phone": "(858) 260-9017",
			      "hours": "Mon-Fri 8am-9pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "26",
			      "areaId": "7",
			      "name": "Hollywood Tans",
			      "address": "8118 Mira Mesa Boulevard, San Diego, CA 92126",
			      "note": "Next to Panda Express",
			      "phone": "(619) 566-0078",
			      "hours": "Mon-Fri 9am-8pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "25",
			      "areaId": "6",
			      "name": "Windermere Real Estate",
			      "address": "8277 La Mesa Boulevard, La Mesa, CA 91942",
			      "note": "La Mesa Village",
			      "phone": "(619) 303-9500",
			      "hours": "",
			      "incentive": ""
			    },
			    {
			      "id": "24",
			      "areaId": "6",
			      "name": "imortgage",
			      "address": "7777 Alvarado Road Suite 701, La Mesa, CA 91941",
			      "note": "",
			      "phone": "(619) 719-0555",
			      "hours": "Mon-Fri 8am-5pm",
			      "incentive": ""
			    },
			    {
			      "id": "23",
			      "areaId": "5",
			      "name": "Hollywood Tans",
			      "address": "500 University Ave, San Diego, CA 92103",
			      "note": "Corner of 5th & University",
			      "phone": "(619) 220-8444",
			      "hours": "Mon-Fri 9am-8pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "22",
			      "areaId": "4",
			      "name": "Brinegar Chiropractic & Massage",
			      "address": "8760 Cuyamaca St, Suite 203, Santee, CA 92071",
			      "note": "",
			      "phone": "(619) 258-1011",
			      "hours": "MWF 9am -5pm, T\/Th 2pm - 5pm, Sat 9am-12pm",
			      "incentive": "Bring a Blanket and Receive a 45 Minute Massage for $20.00 Or 1 hour for 25.00"
			    },
			    {
			      "id": "21",
			      "areaId": "4",
			      "name": "P.S.A.R",
			      "address": "1150 Broadway, El Cajon, CA 92021",
			      "note": "",
			      "phone": "(619) 579-0333",
			      "hours": "M-F 8-5",
			      "incentive": ""
			    },
			    {
			      "id": "20",
			      "areaId": "4",
			      "name": "Hollywood Tans",
			      "address": "163 Fletcher Parkway, El Cajon, CA 92020",
			      "note": "Parkway Mall outside next to Borders bookstore",
			      "phone": "(619) 440-8900",
			      "hours": "Mon-Fri 9am-8pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "18",
			      "areaId": "3",
			      "name": "McFaddens Restaurant",
			      "address": "731 5th Ave, San Diego, CA 92101",
			      "note": "",
			      "phone": "(619) 795-2500",
			      "hours": "Sunday 10:00am - 2:00am",
			      "incentive": "Free Appetizer with Donation of 2 Blankets!"
			    },
			    {
			      "id": "19",
			      "areaId": "3",
			      "name": "Big Bricks Training",
			      "address": "740 13th St #503, San Diego, CA 92101",
			      "note": "",
			      "phone": "(619) 566-6820",
			      "hours": "DROP OFF TIMES: M-F 5-7pm Sat 8-11am",
			      "incentive": ""
			    },
			    {
			      "id": "17",
			      "areaId": "2",
			      "name": "Hollywood Tans",
			      "address": "11467 Carmel Mountain Rd, San Diego, CA 92128",
			      "note": "",
			      "phone": "(858) 487-8787",
			      "hours": "Mon- Fri 9am-9pm, Sat 10am-7pm, Sun 10am-6pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "16",
			      "areaId": "1",
			      "name": "Hollywood Tans",
			      "address": "10449 Reserve Dr, San Diego, CA 92127",
			      "note": "4S Common Shopping Center",
			      "phone": "858-451-8267",
			      "hours": "Mon-Fri 9am-8pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "28",
			      "areaId": "8",
			      "name": "Art Institute of California, San Diego",
			      "address": "7650 Mission Valley Road, San Diego, CA 92108-4423",
			      "note": "",
			      "phone": "(858) 598-1399",
			      "hours": "Mon-Fri 8am-6pm",
			      "incentive": ""
			    },
			    {
			      "id": "29",
			      "areaId": "9",
			      "name": "Cavallo MotorSports",
			      "address": "6010 Avenida Encinas, Carlsbad, CA 92011",
			      "note": "",
			      "phone": "",
			      "hours": "M-F 7:30am - 7pm",
			      "incentive": ""
			    },
			    {
			      "id": "30",
			      "areaId": "10",
			      "name": "Hollywood Tans",
			      "address": "2484 Vista Way, Oceanside, CA 92054",
			      "note": "Next to Trader Joe's",
			      "phone": "(760) 966-1494",
			      "hours": "Mon-Fri 9am-8pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "31",
			      "areaId": "11",
			      "name": "Living Waters Wellness and Spa",
			      "address": "3517 Del Rey St #101, San Diego, CA 92109",
			      "note": "",
			      "phone": "(619) 224-1962",
			      "hours": "CALL FOR DROP OFF TIMES",
			      "incentive": "Donate a blanket get a $20 gift certificate!"
			    },
			    {
			      "id": "32",
			      "areaId": "11",
			      "name": "Hollywood Tans",
			      "address": "1321 Garnet Ave, San Diego, CA 92109",
			      "note": "",
			      "phone": "(858) 490-0555",
			      "hours": "Mon-Fri 9am-9pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "33",
			      "areaId": "12",
			      "name": "Hollywood Tans",
			      "address": "3589 Midway Drive, San Diego, CA 92110",
			      "note": "Next to Broken Yolk",
			      "phone": "(619) 222-2200",
			      "hours": "Mon-Fri 9pm-9pm, Sat 9am-6pm, Sun 10am-5pm",
			      "incentive": "One Free Level 4 UV Tan OR $10 Mystic With Donation!"
			    },
			    {
			      "id": "34",
			      "areaId": "12",
			      "name": "Paradise Lounge & Grill",
			      "address": "2732 Midway Dr, San Diego, CA 92110",
			      "note": "",
			      "phone": "(619) 225-8110",
			      "hours": "8:00am - 2:00am",
			      "incentive": ""
			    },
			    {
			      "id": "35",
			      "areaId": "12",
			      "name": "Pacers",
			      "address": "3334 Midway Drive, San Diego, CA 92110",
			      "note": "",
			      "phone": "(619) 222-2000",
			      "hours": "Mon-Sun 11:30am-2am",
			      "incentive": ""
			    },
			    {
			      "id": "36",
			      "areaId": "13",
			      "name": "Active Network",
			      "address": "10182 Telesis Court, Suite 100, San Diego, CA 92121",
			      "note": "",
			      "phone": "(858) 964-3800",
			      "hours": "M-F 9am - 5pm",
			      "incentive": ""
			    },
			    {
			      "id": "37",
			      "areaId": "14",
			      "name": "Cafe LaMaze",
			      "address": "1133 13th St., Imperial Beach, CA 91932",
			      "note": "",
			      "phone": "(619) 863-5353",
			      "hours": "Sunday 10am-2am",
			      "incentive": "Free Appetizer with Donation of 2 Blankets!"
			    },
			    {
			      "id": "38",
			      "areaId": "14",
			      "name": "Office Lounge",
			      "address": "1133 13th St, Imperial Beach, CA 91932",
			      "note": "",
			      "phone": "(619) 863-5353",
			      "hours": "Sunday 10:00am - 2:00am",
			      "incentive": ""
			    }
	  		]
		},
		findAll: function (resolve, reject) {
			debugger
			if(!this.isLoaded) {
				if (App.offLine) {
					debugger;
					this._data = this.fixture;
					this.isLoaded-true;
					resolve(this.fixture);
				}
				else {
					var _this = this;
					var _resolve = resolve;
					App.api.findAll(this.resource, 
						function (data) {
							_this._data = data;
							_this.isLoaded-true;
							_resolve
						}, 
						reject);
				}
			}
			else {
				resolve(this.data);
			}
		}
	},

	join: function (areas,locations) {
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
		var list = [];
		var l=0;
		for (var a=0; a<areas.length; a++) {
			list.push({name: areas[a].name, locations: []})
			while ((l<locations.length) && (locations[l].areaId == areas[a].id)){
				locations[l].index = l;
				list[a].locations.push(locations[l]);
				l++
			}
		}
		return({areas:list});
	},
	render: function (drops) {

		document.write('<ul class="locationList">');
		for (var i=0; i<drops.areas.length; i++) {
			document.write('<li class="area"><span class = "title">' + drops.areas[i].name + '</span>');
			
			for (var j=0; j<drops.areas[i].locations.length; j++) {
				document.write('<div class="location">');
				document.write('<div class = "name"><a href = javascript:App.models.loadDetailsPage('+drops.areas[i].locations[j].index+');>' + drops.areas[i].locations[j].name + '</a></div>');
				if(drops.areas[i].locations[j].incentive != "") {
					document.write('<div class = "incentive">' + drops.areas[i].locations[j].incentive + '</span></div>');
				}
				document.write('</div>');
			}
			document.write('</li>');
		}
		document.write('</ul>');
	},

	loadDetailsPage: function (location) {
		window.location = "location.html?location=" + location;
	},
	
	writeDetail: function (className, detail) {
		if (detail != "") {
			document.write("<p class = '" + className + "'>" + detail + "</p>");
		}
	},

	locationDetails: function (location) {

		var drop = this.locations._data[location];
		this.writeDetail("dropName", drop.name);
		this.writeDetail("dropAddress", drop.address);
		this.writeDetail("dropNote", drop.note);
		this.writeDetail("dropPhone", drop.phone);
		this.writeDetail("dropHours", drop.hours);
		this.writeDetail("dropIncentive",drop.incentive);
		this.writeDetail("dropUrl", "<a href = http://" + drop.website + ">"+ drop.website + "</a>");
	},

});