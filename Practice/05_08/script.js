/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// Find an element and add two different classes
document.querySelector(".backpack").classList.add("new-class", "another-class");
console.log(document.querySelector(".backpack").classList);

// Remove only one of the new classes
document.querySelector(".backpack").classList.remove("new-class");
console.log(document.querySelector(".backpack").classList);

// Add a new attribute
document.querySelector(".backpack__image").setAttribute("alt", "A backpack image");
console.log(document.querySelector(".backpack__image").getAttribute("alt"));

// Request value of an existing attribute
const srcValue = document.querySelector(".backpack__image").getAttribute("src");
console.log(srcValue);

// Change the value of an existing attribute
document.querySelector(".backpack__image").setAttribute("src", "https://example.com");
console.log(document.querySelector(".backpack__image").getAttribute("src"));

// Add some inline CSS to an element by specifying the style property and setting its value
document.querySelector(".backpack__name").setAttribute("style", "color: blue; font-size: 24px; text-transform: uppercase;");
console.log(document.querySelector(".backpack__name").getAttribute("style"));

// Query the style property of an element to see what is returned
console.log(document.querySelector(".backpack__name").style);

// JavaScript code​​​​​​‌‌‌​​‌​​‌​​‌​​​​​‌​​​​‌‌‌ below - Challenge - DOM Manipulation
// Change these values to control whether you see
// the expected answer and/or hints.
// const showExpectedResult = false
// const showHints = false

// // Setup data
// const navContent = `
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Backpacks</a></li>
//       <li><a href="#">Other things</a></li>
//       <li><a href="#">Contact</a></li>
// `;


// function createNavMenu(document) {
//     const navLinks = document.createElement("ul");
//     navLinks.innerHTML = navContent

//     const nav = document.createElement("nav");
//     nav.append(navLinks);

//     nav.setAttribute("class", "main-navigation");
//     document.querySelector(".siteheader").append(nav)

// }