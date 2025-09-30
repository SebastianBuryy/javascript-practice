/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${frogpack.volume
  }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${frogpack.color
  }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${frogpack.pocketNum
  }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${frogpack.strapLength.left
  } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${frogpack.strapLength.right
  } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${frogpack.lidOpen ? "open" : "closed"
  }</span></li>
    </ul>  
`;

/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

// Helper Function
function createFigure(frogpackData) {
  // Create figure element
  const figure = document.createElement("figure");
  // Add image markup
  figure.innerHTML = `<img src="${frogpackData.image}" alt="Image of ${frogpackData.name}">`;
  // Add figcaption element
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = `Image of ${frogpackData.name}`;
  figure.append(figcaption);

  return figure;
}

// Main Function
function createArticle(frogpackData) {
  // Create article element
  const article = document.createElement("article");
  // Populate article element with content
  article.innerHTML = content;
  // Add figure element by calling helper function
  article.append(createFigure(frogpackData));

  document.querySelector("main").append(article);

  return article;
}

createArticle(frogpack);

// JavaScript code​​​​​​‌‌‌​​‌​​‌​‌‌‌‌‌‌‌‌​​‌‌‌​​ below
// Change these values to control whether you see
// the expected answer and/or hints.
// const showExpectedResult = true
// const showHints = false

// // Set up the Backpack class
// class Backpack {
//   constructor(
//     id,
//     name,
//     volume,
//     color,
//     pocketNum,
//     dateAcquired
//   ) {
//     this.id = id;
//     this.name = name;
//     this.volume = volume;
//     this.color = color;
//     this.pocketNum = pocketNum;
//     this.dateAcquired = dateAcquired;
//   }
//   backpackAge() {
//     let now = new Date();
//     let acquired = new Date(this.dateAcquired);
//     let elapsed = now - acquired; // elapsed time in milliseconds
//     let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
//     return daysSinceAcquired;
//   }

// }

// // Create new Backpack object
// const everydayPack = new Backpack(
//   "pack01",
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   "December 5, 2018 15:00:00 PST"
// );

// // Create new Backpack object
// const frogPack = new Backpack(
//   "pack02",
//   "Frog Backpack",
//   8,
//   "green",
//   3,
//   "October 16, 2019 15:00:00 PST"
// );

// // Add Backpack objects into an array
// const backpackObjectArray = [everydayPack, frogPack];

// function createBackpackMarkup(document) {

//   const content = backpackObjectArray.map((item) => {

//     const backpackArticle = document.createElement("article")
//     backpackArticle.setAttribute("id", item.id);

//     backpackArticle.innerHTML = `
//         <h1>${item.name}</h1>
//         <ul>
//             <li>Volume:<span> ${item.volume}l</span></li>
//             <li>Color:<span> ${item.color}</span></li>
//             <li>Age:<span> ${item.backpackAge()} days old</span></li>
//             <li>Number of pockets:<span> ${item.pocketNum}</span></li>
//         </ul>
//         `;
//     return backpackArticle;
//   })
//   return content
// }




