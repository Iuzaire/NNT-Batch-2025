function changeR() {
  const txt = document.getElementById('text');
  const range = document.getElementById('rng').value;
  const rngTxt = document.getElementById('rtext');

  rngTxt.innerHTML = "Your range is " + range + " px";
  txt.style.fontSize = range + "px";


}
