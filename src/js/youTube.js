import refs from './refs/refs';
import youTubeCard from '../templates/youTube-card.hbs';
import { dynamicRefs } from './refs/dynamicRefs';
import { fetchMovieVideo } from './api/movie-api/fetchMovieVideo';
import notifications from './notifications';
import { spinner } from './spinner';

const youTubeVideo = refs.youTubeVideo;

export async function httpsYouTubeVideo(event) {
  const movieId = event.target.dataset.id;

  try {
    spinner.spin(refs.homeGallery);
    const videoData = await fetchMovieVideo(movieId);
    spinner.stop();
    const videoKey = videoData['results'].find(video => {
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
  youTubeVideo.insertAdjacentHTML('beforeend', youTubeCard(videoKey));
  youTubeVideo.classList.remove('visually-hidden');
  youTubeVideo.classList.add('active');
  youTubeVideo.addEventListener('click', backdrop);
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
  youTubeVideo.innerHTML = '';
  youTubeVideo.classList.add('visually-hidden');
  youTubeVideo.classList.remove('active');
}
