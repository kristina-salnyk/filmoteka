import api from './api';

export default class MovieService {
  static Url = {
    TRENDING: '/trending',
    SEARCH: '/search/movie',
    MOVIE: '/movie',
  };

  #searchQuery;
  #page;
  #mediaType;
  #timeWindow;
  #includeAdult;

  constructor() {
    this.#searchQuery = '';
    this.#page = 1;
    this.#mediaType = 'movie';
    this.#timeWindow = 'day';
    this.#includeAdult = false;
  }

  async fetchTrendingMovies() {
    const config = {
      params: {
        page: this.#page,
      },
    };
    const url = `${MovieService.Url.TRENDING}/${this.#mediaType}/${
      this.#timeWindow
    }`;
    const response = await api.get(url, config);
    return response.data;
  }

  async fetchSearchedMovie() {
    const config = {
      params: {
        query: this.#searchQuery,
        page: this.#page,
        include_adult: this.#includeAdult,
      },
    };
    const url = MovieService.Url.SEARCH;
    const response = await api.get(url, config);
    return response.data;
  }

  async fetchMovie(id) {
    const url = `${MovieService.Url.MOVIE}/${id}`;
    const response = await api.get(url);
    return response.data;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  set searchQuery(newSearchQuery) {
    this.#searchQuery = newSearchQuery;
    this.resetPage();
  }

  get searchQuery() {
    return this.#searchQuery;
  }
}
