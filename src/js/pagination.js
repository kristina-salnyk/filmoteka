import ui from './ui-interactions';
import refs from './refs';
import { movieService } from '../index';

const pagin = document.querySelector('.pagination');
const paginList = document.querySelector('.pagination__list');
const list = document.querySelectorAll('.link');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');

// console.log(rightArrow);
// console.log(leftArrow);
// console.log(pagin);
// console.log(paginList);
list.forEach(element => {});

// const moveList = movieService.fetchTrendingMovies()
// moveList.then(console.log)

pagin.addEventListener('click', getNewPage);

export function getNewPage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }
  console.log(e.target.classList.contains('left__arrow'));
  if (e.target.classList.contains('left__arrow')) {
    movieService.decrementPage();
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }

  if (e.target.classList.contains('right__arrow')) {
    movieService.incrementPage();
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }
  if (
    !e.target.classList.contains('right__arrow') &&
    !e.target.classList.contains('left__arrow')
  ) {
    const page = Number(e.target.innerHTML);
    movieService.setPage(page);
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }
  console.log(movieService.getPage());
}

async function loadMovies() {
  const data = await movieService.fetchTrendingMovies();
  //   console.log(movieService.fetchTrendingMovies);
  const { results: movies, total_pages: totalPages } = data;

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genre_ids
      .map(id => movieService.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item.release_date);
    newItem.year = releaseDate.getFullYear();
    return newItem;
  });

  ui.appendGalleryMarkup(moviesData);
}
