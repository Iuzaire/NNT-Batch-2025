const container = document.getElementById('container')
const colors = ['#f39c12', '#16a085', '#2980b9', '#c0392b']
const SQUARES = 100

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(el) {
  const color = colors[Math.floor(Math.random() * colors.length)]
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 5px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#333'
  el.style.boxShadow = 'none'
}
