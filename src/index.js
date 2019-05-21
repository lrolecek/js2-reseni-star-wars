const filmsElement = document.querySelector('#films');
let movies = [];

fetch('https://swapi.co/api/films/')
  .then(response => response.json())
  .then(json => {
    movies = getMovies(json);
    showMovies();
  })
  .catch(showError);

document.querySelector('#sort-episode-up').addEventListener('click', () => {
  sortMovies('episode', 1);
  showMovies();
});

document.querySelector('#sort-episode-down').addEventListener('click', () => {
  sortMovies('episode', -1);
  showMovies();
});

document.querySelector('#sort-year-up').addEventListener('click', () => {
  sortMovies('year', 1);
  showMovies();
});

document.querySelector('#sort-year-down').addEventListener('click', () => {
  sortMovies('year', -1);
  showMovies();
});


function showError(error) {
  filmsElement.innerHTML = `<p class="error">Došlo k chybě: ${error}</p>`;
}


function getMovies(data) {
  return data.results.map(
    movie => ({
      episode: movie.episode_id,
      title: movie.title,
      year: movie.release_date.slice(0,4),
      director: movie.director
    })
  );
}


function showMovies() {
  let html = movies.reduce((prev, movie) => {
    return prev + `
      <div class="film">
        <div class="film__episode">${movie.episode}</div>
        <div class="film__data">
          <div class="film__name">${movie.title}</div>
          <div class="film__year">${movie.year}</div>
          <div class="film_director">${movie.director}</div>
        </div>
      </div>
    `;
  }, '');

  filmsElement.innerHTML = html;
}


function sortMovies(field = 'episode', dir = 1) {
  movies.sort((a, b) => {
    return (a[field] - b[field]) * dir;
  });
}