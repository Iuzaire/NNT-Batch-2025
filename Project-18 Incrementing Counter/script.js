let count1 = 0;
let count2 = 0;
let count3 = 0;

let print = setInterval(()=>{

  let twtNum = document.getElementById('Tfollower');
  let Ynum = document.getElementById('Yfollower');
  let insta = document.getElementById('Ifollower');
  
if(count1<950){
  count1++;
}
twtNum.innerHTML = count1; // twitter

if(count2<1100){
  count2++;
}

Ynum.innerHTML = count2; // youtube

if(count3<1240){
  count3++;
}

insta.innerHTML = count3; //instagram

if(count3>=1240){
  clearInterval(print);
}
},10)



// setInterval(anim, 22)
// setInterval(anim2, 20)
// setInterval(anim3, 25)

// function anim() {
//   count1++;

//   if (count1 > 1000) {
//     count1 = 1020;
//   } else {

//     twtNum.innerHTML = count1;
//   }

// }

// function anim2() {
//   count2++;

//   if (count2 > 1200) {
//     count2 = 1230;
//   } else {

//     Ynum.innerHTML = count2;
//   }

// }

// function anim3() {
//   count3++;

//   if (count3 > 1000) {
//     count3 = 1030;
//   } else {

//     insta.innerHTML = count3;
//   }

// }
