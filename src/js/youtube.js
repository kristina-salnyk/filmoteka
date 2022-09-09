import refs from './refs';

const modalYoutebe = document.querySelector('.modal_youtebe');
const btn = document.querySelector('.modal_btn');

document.addEventListener('keydown', keydown);
btn.addEventListener('click', removeModal);

function keydown(e) {
  if (e.code === 'Escape') {
    modalYoutebe.classList.remove('visually-hidden');
  }
}

function removeModal() {
  modalYoutebe.classList.add('visually-hidden');
}

refs.homeGallery.addEventListener('click', clik);

function clik(e) {
  const dataId = e.target.parentNode.getAttribute('data-id');
  console.log(dataId);
  // console.log(dataId);
  fetch(
    `https://api.themoviedb.org/3/movie/${dataId}/videos?api_key=3db99de6ff3e5f2ef6de763ae547f586&language=en-US`
    // 'https://api.themoviedb.org/3/movie/300/videos?api_key=3db99de6ff3e5f2ef6de763ae547f586&language=en-US'
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.results);
      const dfdd = data.results;
      dfdd.map(element => {
        console.log(element.key);
        // console.log(index);
        // console.log(array.length - 1);
      });
    })
    .catch(error => {
      // Error handling
    });
}
