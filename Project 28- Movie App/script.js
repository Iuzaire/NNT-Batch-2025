const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const loadMoreBtn = document.getElementById('load-more');

let currentPage = 1;
let currentSearchTerm = '';
let isSearchMode = false;

getMovies(API_URL + currentPage);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    const imageSrc = poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/500x750?text=No+Image';

    movieEl.innerHTML = `
      <img src="${imageSrc}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${truncateText(overview, 200)}
      </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  main.innerHTML = '';
  currentPage = 1;
  isSearchMode = !!searchTerm;
  currentSearchTerm = searchTerm;

  const url = isSearchMode ? SEARCH_API + searchTerm + `&page=${currentPage}` : API_URL + currentPage;
  getMovies(url);
});

loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  const url = isSearchMode ? SEARCH_API + currentSearchTerm + `&page=${currentPage}` : API_URL + currentPage;
  getMovies(url);
});
