/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
//dogapi.dog/api/v2/facts?limit=1
//https://dogapi.dog/docs/api-v2
// make a GET request for one dog fact.
fetch("https://dogapi.dog/api/v2/facts")
// then if that request was successful, take the JSON response and convert it into JavaScript.
.then(response => response.json())
// Then, if converting the response from JSON into JS was successful, use the JS in some way.
.then(convertedResponse => {
    const fact = convertedResponse.data[0].attributes.body;
    const dogSpan = document.querySelector("#dog");
    dogSpan.textContent = fact;
})
// If anything goes wrong, print an error to the console.
.catch(error => {console.error(error); });


//then() method it like a eventlistner on a successful stat.
// its fine to use convertedResponse bc in different local scope.
// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json() )
.then(books => {
    books.forEach((book) => {
        const bookLi = document.createElement("li");
        document.querySelector("#got").append(bookLi);
        bookLi.textContent = book.name;
    });
})
.catch(error => {console.error(error); });
// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"


async function getPokemon(name) {

    try {
        // Make a GET request for a pokemon, and save it into `response`.
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        // Convert the `response` into a Javascript object, and save it in `pokemon`.
        const pokemon = await response.json();
        document.querySelector("#pokemon").textContent = pokemon.name;

    } catch (error) {
            console.error(error);
        }
    
};
getPokemon("gengar");

// ~ Challenge: Make a GET request to an API of your choice!
fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
.then(response => response.json())
.then(convertedResponse => {
    
    const anime = 
})
