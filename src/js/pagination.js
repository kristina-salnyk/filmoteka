import ui from './ui-interactions';
import refs from './refs';
import { movieService } from '../index';
import { loadTrendingMovies } from './loadTrendingMovies';

const pagin = document.querySelector('.pagination');
const paginList = document.querySelector('.pagination__list');


const leftArrowmarcup = `<a class="link left__arrow" href="" id="leftArrow">' < '</a>`;
const rightArrowMarcup = `<a class="link right__arrow" href="" id="rightArrow">' > '</a>`;


let paginationList = ''

export default async function paginationMarup(amountPages, currentPage) {
  paginList.innerHTML = ''
  paginationList = '';
  
  ///////////////// Left Arrow////////////////////////
  if (currentPage !== 1) {
    paginList.insertAdjacentHTML('beforeend', leftArrowmarcup);
  }
////////////////////////////////////////////

  if (amountPages < 9) {
    for (let i = 1; i <= amountPages; i += 1) {
      if (i === currentPage) {
        paginationList += `<a class="link link--active" href="" >${i}</a>`;
        continue;
      }
      paginationList += `<a class="link" href="" >${i}</a>`;
    }
  }
  if (amountPages > 9) {    
    
    for (let i = 1; i <= amountPages; i += 1) {
      if (i === currentPage) {
        paginationList += `<a class="link link--active" href="" >${i}</a>`;
        continue;
      }
      if (currentPage >= 5) {
        if (i === currentPage) {
          paginationList += `<a class="link link--active" href="" >${i}</a>`;
          continue;
        }
        if (i === 1) {
          paginationList += `<a class="link" href="" >${i}</a>`;
        }
        if (i === currentPage - 3  ) {
          paginationList += '<a class="link" href="" >...</a>';
         
        }
        if (i === currentPage+ 3) {
          paginationList += '<a class="link" href="" >...</a>';
        }
        if (i < currentPage - 2 && i > currentPage + 2) {
          continue;
        }
        if (i > currentPage - 3 && i < currentPage + 3 && i !== amountPages) {
          paginationList += `<a class="link" href="" >${i}</a>`;
        }
        if (i === amountPages ) {
          paginationList += `<a class="link" href="" >${i}</a>`;
        }
      }
      if (currentPage < 5) {
        if (i<=5) {
          paginationList += `<a class="link" href="" >${i}</a>`;
          
        }
        if (i ===6 ) {

          paginationList += '<a class="link" href="" >...</a>';
        }
        if (i===amountPages) {
           paginationList += `<a class="link" href="" >${i}</a>`;
        }
      }
    }
  }



  paginList.insertAdjacentHTML('beforeend', paginationList);
/////////////////Right Arrow////////////////////////
  if (currentPage !== amountPages) {
    paginList.insertAdjacentHTML('beforeend', rightArrowMarcup);
  }
  /////////////////////////////////////////////
}


paginList.addEventListener('click', getNewPage);

export function getNewPage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  if (e.target.classList.contains('left__arrow')) {
    movieService.decrementPage();
    refs.homeGallery.innerHTML = '';
    loadTrendingMovies();
  }

  if (e.target.classList.contains('right__arrow')) {
    movieService.incrementPage();
    refs.homeGallery.innerHTML = '';
   loadTrendingMovies();
  }
  if (
    !e.target.classList.contains('right__arrow') &&
    !e.target.classList.contains('left__arrow') &&
    e.target.innerHTML !== '...'
  ) {
    const page = Number(e.target.innerHTML);
    movieService.setPage(page);
    refs.homeGallery.innerHTML = '';
    loadTrendingMovies();
  }

}

