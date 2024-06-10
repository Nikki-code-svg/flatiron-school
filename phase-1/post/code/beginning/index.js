/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/candies")
.then(response => response.json())
.then(candies => {
    console.log(candies);
})
.catch(error => console.error(error));

fetch("http://localhost:3000/cookies/2")
.then(response => response.json())
.then(cookies => {
    console.log(cookies);
})
.catch(error => console.error(error));

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

document.querySelector("form").addEventListener("submit", event => {
       event.preventDefault();
      const newCandy = {
        name: event.target["candyName"].value,
        chocolate: event.target["chocolate"].checked
      } 
    fetch("http://localhost:3000/candies", {
       method: "POST",
       headers: {
        // We're sending JSON to the db..
        "Content-Type": "application/json" ,
        // ...and we're expecting a copy pf the JSON back as confirmation.
        "Accept": "application/json"
       },
       body: JSON.stringify(newCandy)
    })
    .then(response => response.json())
    .then(newCandyInOb => {
      console.log(newCandyInOb);
    })
      //console.log(newCandy);
});

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!