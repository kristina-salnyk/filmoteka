import refs from './refs/refs';
import { siteConfigs } from './SiteConfigs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchTrendingMovies } from './api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './render/renderMoviesData';
import { fetchSearchMovie } from './api/movie-api/fetchSearchMovie';
import notifications from './notifications';
import storage from './local-storage-service';
import { STORAGE_KEYS } from './constants';
import { spinner } from './spinner';
import { watchedTabClickHandler } from './handlers/watchedTabClickHandler';
import { queueTabClickHandler } from './handlers/queueTabClickHandler';

dynamicRefs().paginList.addEventListener('click', getNewPage);
dynamicRefs().rightArrow.addEventListener('click', rightBtnClick);
dynamicRefs().leftArrow.addEventListener('click', leftBtnClick);

function leftBtnClick() {
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'WATCHED')
    siteConfigs.decrementWatchedPage();
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE')
    siteConfigs.decrementQueuePage();

  siteConfigs.decrementPage();

  if (refs.homeGallery) refs.homeGallery.innerHTML = '';
  if (refs.libraryGallery) refs.libraryGallery.innerHTML = '';
  loadMovies();
}

function rightBtnClick() {
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'WATCHED')
    siteConfigs.incrementWatchedPage();
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE')
    siteConfigs.incrementQueuePage();
  siteConfigs.incrementPage();
  if (refs.homeGallery) refs.homeGallery.innerHTML = '';
  if (refs.libraryGallery) refs.libraryGallery.innerHTML = '';
  loadMovies();
}

function getNewPage(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') return;

  if (e.target.dataset.number !== '0') {
    const page = Number(e.target.dataset.number);
    if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'WATCHED')
      siteConfigs.watchedPage = page;
    if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE')
      siteConfigs.queuePage = page;
    siteConfigs.page = page;
    if (refs.homeGallery) refs.homeGallery.innerHTML = '';
    if (refs.libraryGallery) refs.libraryGallery.innerHTML = '';
    loadMovies();
  }
}

async function loadMovies() {
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'TRENDING') {
    try {
      spinner.spin(refs.homeGallery);
      const trendingData = await fetchTrendingMovies();
      spinner.stop();
      renderMoviesData(trendingData);
    } catch (error) {
      notifications.failedRequest();
    }
  }

  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'SEARCH') {
    try {
      spinner.spin(refs.homeGallery);
      const data = await fetchSearchMovie();
      spinner.stop();
      renderMoviesData(data);
    } catch (error) {
      notifications.failedRequest();
    }
  }
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'WATCHED') {
    try {
      spinner.spin(refs.libraryGallery);
      const data = await watchedTabClickHandler();
      spinner.stop();
    } catch (error) {
      notifications.failedRequest();
    }
  }
  if (storage.load(STORAGE_KEYS.LAST_FETCH) === 'QUEUE') {
    try {
      spinner.spin(refs.libraryGallery);
      const data = await queueTabClickHandler();
      spinner.stop();
    } catch (error) {
      notifications.failedRequest();
    }
  }
}
