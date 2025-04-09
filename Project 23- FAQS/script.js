
const ans = document.getElementById('ans');
const crossIcon = document.getElementById('cross1');
const btnOne = document.getElementById('btn1');
const Box1 = document.querySelector('.box1');

btnOne.onclick = function () {

  Box1.classList.add('active');
  ans.style.display = "block";
  crossIcon.style.display = "block";
  btnOne.style.display = "none";

}

crossIcon.onclick = function () {
  Box1.classList.remove('active');
  ans.style.display = "none";
  crossIcon.style.display = "none";
  btnOne.style.display = "block";
}

//-----------2-------------

const btn2 = document.getElementById('btn2');
const Box2 = document.querySelector('.box2');
const ans2 = document.getElementById('ans2');
const crossIcon2 = document.getElementById('cross2');


btn2.onclick = function () {

  Box2.classList.add('active');
  ans2.style.display = "block";
  crossIcon2.style.display = "block";
  btn2.style.display = "none";

}

crossIcon2.onclick = function () {
  Box2.classList.remove('active');
  ans2.style.display = "none";
  crossIcon2.style.display = "none";
  btn2.style.display = "block";
}

//--------3----------
const btn3 = document.getElementById('btn3');
const Box3 = document.querySelector('.box3');
const ans3 = document.getElementById('ans3');
const crossIcon3 = document.getElementById('cross3');


btn3.onclick = function () {

  Box3.classList.add('active');
  ans3.style.display = "block";
  crossIcon3.style.display = "block";
  btn3.style.display = "none";

}

crossIcon3.onclick = function () {
  Box3.classList.remove('active');
  ans3.style.display = "none";
  crossIcon3.style.display = "none";
  btn3.style.display = "block";
}

//-------------4-------------------

const btn4 = document.getElementById('btn4');
const Box4 = document.querySelector('.box4');
const ans4 = document.getElementById('ans4');
const crossIcon4 = document.getElementById('cross4');


btn4.onclick = function () {

  Box4.classList.add('active');
  ans4.style.display = "block";
  crossIcon4.style.display = "block";
  btn4.style.display = "none";

}

crossIcon4.onclick = function () {
  Box4.classList.remove('active');
  ans4.style.display = "none";
  crossIcon4.style.display = "none";
  btn4.style.display = "block";
}

//------------5--------------------

const btn5 = document.getElementById('btn5');
const Box5 = document.querySelector('.box5');
const ans5 = document.getElementById('ans5');
const crossIcon5 = document.getElementById('cross5');


btn5.onclick = function () {

  Box5.classList.add('active');
  ans5.style.display = "block";
  crossIcon5.style.display = "block";
  btn5.style.display = "none";

}

crossIcon5.onclick = function () {
  Box5.classList.remove('active');
  ans5.style.display = "none";
  crossIcon5.style.display = "none";
  btn5.style.display = "block";
}