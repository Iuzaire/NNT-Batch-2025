const blb = document.getElementById("bulb");
const batn = document.getElementById("btn");

batn.addEventListener("click", function(){
  blb.classList.toggle("active");
})
