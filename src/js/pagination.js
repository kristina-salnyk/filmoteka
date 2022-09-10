import refs from './refs';

import { dynamicRefs } from './dynamicRefs';


 
export const paginList = document.querySelector('.pagination__list');

export const leftArrow = document.querySelector('[data-arrow="left"]');
export const rightArrow = document.querySelector('[data-arrow="right"]');

let paginationList = '';

export default async function paginationMarup(amountPages, currentPage) {


  if (dynamicRefs().paginList) {
    dynamicRefs().paginList.innerHTML = '';
    paginationList = '';

    ///////////////// Left Arrow////////////////////////
    if (currentPage !== 1) {
      dynamicRefs().leftArrow.classList.remove('visually-hidden');
    
    }
    // //////////////////////////////////////////////////////
    if (currentPage === 1) dynamicRefs().leftArrow.classList.add('visually-hidden');

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
    dynamicRefs().paginList.insertAdjacentHTML('beforeend', paginationList);

    /////////////////Right Arrow////////////////////////
    if (currentPage !== amountPages) {
     dynamicRefs().rightArrow.classList.remove('visually-hidden');
     
    }
    if (currentPage === amountPages)
      dynamicRefs().rightArrow.classList.add('visually-hidden');
  }
  /////////////////////////////////////////////
}


