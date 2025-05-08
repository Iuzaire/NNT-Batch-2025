const result = document.getElementById('result');
const filter = document.getElementById('filter');
const countDisplay = document.getElementById('count');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');
  const { results } = await res.json();

  result.innerHTML = '';
  results.forEach(user => {
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;

    result.appendChild(li);
  });

  updateCount();
}

function filterData(searchTerm) {
  let visibleCount = 0;

  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
      visibleCount++;
    } else {
      item.classList.add('hide');
    }
  });

  countDisplay.innerText = visibleCount;
}

function updateCount() {
  const visibleItems = listItems.filter(item => !item.classList.contains('hide'));
  countDisplay.innerText = visibleItems.length;
}
