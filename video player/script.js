
const vdo= document.getElementById('vdo');


function upload(){
  let vPath= document.getElementById('chosef').value.replace(/^C:\\fakepath\\/, "");
  window.alert("Uploaded: "+ vPath);
  vdo.src = vPath;
}


function ply(){
  vdo.play();
}

function pau(){
  vdo.pause();
}