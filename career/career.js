const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


const serviceDropdownLink = document.getElementById("servicesLink");

if(serviceDropdownLink){

    const serviceDropdown = serviceDropdownLink.closest(".dropdown");

    serviceDropdownLink.addEventListener("click", function(e){

        if(window.innerWidth <= 900){
            e.preventDefault(); // stop routing
            serviceDropdown.classList.toggle("active");
        }

    });

}

/* MOBILE DROPDOWN */

const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

dropbtn.addEventListener("click", () => {

dropdown.classList.toggle("open");

});


const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("reveal-active");

}

});

}


// SCROLL REVEAL SYSTEM

function revealElements(){

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;
const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("jobSearch");
const jobCards = document.querySelectorAll(".job-card");

const noResults = document.getElementById("noResults");
const careerLayout = document.querySelector(".career-container");

searchBtn.addEventListener("click", searchJobs);

searchInput.addEventListener("keyup", function(e){
if(e.key === "Enter"){
searchJobs();
}
});

function searchJobs(){

const query = searchInput.value.toLowerCase().trim();

let firstMatch = null;
let found = false;

jobCards.forEach(card => {

const title = (card.dataset.title || "").toLowerCase();
const location = (card.dataset.location || "").toLowerCase();
const keywords = (card.dataset.keywords || "").toLowerCase();

const searchable = title + " " + location + " " + keywords;

if(searchable.includes(query)){

card.style.display = "";
found = true;

if(!firstMatch){
firstMatch = card;
}

}else{

card.style.display = "none";

}

});


/* HANDLE RESULT UI */

if(found){

careerLayout.style.display = "grid";
noResults.style.display = "none";



}else{

careerLayout.style.display = "none";
noResults.style.display = "block";

}


/* Scroll to first result */

if(firstMatch){

firstMatch.scrollIntoView({
behavior:"smooth",
block:"center"
});

firstMatch.click();

}

}


const jobCards2 = document.querySelectorAll(".job-card");

const jobTitle = document.getElementById("jobTitle");
const jobMeta = document.getElementById("jobMeta");
const jobDescription = document.getElementById("jobDescription");
const jobSpecs = document.getElementById("jobSpecs");

jobCards2.forEach(card => {

card.addEventListener("click", function(){

// remove active class
jobCards2.forEach(c => c.classList.remove("active"));

this.classList.add("active");

// get data
const title = this.dataset.title;
const level = this.dataset.level;
const location = this.dataset.location;
const description = this.dataset.description;
const specs = this.dataset.specs;

// update right panel
jobTitle.textContent = title;
jobMeta.textContent = level + " | " + location;
jobDescription.textContent = description;
jobSpecs.textContent = specs;

});

});

