// Mobile script : slide-button and menu
const clickBar = document.querySelector(".clickBar");
const guide = document.querySelector(".landingPage");
const navslide = document.querySelector(".navslide");
const arrowIcon = document.querySelector(".arrowIcon");

//todo : add flashing anim on the slide-button for attention attraction

clickBar.addEventListener("click",(event)=>{
    clickBar.classList.toggle("leftHome");       
    clickBar.classList.toggle("rightHome");
    arrowIcon.classList.toggle("fa-angles-right");
    arrowIcon.classList.toggle("fa-angles-left");
    guide.classList.toggle("visible");
    guide.classList.toggle("hiddenLeft");
    navslide.classList.toggle("hiddenLeft");
    navslide.classList.toggle("visible");
    event.preventDefault();
})
//todo: factoriser les deux scripts slides avec un if/switch:
/* if(leftHome=True) {
    clickbar.classList.toggle("rightHome");
} else if(rightHome=True) {
    clickbar.classList.toggle("leftHome");
}  else if(leftSearch=True) {
    clickbar.classList.toggle("leftHome");
}   else if(rightSearch=True) {
    clickbar.classList.toggle("leftHome");
}*/ 