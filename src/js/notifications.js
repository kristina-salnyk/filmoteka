import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  position: 'right-top',
  distance: '10px',
  timeout: 2000,
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
    Notify.info('sorry no official trailer');
  },

  showCustomMessage(message) {
    Notify.info(message);
  },
};
