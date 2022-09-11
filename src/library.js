import MovieConfigs from './js/MovieConfigs';
import libraryPageUi from './js/ui/library-page-ui';
import notifications from './js/notifications';
import { fetchGenresList } from './js/api/movie-api/fetchGenresList';

export const libraryMovieConfigs = new MovieConfigs();

initLibraryPage().catch(error => {
  notifications.failedRequest();
});

async function initLibraryPage() {
  libraryPageUi.setLibraryEventListeners();

  try {
    const genresData = await fetchGenresList();
    const { genres } = genresData;
    libraryMovieConfigs.genres = genres;
  } catch (error) {
    notifications.failedRequest();
  }
}
