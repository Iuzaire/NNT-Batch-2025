const textE = document.getElementById('text')
const speedE = document.getElementById('speed')
const stopB = document.getElementById('stp')
const text = "...This is dummy text..."
let idx = 1
let speed = 300 / speedE.value

writeText()

function writeText() {
    textE.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)

}


speedE.addEventListener('input', (e) => speed = 300 / e.target.value)

stopB.addEventListener("click", function() {
    if (textE.style.visibility === "hidden") {
        textE.style.visibility = "visible";
        textE.innerText = "Started";
    } else {
        textE.style.visibility = "hidden";
        textE.innerText = "Stopped";
    }
});
