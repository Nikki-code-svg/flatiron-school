/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
//document is an API that lets us interact (CRUD) with HTML!


// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
//methods have ()
console.log(document.querySelector("#tomorrow"));
console.log(document.querySelector("#forever").id);

// . after for forever mean you can read anything in that element. ex id, textcontent

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
// .textcontent to change text then = to the text you want to change it to.
document.querySelector("#forever").textContent = "Forever!!";


// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
//1. Create an element.
const pElement = document.createElement("p");
//2. Modify the new element.
pElement.textContent = "On June 4, 2024";
//3. Append the new element to an existing element.
document.querySelector("div").append(pElement);


// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining

function displayList(names, books){
    const h1Element = document.createElement("h1")
        h1Element.textcontent = names;
        document.querySelector("#dates").append(h1Element);
    const ulElement = document.createElement("ul");
        document.querySelector("#dates").append(ulElement);
   const liElement = document.createElement("li");
      liElement.textContent = books;
      document.querySelector("ul").append(liElement);
    
}

displayList("books", ["Spider-Man"])

// 2. Replace the <strong> element with a newly created one.
const strong = document.querySelector("strong");
const spanElement = document.createElement("span");
strong.replaceWith(spanElement)