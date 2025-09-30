/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

// Draw outline around grid on hover
const gridContainer = document.querySelector(".grid");
gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "4px solid red";
});
gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = "none";
});

// Highlight cell on hover and change background color on click
const gridCells = document.querySelectorAll(".cell");
gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "lightblue";
    });
    cell.addEventListener("mouseleave", () => {
        cell.style.backgroundColor = "hsl(0, 0%, 90%)";
    });
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = cell.style.backgroundColor === "orange" ? "hsl(0, 0%, 90%)" : "orange";
    })
});

// Toggle page dark mode with 'd' key
document.body.addEventListener("keydown", (event) => {
    if (event.key === 'd' || event.key === 'D') {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "black" ? "white" : "black";
    }
})


// JavaScript code
// Change these values to control whether you see
// the expected answer and/or hints.
// const showExpectedResult = false
// const showHints = false

// function updatePage(document) {
//     // Your code goes here.
//     let forms = document.querySelectorAll("form");

//     forms.forEach((form) => {
//         form.addEventListener("submit", (event) => {
//             event.preventDefault()
//             const target = event.target.getAttribute("data-target")
//             const inputElement = document.getElementById(`${target}-input`)
//             const targetElement = document.getElementById(target).querySelector(".value")
//             targetElement.textContent = inputElement.value
//         })
//     })
// }