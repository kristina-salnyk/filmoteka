class SiteConfigs {
  constructor() {
    this.genres = [];
    this.searchQuery = '';
    this.watchedPage = 1;
    this.queuePage = 1;
    this.page = 1;
    this.mediaType = 'movie';
    this.timeWindow = 'day';
    this.includeAdult = false;
  }

  getGenreById(id) {
    const genre = this.genres.find(item => item.id === id);
    return genre.name;
  }

  incrementWatchedPage() {
    this.watchedPage += 1;
  }
  incrementQueuePage() {
    this.queuePage += 1;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementWatchedPage() {
    this.watchedPage -= 1;
  }
  decrementQueuePage() {
    this.queuePage -= 1;
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

export const siteConfigs = new SiteConfigs();
