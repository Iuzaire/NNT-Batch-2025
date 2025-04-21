const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const nowPlaying = document.getElementById('nowPlaying');

sounds.forEach((sound, index) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = `${index + 1}. ${sound}`

  btn.addEventListener('click', () => playSound(sound))
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}

function playSound(sound) {
  stopSongs()
  document.getElementById(sound).play()
  nowPlaying.textContent = sound.charAt(0).toUpperCase() + sound.slice(1)
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const index = parseInt(e.key) - 1
  if (index >= 0 && index < sounds.length) {
    playSound(sounds[index])
  }
})