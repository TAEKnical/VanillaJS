const title2 = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}

function handleClick(event){
    title.style.color = "blue";
}

//window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);