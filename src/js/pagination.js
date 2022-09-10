import refs from './refs/refs';
import { movieConfigs } from '../index';
import homePageUi from './ui/home-page-ui';
import { fetchTrendingMovies } from './api/movie-api/fetchTrendingMovies';

const paginList = document.querySelector('.pagination__list');

const leftArrow = document.querySelector('[data-arrow="left"]');
const rightArrow = document.querySelector('[data-arrow="right"]');

let paginationList = '';

export default async function paginationMarup(amountPages, currentPage) {
  if (paginList) {
    paginList.innerHTML = '';
    paginationList = '';

    ///////////////// Left Arrow////////////////////////
    if (currentPage !== 1) {
      leftArrow.classList.remove('visually-hidden');
      leftArrow.addEventListener('click', leftBtnClick);
    }

    if (currentPage === 1) leftArrow.classList.add('visually-hidden');

    if (amountPages < 9) {
      for (let i = 1; i <= amountPages; i += 1) {
        if (i === currentPage) {
          paginationList += `<button type="button" class="link link--active" data-nunber='${i}'>${i}</button>`;
          continue;
        }

        paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
      }
    }
    if (amountPages > 9) {
      for (let i = 1; i <= amountPages; i += 1) {
        if (i === currentPage) {
          paginationList += `<button type="button" class="link link--active" data-nunber='${i}'>${i}</button>`;
          continue;
        }
        if (currentPage > amountPages - 4) {
          if (i === 1) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }

          if (i > amountPages - 5) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
            console.log(i);
          }
          if (i === amountPages - 6) {
            paginationList +=
              '<button type="button" class="link" >...</button>';
          }
        }
        if (currentPage >= 5 && currentPage <= amountPages - 4) {
          if (i === currentPage) {
            paginationList += `<button type="button" class="link link--active" data-nunber='${i}'>${i}</button>`;
            continue;
          }
          if (i === 1) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }
          if (i === currentPage - 3) {
            paginationList +=
              '<button type="button" class="link" >...</button>';
          }
          if (i === currentPage + 3) {
            paginationList +=
              '<button type="button" class="link" >...</button>';
          }
          if (i < currentPage - 2 && i > currentPage + 2) {
            continue;
          }
          if (i > currentPage - 3 && i < currentPage + 3 && i !== amountPages) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }
          if (i === amountPages) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }
        }
        if (currentPage < 5) {
          if (i <= 5) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }
          if (i === 6) {
            paginationList +=
              '<button type="button" class="link" >...</button>';
          }
          if (i === amountPages) {
            paginationList += `<button type="button" class="link" data-nunber='${i}'>${i}</button>`;
          }
        }
      }
    }
    paginList.insertAdjacentHTML('beforeend', paginationList);

    /////////////////Right Arrow////////////////////////
    if (currentPage !== amountPages) {
      rightArrow.classList.remove('visually-hidden');
      rightArrow.addEventListener('click', rightBtnClick);
    }
    if (currentPage === amountPages)
      rightArrow.classList.add('visually-hidden');
  }
  /////////////////////////////////////////////
}

paginList.addEventListener('click', getNewPage);

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

export function getNewPage(e) {
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
