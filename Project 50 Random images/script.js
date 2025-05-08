const container = document.querySelector('.container');

const imageFilenames = [
  'a.jpeg', 'b.jpeg', 'c.jpeg',
  'd.jpeg', 'e.jpeg', 'f.jpeg',
  'g.jpg'
];

imageFilenames.forEach(filename => {
  const img = document.createElement('img');
  img.src = `./images/${filename}`;
  img.alt = filename;
  container.appendChild(img);
});
