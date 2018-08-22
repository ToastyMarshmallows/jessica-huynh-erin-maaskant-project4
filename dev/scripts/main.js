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

let searchValue = $('input[type=search]').val();

app.apiURL = 'https://overwatch-api.net/api/v1/hero?page=1'

app.getHero = (query) => {
   $.ajax({
      url: app.apiURL,
      method: 'GET',
      dataType: 'json',
      data: {
         format:'json',
         name: query,
      }
   })

   .then((res)=> {
      // console.log(res);
      // console.log(res.data);
      app.displayHero(res.data);
   });
}

app.hero = () => {
}


app.displayHero = (hero) => {
   // console.log(hero);
   // empty the container so we don't append doubled results
    $('.hero__container').empty();
   // filters the API array so that we get each hero object
    hero.filter((heroStats) => heroStats.health > 0)
    

   // for each hero, we create the h1 to hold the hero name
   .forEach((heroStats) => {
//         // we append the name to the hero container
//         heroInfo.push(heroStats.name);
//         console.log(heroInfo);
      heroObject.push(heroStats);
      // console.log(heroStats)
      // console.log(heroInfo);
      
    })
    // for(heroStats in hero) {
      //     heroInfo.push(heroStats.name);
      //     console.log(heroInfo);
      // }
      console.log(heroObject[0].name)
}


app.events = () => {$('.search-form').on('submit', function(e){
        e.preventDefault();
      // const userSearch = $(this).val();
      // console.log(userSearch);
    //   const searchValue = $('input[type=search]').val();
        app.getHero(searchValue);
      // console.log(searchValue);
   })
}


app.init = function() {
   console.log("It's working");
   app.getHero();
   app.events();
}

$(function () {
   app.init();

});

