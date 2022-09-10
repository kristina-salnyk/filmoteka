import { REQUEST_TYPES } from './constants';

export default class MovieConfigs {
  constructor() {
    this.queryType = REQUEST_TYPES.TRENDING;
    this.genres = [];
    this.searchQuery = '';
    this.page = 1;
    this.mediaType = 'movie';
    this.timeWindow = 'day';
    this.includeAdult = false;
  }

  getGenreById(id) {
    const genre = this.genres.find(item => item.id === id);
    return genre.name;
  }

  incrementPage() {
    this.page += 1;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  setSearchQuery(newSearchQuery) {
    this.searchQuery = newSearchQuery;
    this.resetPage();
  }
}
