import refs from './refs/refs';
import youTubeCard from '../templates/youTube-card.hbs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchMovieVideo } from './api/movie-api/fetchMovieVideo';
import notifications from './notifications';
import { spinner } from './spinner';

export async function httpsYouTubeVideo(event) {
  const movieId = event.target.dataset.id;

  if (!movieId) {
    return;
  }

  try {
    spinner.spin(refs.homeGallery);
    const videoData = await fetchMovieVideo(movieId);
    spinner.stop();
    if (videoData.results.length === 0) {
      notifications.noVideoYouTube();
      return;
    }
    const videoKey = await videoData['results'].find(video => {
      if (video.type.toLowerCase().includes('trailer')) {
        return video.key;
      }
    });

    markupModalYouTube(videoKey);
  } catch (error) {
    notifications.failedRequest();
  }
}

//  рендер модального вікна
function markupModalYouTube(videoKey) {
  refs.youTubeVideo.insertAdjacentHTML('beforeend', youTubeCard(videoKey));
  refs.youTubeVideo.classList.remove('visually-hidden');
  refs.youTubeVideo.classList.add('active');
  refs.youTubeVideo.addEventListener('click', backdrop);
  dynamicRefs().btnCloseModalYouTube.addEventListener('click', closeVideo);
}
// ---------------

function backdrop(e) {
  removeYouTube();
}

// закриття модалки по кнопці
function closeVideo() {
  removeYouTube();
}
// --------------

export default function removeYouTube() {
  refs.youTubeVideo.innerHTML = '';
  refs.youTubeVideo.classList.add('visually-hidden');
  refs.youTubeVideo.classList.remove('active');
}
