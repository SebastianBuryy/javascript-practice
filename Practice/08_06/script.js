/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const myArticleData = {
    title: "My First Article",
}

// Function declaration
function createArticle(articleData) {
    // Create article element
    const article = document.createElement("article");

    // Create h2 element and set its text content
    const h2 = document.createElement("h2");
    h2.textContent = articleData.title;
    article.append(h2);

    return article;
}

createArticle(myArticleData);

// Function expression
const addArticleToHTML = function (articleData) {
    const article = createArticle(articleData);
    document.querySelector(".articles").append(article);
}

addArticleToHTML(myArticleData);

// Arrow Function
const changeArticleElement = () => {
    document.querySelector(".articles article h2").setAttribute("style", "color: red; font-size: 32px; text-transform: uppercase;");
    document.querySelector(".articles article").innerHTML += `<p>This is my first article</p>`;
}

changeArticleElement();

// Arrow Function with parameter
const changeArticleText = (newText) => {
    document.querySelector(".articles article p").textContent = newText;
}

changeArticleText("This is the updated text of my first article.");