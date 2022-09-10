import refs from './refs';
import { movieService } from '../index';
import homePageUi from './home-page-ui';
import { dynamicRefs } from './dynamicRefs'
import paginationMarup from './pagination'


dynamicRefs().paginList.addEventListener('click', getNewPage);
dynamicRefs().leftArrow.addEventListener('click', leftBtnClick);
dynamicRefs().rightArrow.addEventListener('click', rightBtnClick);

   
export default function leftBtnClick() {
  movieService.decrementPage();
  refs.homeGallery.innerHTML = '';
  loadMovies();
}

export default function rightBtnClick() {
  movieService.incrementPage();
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
    movieService.setPage(page);
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }
}

async function loadMovies() {
  const data = await movieService.fetchTrendingMovies();
  const { results: movies, total_pages: totalPages } = data;

  const moviesData = movies.map(item => {
    const newItem = { ...item };
    newItem.genres = item.genre_ids
      .map(id => movieService.getGenreById(id))
      .join(', ');
    const releaseDate = new Date(item.release_date);
    newItem.year = releaseDate.getFullYear();
    newItem.vote = item.vote_average.toFixed(1);
    return newItem;
  });

  homePageUi.appendGalleryMarkup(moviesData);
  paginationMarup(totalPages, movieService.getPage());
}
