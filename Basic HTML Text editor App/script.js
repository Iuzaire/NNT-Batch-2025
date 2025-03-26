function run() {

  const code = document.getElementById('code').value;

  let result_box = document.getElementById('result');

  result_box.innerHTML = code;

  let text_box = document.getElementById('text-box');

  text_box.style.display = "none";

  let rBtn = document.getElementById('run-btn');

  rBtn.style.display = "none";

  let show_res = document.getElementById('show');

  show_res.style.display = "block";

  show_res.setAttribute("class", "animate__animated animate__fadeInRight")

  let return_Btn = document.getElementById('icon');

  return_Btn.style.display = "block";


}


function back() {
  let show_res = document.getElementById('show');

  show_res.style.display = "none";

  let return_Btn = document.getElementById('icon');

  return_Btn.style.display = "none";

  let text_box = document.getElementById('text-box');
  text_box.style.display = "block";

  text_box.setAttribute("class", "animate__animated animate__fadeInLeft")

  let rBtn = document.getElementById('run-btn');

  rBtn.style.display = "block";

}
