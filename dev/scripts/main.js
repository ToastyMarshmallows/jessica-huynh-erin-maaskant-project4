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

const heroObject = []

// let searchValue = $('input[type=search]').val();

app.apiURL = 'https://overwatch-api.net/api/v1/hero?page=1'

app.getHero = (query) => {
    $.ajax({
        url: app.apiURL,
        method: 'GET',
        dataType: 'json',
        data: {
            format: 'json',
        //   name: query,
        }
    })
        .then((res) => {
            app.displayHero(res.data,query);
        });
}
// -------------------------
app.displayHero = (hero,query) => {
    // empty the container so we don't append doubled results
    $('.hero__container').empty();
    // filters the API array so that we get hero objects that match the filter criteria into the heroStats array
    hero.filter((heroStats) => heroStats.name === query)
        .forEach((heroStats) => {
            console.log(heroStats);
            // forEach element in the array, we create a new div., title and img to be inserted in the HTML
            const results = $('<div>').addClass('results__content');
            const title = $('<h2>').text(heroStats.name);
            const affiliation = $('<h3>').text(heroStats.affiliation);
            const desc = $('<p>').text(heroStats.description);
            const health = $('<p>').text(heroStats.health);
            // We append the data pieces to the new div
            piece.append(title, health, affiliation, desc);
            // Then append that to the RESULTS container on the page.
            $('.results__container').append(piece);
        })
}
// -------------------------
app.events = () => {
    $('.search-form').on('submit', function (event) {
        event.preventDefault();

        // NEED TO MAKE THIS SEARCH CASE INSENSITIVE //
        const searchValue = $('input[type=search]').val();

        app.getHero(searchValue);
    })
}
// -------------------------
// -------------------------
app.init = function () {
    console.log("It's working");
    app.getHero();
    app.events();
}
$(function () {
    app.init();
});