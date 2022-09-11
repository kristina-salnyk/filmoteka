import refs from './refs/refs';
import youTubeCard from '../templates/you-tube-card.hbs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchMovieVideo } from './api/movie-api/fetchMovieVideo';
import notifications from './notifications';
import { spinner } from './spinner';

export async function httpsYouTubeVideo(event) {
  const movieId = event.target.dataset.id;

  try {
    spinner.spin(refs.homeGallery);
    const videoData = await fetchMovieVideo(movieId);
    spinner.stop();
    const videoKey = videoData['results'].find(video => {
      if (video.name.toLowerCase().includes('trailer')) {
        return video.key;
      }
    });
    const svg = `./images/icons.svg#icon-exit_door_closed`;
    markupModalYouTube(videoKey, svg);
  } catch (error) {
    notifications.failedRequest();
  }
}

//  рендер модального вікна
function markupModalYouTube(videoKey, svg) {
  refs.youTubeVideo.insertAdjacentHTML('beforeend', youTubeCard(videoKey, svg));
  refs.youTubeVideo.classList.remove('visually-hidden');
  dynamicRefs().btnCloseModalYouTube.addEventListener('click', closeVideo);
}
// ---------------

// закриття моданки по Escape (пока не працює)
function keydown(e) {
  if (e.code === 'Escape') {
    removeYouTube();
  }
}
// ----------------

// закриття модалки по кнопці
function closeVideo() {
  removeYouTube();
}
// --------------

function removeYouTube() {
  refs.youTubeVideo.innerHTML = '';
  refs.youTubeVideo.classList.add('visually-hidden');
}
