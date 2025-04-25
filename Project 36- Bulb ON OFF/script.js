const blb = document.getElementById("bulb");
const batn = document.getElementById("btn");
const circle = document.getElementById("crcle");


batn.addEventListener("click", function(){
  blb.classList.toggle("active");
  circle.classList.toggle("circle-active");
  
})
