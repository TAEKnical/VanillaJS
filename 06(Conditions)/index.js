/*const age = prompt("How old are you?");

console.log(age);

if(age > 18 && age < 21){
    console.log('you can drink but you should not');
} else {
    console.log('you can`t');
}
*/

/*
const title = document.querySelector("#title");
const BASE_COLOR = "peru";
const OTHER_COLOR = "red";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();


function handleOffline() {
    console.log("Bye bye");
}

function handleOnline() {
    console.log("Welcome back!");
}


window.addEventListener("offline", handleOffline);
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
/*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
*/
title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();