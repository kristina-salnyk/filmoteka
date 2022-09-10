import refs from './refs';
import cardsYoutebe from '../templates/youtybe.hbs';
import YoutybeApiServer from './youtybe.api';
import { dynamicRefs } from './dynamicRefs';

const youtybeApiServer = new YoutybeApiServer();

const modalYoutebe = document.querySelector('.modal_window');
// const playVideo = document.querySelector('button[data-action="youtybe_play"]');
const body = document.querySelector('body');
const tectYou = document.querySelector('div[data-action="video"]');

//клік на картку фільму
refs.homeGallery.addEventListener('click', clickCardsFilm);

function clickCardsFilm(e) {
  caveKey(e);
}

//  зберігаєм ключ фільму
function caveKey(e) {
  youtybeApiServer.query = e.target.parentNode.getAttribute('data-id');
}
// --------------

// запит відео по ключу
// playVideo.addEventListener('click', httpsYoutybeVideo);

async function httpsYoutybeVideo() {
  const video = await youtybeApiServer.fethApiServes();
  const sas = await video.results;
  const videoKey = sas.find(videos => {
    // console.log(videos.name);
    if (videos.name === 'Official Trailer') {
      return videos.key;
    }
  });
  console.log(videoKey);
  markupModalYoutybe(videoKey);
}
//  рендер модального вікна
function markupModalYoutybe(then) {
  removeYoutybe();
  tectYou.insertAdjacentHTML('beforeend', cardsYoutebe(then));
  dynamicRefs().btnCloseModalYoutybe.addEventListener('click', closeVideo);
}
// ---------------

// закриття моданки по Escape (пока не працює)
document.addEventListener('keydown', keydown);
function keydown(e) {
  if (e.code === 'Escape') {
    // removeYoutybe();
  }
}
// ----------------

// закриття моданки по кнопці
function closeVideo() {
  removeYoutybe();
}
// --------------

function removeYoutybe() {
  tectYou.innerHTML = '';
}
