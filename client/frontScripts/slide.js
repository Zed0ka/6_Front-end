const clickBar = document.querySelector(".clickBar");
const guide = document.querySelector(".landingPage");
const navslide = document.querySelector(".navslide");
const arrowIcon = document.querySelector(".arrowIcon");

// intégrer la désactivation de la classe flashing au click

clickBar.addEventListener("click",(event)=>{
    clickBar.classList.toggle("left");              //!switch de la classe "left" à "right" (et inversement sur un nouveau click) PAS BON
    clickBar.classList.toggle("right");             
    arrowIcon.classList.toggle("fa-angles-right");  
    arrowIcon.classList.toggle("fa-angles-left");   
    guide.classList.toggle("visible");              
    guide.classList.toggle("hidden");               
    navslide.classList.toggle("hidden");            
    navslide.classList.toggle("visible");           
})