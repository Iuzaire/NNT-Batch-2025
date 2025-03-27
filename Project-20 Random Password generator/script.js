


const generateBtn =  document.getElementById('btn');
let inputBox = document.getElementById('input-box');


generateBtn.addEventListener('click' , ()=>{
  
  generateRandom();
})

function generateRandom(){
  const chars = "ASDFGHKLQWERTYUIOPZXCVBNMqwertyuiopasdfghklzxcvbnm1234567890!@#$%^&*_+?><>;"
  let password = "";
  let passwordLenght = 14;
   
    for(let i = 0; i<passwordLenght; i++){
     
      let randomNum = Math.floor(Math.random()*chars.length);
  
     password = password + chars.substring(randomNum, randomNum+1);
        }

        let inputBox = document.getElementById('input-box');
        inputBox.value = password;
        let msgBox = document.getElementById('msg');
        msgBox.innerText = "Copied: "+ password;}

      const copyBtn = document.getElementById('cpy');

      copyBtn.addEventListener('click', ()=>{
          copying();
          
         
      })

      function copying(){
        
        
        let inputBox = document.getElementById('input-box');
         inputBox.select();
         inputBox.setSelectionRange(0,9999);
         navigator.clipboard.writeText(inputBox.value);

         let msgBox = document.getElementById('msg');
        msgBox.innerText = "Copied: "+ inputBox.value;
        msgBox.style.display = "block";

        


      }





      