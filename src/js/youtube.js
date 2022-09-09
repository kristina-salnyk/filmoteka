import refs from './refs';
import cardsYoutebe from '../templates/youtybe.hbs';
import YoutybeApiServer from './youtybe.det';

const youtybeApiServer = new YoutybeApiServer();

const modalYoutebe = document.querySelector('.modal_youtebe');
const btn = document.querySelector('.modal_btn');
const body = document.querySelector('body');
const tectYou = document.querySelector('.video');

// btn.addEventListener('click', closeVideo);
refs.homeGallery.addEventListener('click', startYoutybe);

function startYoutybe(e) {
  // modalYoutebe.classList.remove('visually-hidden');
  // body.classList.add('no_scroll');
  clik(e);
}

document.addEventListener('keydown', keydown);
function keydown(e) {
  if (e.code === 'Escape') {
    removeYoutybe();
    modalYoutebe.classList.add('visually-hidden');
    body.classList.remove('no_scroll');
  }
}

function closeVideo() {
  modalYoutebe.classList.add('visually-hidden');
  body.classList.remove('no_scroll');
}

function clik(e) {
  youtybeApiServer.query = e.target.parentNode.getAttribute('data-id');
  httpsYoutybeVideo();
}

async function httpsYoutybeVideo() {
  const video = await youtybeApiServer.fethApiServes();
  const sas = await video.results;
  const videoKey = sas.find(videos => {
    if (videos.name === 'Official Trailer') {
      return videos.key;
    }
  });
  console.log(videoKey);
  markupModalYoutybe(videoKey);
}

function markupModalYoutybe(then) {
  removeYoutybe();
  tectYou.insertAdjacentHTML('beforeend', cardsYoutebe(then));
}

function removeYoutybe() {
  tectYou.innerHTML = '';
}
