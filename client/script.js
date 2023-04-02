const clickBar = document.querySelector(".clickBar");
const navslide = document.querySelector(".navslide")

clickBar.addEventListener("click",(event)=>{
    event.preventDefault();
    clickBar.classList.toggle("visible");
    clickBar.classList.toggle("hidden");
    navslide.classList.toggle(".triangleShapeLeft");
    navslide.classList.toggle(".triangleShapeRight");
})