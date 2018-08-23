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
app.heroInfo = {}

let searchValue = $('input[type=search]').val();

app.apiURL = 'https://overwatch-api.net/api/v1/hero'

app.getHero = () => {
	$.ajax({
		url: app.apiURL,
		method: 'GET',
		dataType: 'json',
		data: {
			format: 'json',
		}
	})
		.then((res) => {
			// console.log(res);
			// console.log(res.data);
			app.displayHero(res.data);
			// console.log(res.data);

		});
	$('.hero__card').empty();
}


// ------------------------------
app.displayHero = (hero) => {
	$('.hero__card').empty();

	hero.filter((heroType) => heroType.name === searchValue || heroType.affiliation === searchValue || heroType.health >= searchValue || heroType.base_of_operations === searchValue)

		.forEach((heroType) => {
			const selectHero = $(`<ul>`).addClass('hero__card');
			const heroName = $(`<li>Name: ${heroType.name}</li>`);
			const realName = $(`<li>Real Name: ${heroType.real_name}</li>`);
			const age = $(`<li>Age: ${heroType.age}</li>`);
			const height = $(`<li>Height: ${heroType.height}</li>`);
			const base = $(`<li>Base of Operations: ${heroType.base_of_operations}</li>`);
			const affl = $(`<li>Affiliation: ${heroType.affiliation}</li>`);
			const health = $(`<li>Health: ${heroType.health}</li>`);
			const armour = $(`<li>Armour: ${heroType.armour}</li>`);
			const shield = $(`<li>Shield: ${heroType.shield}</li>`);

			selectHero.append(heroName, realName, age, height, base, affl, health, armour, shield)
			$('.hero__container').append(selectHero)
		});
}
// ------------------------------

app.events = () => {
	$('.search-form').on('submit', function (e) {
		e.preventDefault();
		searchValue = $('input[type=search]').val();
		app.getHero(searchValue)
		console.log(searchValue);
	})
}


app.init = function () {
	console.log("It's working");
	app.getHero();
	app.events();
}

$(function () {
	app.init();

});