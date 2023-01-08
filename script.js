const starbucks =  document.querySelector(".starbucks");
const circle = document.querySelector('.circle');

function imgSlider(foti){
   starbucks.src = foti;
}

function changeCircleColor(renk){
circle.style.background = renk;
}