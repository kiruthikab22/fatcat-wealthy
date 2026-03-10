const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

window.addEventListener("load", () => {

const heroText = document.querySelector(".hero-content");

heroText.style.opacity = "0";

setTimeout(()=>{
heroText.style.opacity = "1";
heroText.style.transition = "1s";
},300);

});

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);


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

const learning = document.querySelector(".learning-content");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight * 0.85;

if(learning.getBoundingClientRect().top < trigger){
learning.classList.add("show");
}

});


const items = document.querySelectorAll(".start-item");

items.forEach(item=>{
item.addEventListener("click",()=>{

items.forEach(i=>i.classList.remove("active"));
item.classList.add("active");

});
});





const buttons = document.querySelectorAll(".learn-btn");
const cards = document.querySelectorAll(".learn-card");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

buttons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const target = btn.getAttribute("data-tab");

cards.forEach(card => {
card.classList.remove("active");
});

document.getElementById(target).classList.add("active");

});

});

const cta = document.querySelector(".cta-content");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight * 0.85;

if(cta.getBoundingClientRect().top < trigger){
cta.classList.add("show");
}

});

const swiper = new Swiper(".testimonial-slider", {

slidesPerView:3,
spaceBetween:30,
loop:true,
centeredSlides:true,

autoplay:{
delay:3000,
disableOnInteraction:false,
},

breakpoints:{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}

});


