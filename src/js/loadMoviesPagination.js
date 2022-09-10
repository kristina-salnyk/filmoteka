import refs from './refs/refs';
import { movieConfigs } from '../index';
import homePageUi from './ui/home-page-ui';
import { dynamicRefs } from './refs/dynamicRefs';
import paginationMarup from './pagination'
import { fetchTrendingMovies } from './api/movie-api/fetchTrendingMovies';


dynamicRefs().paginList.addEventListener('click', getNewPage);
dynamicRefs().leftArrow.addEventListener('click', leftBtnClick);
dynamicRefs().rightArrow.addEventListener('click', rightBtnClick);


export default function leftBtnClick() {
  movieConfigs.decrementPage();
  refs.homeGallery.innerHTML = '';
  loadMovies();
}

export default function rightBtnClick() {
  movieConfigs.incrementPage();
  refs.homeGallery.innerHTML = '';
  loadMovies();
}

export default function getNewPage(e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.innerHTML !== '...') {
    const page = Number(e.target.innerHTML);
    movieConfigs.page = page;
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }
}

async function loadMovies() {
  const data = await fetchTrendingMovies();
  const { results: movies, total_pages: totalPages } = data;

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genre_ids
      .map(id => movieConfigs.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item.release_date);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item.vote_average.toFixed(1);
    return newItem;
  });

  homePageUi.appendGalleryMarkup(moviesData);
  paginationMarup(totalPages, movieConfigs.page);
}