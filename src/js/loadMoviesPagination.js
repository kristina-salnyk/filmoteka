import refs from "./refs/refs";
import {movieConfigs} from "../index";
import {fetchTrendingMovies} from "./api/movie-api/fetchTrendingMovies";
import {renderMoviesData} from "./render/renderMoviesData";
import notifications from "./notifications";


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
  try {
    const trendingData = await fetchTrendingMovies();
    renderMoviesData(trendingData);
  } catch (error) {
    notifications.failedRequest();
  }
}
