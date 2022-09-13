import { Notify } from 'notiflix';

Notify.init({
  width: '400px',
  position: 'right-top',
  distance: '10px',
  timeout: 3000,
});

export default {
  failedRequest() {
    Notify.failure('Failed to get data, please try again later.');
  },

  notFoundResults() {
    Notify.failure(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  },

  repeatedRequest() {
    Notify.info('Search results are already displayed.');
  },

  noVideoYouTube() {
    Notify.info('Sorry, no official trailer for this movie');
  },

  showCustomMessage(message) {
    Notify.info(message);
  },

  showCustomSuccessMessage(message) {
    Notify.success(message);
  },

  showCustomFailedMessage(message) {
    Notify.failure(message);
  },
};
