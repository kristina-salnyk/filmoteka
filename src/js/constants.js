export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '3db99de6ff3e5f2ef6de763ae547f586';

export const DEBOUNCE_DELAY = 300;
export const SEARCH_RESULTS_NUMBER = 5;

export const REQUEST_URL = {
  TRENDING: '/trending',
  SEARCH: '/search/movie',
  MOVIE: '/movie',
  GENRES: '/genre/movie/list',
  VIDEOS: '/videos',
};

export const FIRE_BASE_MESSAGES = {
  REGISTERED_USER: 'auth/email-already-in-use',
};

export const REQUEST_TYPES = {
  TRENDING: 'trending-movies',
  SEARCH: 'search-movie',
};

const WATCHED_MOVIES = 'watched-movies';
const QUEUE_MOVIES = 'queue-movies';
const LAST_FETCH = 'last_fetch';
const MODAL_MOVIE = 'modal_movie';

export const STORAGE_KEYS = {
  WATCHED_MOVIES,
  QUEUE_MOVIES,
  LAST_FETCH,
  MODAL_MOVIE,
};
