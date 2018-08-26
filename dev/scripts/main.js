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

const app = {}

app.heroLocation = [
	{
		name:'Ana',
		placeID: 'ChIJ674hC6Y_WBQRujtC6Jay33k',
		lat: 30.0444196,
		lng: 31.2357116, 
		// profile: url('../assets/Ana-full-flat.png'),
	},
	{
		name:'Bastion'
	},
	{
		name:'D.Va',
		placeID: 'ChIJNc0j6G3raDURpwhxJHTL2DU',
		lat: 35.1795543,
		lng: 129.0756416,
	},
	{
		name: 'Genji',
		placeID: 'ChIJz2gufcfolTkR3obM0LyaojQ',
		lat: 28.394857,
		lng: 84.12400799999999,
	},
	{
		name:'Hanzo',
		placeID: 'ChIJLxl_1w9OZzQRRFJmfNR1QvU',
		lat: 36.204824,
		lng: 138.252924
	},
	{
		name: 'Junkrat',
		placeID: 'ChIJ38WHZwf9KysRUhNblaFnglM',
		lat: -25.274398,
		lng: 133.775136,
	},
	{	
		name: 'Lucio',
		placeID: 'ChIJW6AIkVXemwARTtIvZ2xC3FA',
		lat: -22.9068467,
		lng:-43.1728965,
	},
	{
		name: 'McCree',
		placeID: 'ChIJqVKY50NQGIcRQN-I_XMjkIw',
		lat: 35.6869752,
		lng: -105.937799,
	},
	{
		name: 'Mei',
		placeID: 'ChIJuResIul5YzYRLliUp_1m1IU',
		lat: 34.341574,
		lng:108.93977,
	},
	{
		name: 'Mercy',
		placeID: 'ChIJGaK-SZcLkEcRA9wf5_GNbuY',
		lat:47.3768866,
		lng: 8.541694,
	},
	{
		name:'Pharah',
		placeID: 'ChIJ5y6Y9_43WBQRhVOsj3ej8vI',
		lat:29.9476555,
		lng:31.2053963,
	},
	{
		name:'Reaper',
		placeID: 'ChIJE9on3F3HwoAR9AhGJW_fL-I',
		lat: 34.0522342,
		lng: -118.2436849,
	},
	{
		name: 'Reinhardt',
        placeID: 'ChIJ04-twTTbmUcR5M-RdxzB1Xk',
        lat: 48.7758459,
        lng: 9.1829321
	},
	{
		name: 'Roadhog',
        placeID: 'ChIJ38WHZwf9KysRUhNblaFnglM',
        lat: -25.274398,
        lng: 133.775136
	},
	{
		name:'Soldier 76'
	},
	{
		name: 'Symmetra',
        placeID: 'ChIJkbeSa_BfYzARphNChaFPjNc',
        lat: 20.593684,
        lng: 78.96288
	},
	{
		name: 'Torbjorn',
        placeID: 'ChIJPwdslmeOT0YRQHwOKXiQAQQ',
        lat: 57.70887,
        lng: 11.97456
	},
	{
		name: 'Tracer',
        placeID: 'ChIJdd4hrwug2EcRmSrV3Vo6llI',
        lat: 51.5073509,
        lng: -0.1277583
	},
	{
		name: 'Widowmaker',
        placeID: 'ChIJyVEFHPqPi0cRujQFYoEWeEI',
        lat: 45.899247,
        lng: 6.129384
	},
	{
		name: 'Winston',
        placeID: 'ChIJNb4UJ3a_DA0RD4cANiYlTjg',
        lat: 36.140751,
        lng: -5.353585
	},
	{
		name: 'Zarya',
        placeID: 'ChIJ4zf_ocmv11wR_0fWj0bhl9U',
        lat: 56.01528339999999,
        lng: 92.8932476
	},
	{
		name: 'Zenyatta',
        placeID: 'ChIJz2gufcfolTkR3obM0LyaojQ',
        lat: 28.394857,
        lng: 84.12400799999999
	},
	{
		name: 'Sombra',
        placeID: 'ChIJU1NoiDs6BIQREZgJa760ZO0',
        lat: 23.634501,
        lng: -102.552784
	},
	{
		name: 'Orisa',
        placeID: 'ChIJDY2kfa8LThARyAvFaEH-qJk',
        lat: 9.081999,
        lng: 8.675277
	}
]

app.heroImages = [
	{
		name:'Ana',
		profile: `assets/Ana-portrait.png`,
		full: `assets/Ana-full.png`
	},
	{
		name:'Bastion',
		profile:`assets/Bastion-portrait.png`,
		full: `assets/Bastion-full.png`
	},
	{
		name:'D.Va',
		profile:`assets/D_va-portrait.png`,
		full: `assets/D_Va-full.png`
	},
	{
		name:'Genji',
		profile:`assets/Genji-portrait.png`,
		full:`assets/Genji-full.png`,
	},
	{
		name:'Hanzo',
		profile:`assets/Hanzo-portrait.png`,
		full:`assets/Hanzo-full.png`,
	},
	{
		name:'Junkrat',
		profile:`assets/Junkrat-portrait.png`,
		full:`assets/Junkrat-full.png`
	},
	{
		name:'Lucio',
		profile:`assets/Lucio-portrait.png`,
		full:`assets/Lucio-full.png`,
	},
	{
		name: 'McCree',
		profile:`assets/Mccree-portrait.png`,
		full:`assets/Mccree-full.png`
	},
	{
		name:'Mei',
		profile:`assets/Mei-portrait.png`,
		full:`assets/Mei-full.png`,
	},
	{
		name:'Mercy',
		profile:`assets/Mercy-portrait.png`,
		full:`assets/Mercy-full.png`, 
	},
	{
		name:'Orisa',
		profile:`assets/Orisa-portrait.png`,
		full:`assets/Orisa-full.png`,
	},
	{
		name:'Pharah',
		profile:`assets/Pharah-portrait.png`,
		full:`assets/Pharah-full.png`,
	},
	{
		name:'Reaper',
		profile:`assets/Reaper-portrait.png`,
		full:`assets/Reaper-full.jpg`
	},
	{
		name: 'Reinhardt',
		profile: 'assets/Reinhardt-portrait.png',
		full: 'assets/Reinhardt-full.png',
	},
	{
		name: 'Roadhog',
		profile: 'assets/Roadhog-portrait.png',
		full: 'assets/Roadhog-full.png',
	},
	{
		name: 'Soldier 76',
		profile: 'assets/Soldier76-portrait.png',
		profile: 'assets/Soldier76-full.png',
	},
	{
		name: 'Symmetra',
		profile: 'assets/Symmetra-portrait.png',
		full: 'assets/Symmetra-full.png',
	},
	{
		name: 'Torbjorn',
		profile: 'assets/Torbjorn-portrait.png',
		full: 'assets/Torbjorn-full.png',
	},
	{
		name: 'Tracer',
		profile: 'assets/Tracer-portrait.png',
		full: 'assets/Tracer-full.png',
	},
	{
		name: 'Widowmaker',
		profile: 'assets/Widowmaker-portrait.png',
		full: 'assets/Widowmaker-full.png',
	},
	{
		name: 'Winston',
		profile: 'assets/Winston-portrait.png',
		full: 'assets/Winston-full.png',
	},
	{
		name: 'Zarya',
		profile: 'assets/Zarya-portrait.png',
		full: 'assets/Zarya-full.png',
	},
	{
		name: 'Zenyatta',
		profile: 'assets/Zenyatta-portrait.png',
		full: 'assets/Zenyatta-full.png',
	},
	{
		name: 'Sombra',
		profile: 'assets/Sombra-portrait.png',
		full: 'assets/Sombra-full.png',
	},
	{
		name: 'Orisa',
		portrait: 'assets/Orisa-portrait.png',
		full: 'assets/Orisa-full.png',
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
		console.log(res);
	})
}

app.initMap = (lat,lng) => {
	// console.log('inside init map')
	const location = { lat: lat, lng: lng }
	// The map, centered at location by lat and lng
	let map = new google.maps.Map(
		document.getElementById('map'), { zoom: 7, center: location });
	// The marker, positioned at location by lat and lng
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
	hero.filter((heroType)=> heroType.name === app.searchValue)
	.forEach((heroType)=>{
		const heroHeading = $(`.hero__card__heading`);
		const cardName = $(`<h4>${heroType.name}</h4>`);

		heroHeading.append(cardName)

		const selectHero = $('.hero__container');
		const heroName = $(`<li><span>Name:</span> ${heroType.name}</li>`);
		const realName = $(`<li><span>Real Name:</span> ${heroType.real_name}</li>`);
		const age = $(`<li><span>Age:</span>${heroType.age}</li>`);
		const height = $(`<li><span>Height:</span> ${heroType.height}</li>`);
		const base = $(`<li class="location"><span>Base of Operations:</span> ${heroType.base_of_operations}</li>`);
		const affl = $(`<li><span>Affiliation:</span> ${heroType.affiliation}</li>`);
		const health = $(`<li><span>Health:</span> ${heroType.health}</li>`);
		const armour = $(`<li><span>Armour:</span> ${heroType.armour}</li>`);
		const shield = $(`<li><span>Shield:</span> ${heroType.shield}</li>`);

		$('.hero__container').append(selectHero)
		$('.search__results__card').on('click', function(){
			$('.hero__info').empty();
			$('.hero__info').append(heroName, realName, age, height, base, affl, health, armour, shield)
			$('.hero__container').addClass('show');
		})
	});
}

app.displayImages = () => {
	app.heroImages.filter((imageFile) => imageFile.name === app.searchValue)
	// console.log(imageFile.name);
	.forEach((imageFile) => {
	const profileFigure = $('.hero__card')
	const profilePic = $('<img>').attr('src', imageFile.profile);
	profileFigure.append(profilePic)
	const fullFigure = $('.hero__image')
	const fullPic = $('<img>').attr('src', imageFile.full);
	$('.search__results__card').on('click', function(){
		$('.hero__image').empty();
		fullFigure.append(fullPic)
		})
	})
}


app.events = () => {
	$('.search__container').on('submit', function(e){
		e.preventDefault();
		$('.hero__card__heading').empty();
		$('.search__results__heading').addClass('show');
		app.searchValue = $('input[type=search]').val();
		app.getHero(app.searchValue)
		app.displayImages()
		// console.log(app.searchValue);
   	})
	$('.hero__container').on('click', '.location', function () {
		app.displayLocation(app.searchValue);
	})
	$('.OW__Logo').on('click',function(){
		$(this).addClass('shrink')
		$('.input__bar--text').addClass('show');
	});
	$('.login__container').on('submit', function (e) {
		e.preventDefault();
		$('.input__bar--text').hide('fast');
		$('header').addClass('fixed');
	})
}

app.init = function() {
	// console.log("It's working");
	$('.hero__card__heading').empty();
	app.getHero();
	app.events();
	app.getLocation();
	// app.displayImages();
}

$(function () {
	app.init();

});

