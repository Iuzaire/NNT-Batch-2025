const textE = document.getElementById('text')
const speedE = document.getElementById('speed')
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