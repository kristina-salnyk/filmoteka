import refs from './refs/refs';
import youTubeCard from '../templates/you-tube-card.hbs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchMovieVideo } from './api/movie-api/fetchMovieVideo';
import notifications from './notifications';

export async function httpsYouTubeVideo(event) {
  const movieId = event.target.dataset.id;

  try {
    const videoData = await fetchMovieVideo(movieId);
    const videoKey = videoData['results'].find(video => {
      if (video.name.toLowerCase().includes('trailer')) {
        return video.key;
      }
    });
    console.log(videoKey);
    markupModalYouTube(videoKey);
  } catch (error) {
    notifications.failedRequest();
  }
}

//  рендер модального вікна
function markupModalYouTube(then) {
  removeYouTube();
  refs.youTubeVideo.insertAdjacentHTML('beforeend', youTubeCard(then));
  dynamicRefs().btnCloseModalYoutybe.addEventListener('click', closeVideo);
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
}
