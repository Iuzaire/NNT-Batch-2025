let fName_event = document.getElementById('fname');

fName_event.onblur = function blur(){
  let fNameVal = document.getElementById('fname').value;
  let fNameBox = document.getElementById('fname');

if(fNameVal==""){
  fNameBox.style.border = "1px solid red";
  document.getElementById('warn-pic').style.display = "block";
}

  fNameBox.onclick = function(){

  fNameBox.style.border = "1px solid #ccc";
  document.getElementById('warn-pic').style.display = "none";

  document.getElementById('msg-pic').style.display = "block";

  fNameBox.onblur = function(){
    document.getElementById('msg-pic').style.display = "none";
    blur();
  }


}

}