const title = document.getElementById("title");
console.log(title); //This works!

title.innerHTML = "Hi! From JS";
console.log(title); //Hi! From JS

console.dir(title);
title.style.color = "red";

console.dir(document);
document.title = "I know DOM from now!";

const title2 = document.querySelector("#title");
