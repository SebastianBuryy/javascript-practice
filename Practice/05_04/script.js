/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.querySelector("body").style.backgroundColor = "lightblue";
document.querySelectorAll("p").forEach(p => p.style.color = "darkblue");

document.getElementById("pack02").style.border = "2px solid red";
Array.from(document.getElementsByClassName("backpack__features")).forEach(element => {
    element.style.backgroundColor = "lightgreen";
});
document.getElementsByClassName("backpack__features")[0].style.backgroundColor = "red";

document.getElementsByClassName("backpack__image");
document.getElementsByClassName("backpack__name")[0].innerHTML = "Jiggle Pack";

document.querySelector("h2").innerHTML = "Something Else";
document.querySelectorAll("h1").forEach(h1 => h1.style.color = "purple");