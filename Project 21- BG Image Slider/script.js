
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const bg = document.querySelector('.bg');

let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Show the current slide
  slides[index].style.display = 'block';

  // Update background image
  const imgSrc = slides[index].querySelector('img').src;
  bg.style.backgroundImage = `url(${imgSrc})`;
}

// Initial load
showSlide(currentIndex);

// Button handlers
rightBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

leftBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};
