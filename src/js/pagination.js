import { dynamicRefs } from './refs/dynamicRefs';

let paginationList = '';

export default async function paginationMarup(amountPages, currentPage) {
  if (dynamicRefs().paginList) {
    dynamicRefs().paginList.innerHTML = '';
    paginationList = '';
    
    ///////////////// Left Arrow////////////////////////
    if (currentPage !== 1)
      dynamicRefs().leftArrow.classList.remove('visually-hidden');

    if (currentPage === 1)
      dynamicRefs().leftArrow.classList.add('visually-hidden');
    // /////////////////////////////////////////////////////
    if (amountPages < 9) {
      for (let i = 1; i <= amountPages; i += 1) {
        if (i === currentPage) {
          paginationList += `<button type="button" class="pagination__button pagination__button--active" data-number='${i}'>${i}</button>`;
          continue;
        }

        paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;
      }
    }
    if (amountPages > 9) {
      for (let i = 1; i <= amountPages; i += 1) {
        if (i === currentPage) {
          paginationList += `<button type="button" class="pagination__button pagination__button--active" data-number='${i}'>${i}</button>`;
          continue;
        }
        if (currentPage > amountPages - 4) {
          if (i === 1)
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;

          if (i > amountPages - 5)
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;

          if (i === amountPages - 6)
            paginationList += `<button type="button" class="pagination__button" data-number='0' >...</button>`;
        }
        if (currentPage >= 5 && currentPage <= amountPages - 4) {
          if (i === currentPage) {
            paginationList += `<button type="button" class="pagination__button pagination__button--active" data-number='${i}'>${i}</button>`;
            continue;
          }
          if (i === 1)
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;

          if (i === currentPage - 3)
            paginationList += `<button type="button" class="pagination__button" data-number='0' >...</button>`;

          if (i === currentPage + 3)
            paginationList += `<button type="button" class="pagination__button" data-number='0' >...</button>`;

          if (i < currentPage - 2 && i > currentPage + 2) {
            continue;
          }
          if (i > currentPage - 3 && i < currentPage + 3 && i !== amountPages) {
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;
          }
          if (i === amountPages) {
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;
          }
        }
        if (currentPage < 5) {
          if (i <= 5) {
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;
          }
          if (i === 6) {
            paginationList +=
              `<button type="button" class="pagination__button" data-number='0' >...</button>`;
          }
          if (i === amountPages) {
            paginationList += `<button type="button" class="pagination__button" data-number='${i}'>${i}</button>`;
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
