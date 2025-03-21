const btn = document.getElementById('btn');
const notesContainer = document.getElementById('text-container');
let notes = document.querySelectorAll(".input-box");

document.getElementById('btn');

btn.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let img =  document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
  
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
  }
  
})



