import refs from './refs/refs';
import { siteConfigs } from './SiteConfigs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchTrendingMovies } from './api/movie-api/fetchTrendingMovies';
import { renderMoviesData } from './render/renderMoviesData';
import { fetchSearchMovie } from './api/movie-api/fetchSearchMovie';
import notifications from './notifications';
import storege from './local-storage/local-storage-service';
import key from './local-storage/local-storage-keys';
import { spinner } from './spinner';
import { watchedTabClickHandler } from './handlers/watchedTabClickHandler';
import { queueTabClickHandler } from './handlers/queueTabClickHandler';

dynamicRefs().paginList.addEventListener('click', getNewPage);
dynamicRefs().rightArrow.addEventListener('click', rightBtnClick);
dynamicRefs().leftArrow.addEventListener('click', leftBtnClick);

function leftBtnClick() {
  if (storege.load(key.LAST_FETCH) === 'WATCHED')
    siteConfigs.decrementWatchedPage();
  if (storege.load(key.LAST_FETCH) === 'QUEUE')
    siteConfigs.decrementQueuePage();

  siteConfigs.decrementPage();

  if (refs.homeGallery) refs.homeGallery.innerHTML = '';
  if (refs.libraryGallery) refs.libraryGallery.innerHTML = '';
  loadMovies();
}

function rightBtnClick() {
  if (storege.load(key.LAST_FETCH) === 'WATCHED')
    siteConfigs.incrementWatchedPage();
  if (storege.load(key.LAST_FETCH) === 'QUEUE') siteConfigs.incrementPage();
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
    if (storege.load(key.LAST_FETCH) === 'WATCHED')
      siteConfigs.watchedPage = page;
    if (storege.load(key.LAST_FETCH) === 'QUEUE') siteConfigs.queuePage = page;
    siteConfigs.page = page;
    if (refs.homeGallery) refs.homeGallery.innerHTML = '';
    if (refs.libraryGallery) refs.libraryGallery.innerHTML = '';
    loadMovies();
  }
}

async function loadMovies() {
  if (storege.load(key.LAST_FETCH) === 'TRENDING') {
    try {
      spinner.spin(refs.homeGallery);
      const trendingData = await fetchTrendingMovies();
      spinner.stop();
      renderMoviesData(trendingData);
    } catch (error) {
      notifications.failedRequest();
    }
  }

  if (storege.load(key.LAST_FETCH) === 'SEARCH') {
    try {
      spinner.spin(refs.homeGallery);
      const data = await fetchSearchMovie();
      spinner.stop();
      renderMoviesData(data);
    } catch (error) {
      notifications.failedRequest();
    }
  }
  if (storege.load(key.LAST_FETCH) === 'WATCHED') {
    try {
      spinner.spin(refs.libraryGallery);
      const data = await watchedTabClickHandler();
      spinner.stop();
    } catch (error) {
      notifications.failedRequest();
    }
  }
  if (storege.load(key.LAST_FETCH) === 'QUEUE') {
    try {
      spinner.spin(refs.libraryGallery);
      const data = await queueTabClickHandler();
      spinner.stop();
    } catch (error) {
      notifications.failedRequest();
    }
  }
}
