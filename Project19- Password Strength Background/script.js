const pass = document.getElementById('pass'); 
const img = document.getElementById('bg-pic'); 

pass.addEventListener("input", () => { 
    let pwdLen = pass.value.length; 

    let blurValue = 20 - pwdLen*2.5; 

    img.style.filter = `blur(${blurValue}px)`;

    
    if(pwdLen>=8){
      document.getElementById('msg').style.visibility = "visible";
    }else{
      document.getElementById('msg').style.visibility = "hidden";

    }
});
