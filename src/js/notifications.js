import { Notify } from 'notiflix';

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

  showCustomMessage(message) {
    Notify.info(message);
  },
};
