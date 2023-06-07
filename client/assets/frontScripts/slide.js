// Mobile script : slide-button and menu
const clickBar = document.querySelector(".clickBar");
const guide = document.querySelector(".landingPage");
const navslide = document.querySelector(".navslide");
const arrowIcon = document.querySelector(".arrowIcon");

//todo : add flashing anim on the slide-button for attention attraction

clickBar.addEventListener("click",(event)=>{
    clickBar.classList.toggle("left");       //!switch de la classe "left" à "right" (et inversement sur un nouveau click) PAS BON
    clickBar.classList.toggle("right");
    arrowIcon.classList.toggle("fa-angles-right");
    arrowIcon.classList.toggle("fa-angles-left");
    guide.classList.toggle("visible");
    guide.classList.toggle("hiddenLeft");
    navslide.classList.toggle("hiddenLeft");
    navslide.classList.toggle("visible");
    event.preventDefault();
})