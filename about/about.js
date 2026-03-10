const toggle = document.getElementById("menu-toggle")
const navLinks = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {

navLinks.classList.toggle("active")

})

 
const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {

reveals.forEach(el => {

const top = el.getBoundingClientRect().top
const height = window.innerHeight

if(top < height - 120){
el.classList.add("active")
}

})

})


const revealElements = document.querySelectorAll(".reveal-up");

function revealCards(){

const windowHeight = window.innerHeight;

revealElements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){
el.classList.add("active");
}

});

}


window.addEventListener("scroll", revealCards);


