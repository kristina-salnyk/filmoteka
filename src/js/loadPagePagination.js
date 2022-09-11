import refs from './refs/refs';
import { movieConfigs } from '../index';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchTrendingMovies } from './api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './render/renderMoviesData';
import { fetchSearchMovie } from './api/movie-api/fetchSearchMovie';
import notifications from './notifications';
import storege from './local-storage/local-storage-service';
import key from './local-storage/local-storage-keys';

dynamicRefs().paginList.addEventListener('click', getNewPage);
dynamicRefs().rightArrow.addEventListener('click', rightBtnClick);
dynamicRefs().leftArrow.addEventListener('click', leftBtnClick);

function leftBtnClick() {
  movieConfigs.decrementPage();
  refs.homeGallery.innerHTML = '';
  loadMovies();
}

function rightBtnClick() {
  movieConfigs.incrementPage();
  refs.homeGallery.innerHTML = '';
  loadMovies();
}

function getNewPage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.dataset.number !== '0') {
    const page = Number(e.target.dataset.number);
    movieConfigs.page = page;
    refs.homeGallery.innerHTML = '';
    loadMovies();
  }
}

async function loadMovies() {
  if (storege.load(key.LAST_FETCH) === 'TRENDING') {
    try {
      const trendingData = await fetchTrendingMovies();
      renderMoviesData(trendingData);
    } catch (error) {
      notifications.failedRequest();
    }
  }

  if (storege.load(key.LAST_FETCH) === 'SEARCH') {
    try {
      const data = await fetchSearchMovie();
      renderMoviesData(data);
    } catch (error) {
      notifications.failedRequest();
    }
  }
}
