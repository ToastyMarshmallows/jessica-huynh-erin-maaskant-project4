// We want to create a hero database where the user searches the heroes and the hero information is returned into the html
   // search by name
   // search by affliation
   // stretch - user can search via pinpoints on map and include the distance between user and hero's base of operation

// 1. Get hero data from the Overwatch API
   // hero name, real name, age, height, health, armour, shield, affliation, and base of operations, description
// 2. Display their info on the page

// Hero Images 
// Create an empty array to store hero images

// Set up user search form

// Display hero information upon user's search
// Also display hero images with hero information

// Stretch - on the click of hero's base of operations, display hero location with google maps API
   // second search method - display pinpoints of hero's base of operations on a world map, when the user click's the pin, display hero information 


//    herolocations = {
// 	   Cairo: 'ChIJ674hC6Y_WBQRujtC6Jay33k',
//    }
//    \


const app = {}

// app.heroLocations = {
// 	Ana: {
// 		name: Ana,
// 		placeID: 'ChIJ674hC6Y_WBQRujtC6Jay33k'
// 	},
// 	Bastion: {
// 		placeID: 'null'
// 	},
// 	D_Va: {
// 		placeID: 'ChIJNc0j6G3raDURpwhxJHTL2DU'
// 	},
// 	Genji: {
// 		placeID: 'ChIJz2gufcfolTkR3obM0LyaojQ'
// 	},
// 	Hanzo: {
// 		placeID: 'ChIJLxl_1w9OZzQRRFJmfNR1QvU'
// 	},
// 	Junkrat: {
// 		placeID: 'ChIJ38WHZwf9KysRUhNblaFnglM'
// 	},
// 	Lucio: {
// 		placeID: 'ChIJW6AIkVXemwARTtIvZ2xC3FA'
// 	},
// 	McCree: {
// 		placeID: 'ChIJqVKY50NQGIcRQN-I_XMjkIw'
// 	},
// 	Mei: {
// 		placeID: 'ChIJuResIul5YzYRLliUp_1m1IU'
// 	},
// 	Mercy: {
// 		placeID: 'ChIJGaK-SZcLkEcRA9wf5_GNbuY'
// 	},
// 	Pharah: {
// 		placeID: 'ChIJ5y6Y9_43WBQRhVOsj3ej8vI'
// 	},
// 	Reaper: {
// 		placeID: 'ChIJE9on3F3HwoAR9AhGJW_fL-I'
// 	},
// 	Reinhardt: {
// 		placeID: 'ChIJ04-twTTbmUcR5M-RdxzB1Xk'
// 	},
// 	Roadhog: {
// 		placeID: 'ChIJ38WHZwf9KysRUhNblaFnglM'
// 	},
// 	Soldier76: {
// 		placeID: 'null'
// 	},
// 	Symmetra: {
// 		placeID: 'ChIJkbeSa_BfYzARphNChaFPjNc'
// 	},
// 	Torbjorn: {
// 		placeID: 'ChIJPwdslmeOT0YRQHwOKXiQAQQ'
// 	},
// 	Tracer: {
// 		placeID: 'ChIJdd4hrwug2EcRmSrV3Vo6llI'
// 	},
// 	Widowmaker: {
// 		placeID: 'ChIJyVEFHPqPi0cRujQFYoEWeEI'
// 	},
// 	Winston: {
// 		placeID: 'ChIJNb4UJ3a_DA0RD4cANiYlTjg'
// 	},
// 	Zarya: {
// 		placeID: 'ChIJ4zf_ocmv11wR_0fWj0bhl9U'
// 	},
// 	Zenyatta: {
// 		placeID: 'ChIJz2gufcfolTkR3obM0LyaojQ'
// 	},
// 	Sombra: {
// 		placeID: 'ChIJU1NoiDs6BIQREZgJa760ZO0'
// 	},
// 	Orisa: {
// 		placeID: 'ChIJDY2kfa8LThARyAvFaEH-qJk'
// 	},
// }

app.heroLocation = [
	 {
		name:'Ana',
		placeID: 'ChIJ674hC6Y_WBQRujtC6Jay33k',
		lat: 30.0444196,
		lng: 31.2357116, 	
	},
	{
		name: 'McCree',
		placeID: 'ChIJqVKY50NQGIcRQN-I_XMjkIw'
	}
]

app.heroInfo = {}

app.searchValue = $('input[type=search]').val();

app.apiURL = 'https://overwatch-api.net/api/v1/hero'
app.apiURLGeo = 'https://maps.googleapis.com/maps/api/geocode/json'
app.apiKey = 'AIzaSyCeTIiHDXlITR2WjpJlf-1AigrB7Tl_r5U'

app.getHero = () => {
	$.ajax({
		url: app.apiURL,
      	method: 'GET',
      	dataType: 'json',
      	data: {
			 format:'json',
      }
   })
   .then((res)=> {
		// console.log(res);
		// console.log(res.data);
		app.displayHero(res.data);
   });
	$('.hero__card').empty();
}

app.getLocation = (placeID, lat, lng) => {
	$.ajax({
		url: app.apiURLGeo,
		method: 'GET',
		dataType:'json',
		data: {
			// format:'json',
			place_id: placeID,
			key: app.apiKey,
		}
	}).then((res)=>{
		console.log(lat,lng);
		app.initMap(lat,lng);
	})

}

app.initMap = (lat,lng) => {
	console.log('inside init map')
	const location = { lat: lat, lng: lng }
	// The map, centered at Uluru
	let map = new google.maps.Map(
		document.getElementById('map'), { zoom: 7, center: location });
	// The marker, positioned at Uluru
	let marker = new google.maps.Marker({ position: location, map: map });

}

app.displayLocation = () => {
	app.heroLocation.forEach((location)=>{
		if(location.name === app.searchValue) {
			// console.log(location.placeID)
			app.getLocation(location.placeID, location.lat, location.lng)
		}
	})
}

app.displayHero = (hero) => {
	// console.log(hero)
	$('.hero__card').empty();
	// console.log(hero)
	
	hero.filter((heroType)=> heroType.name === app.searchValue)
	// hero.forEach((heroType)=>{
	// 	console.log(heroType.name)
	.forEach((heroType)=>{
		const selectHero = $(`.hero__card`);
		const heroName = $(`<li>Name: ${heroType.name}</li>`);
		const realName = $(`<li>Real Name: ${heroType.real_name}</li>`);
		const age = $(`<li>Age: ${heroType.age}</li>`);
		const height = $(`<li>Height: ${heroType.height}</li>`);
		const base = $(`<li class="location">Base of Operations: ${heroType.base_of_operations}</li>`);
		const affl = $(`<li>Affiliation: ${heroType.affiliation}</li>`);
		const health = $(`<li>Health: ${heroType.health}</li>`);
		const armour = $(`<li>Armour: ${heroType.armour}</li>`);
		const shield = $(`<li>Shield: ${heroType.shield}</li>`);
		// console.log(heroType)
		selectHero.append(heroName,realName, age, height, base, affl, health, armour, shield)
		$('.hero__container').append(selectHero)
		// selectHero.append(heroName, realName);
	});
	// app.displayLocation(app.searchValue);
}


app.events = () => {
	$('.search-form').on('submit', function(e){
		e.preventDefault();
		searchValue = $('input[type=search]').val();
		app.getHero(app.searchValue)
		console.log(app.searchValue);
   })
	$('.hero__card').on('click', '.location', function () {
		app.displayLocation(app.searchValue);
	})
}


app.init = function() {
	console.log("It's working");
	app.getHero();
	app.events();
	app.getLocation();
	// app.displayLocation();
}

$(function () {
	app.init();

});

