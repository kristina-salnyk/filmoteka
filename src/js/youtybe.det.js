import axios from 'axios';

export default class YoutybeApiServer {
  constructor() {
    this.valueInput = 0;
    this.language = 'en-US';
  }

  async fethApiServes() {
    const URL = `https://api.themoviedb.org/3/movie/`;
    const KEY = '3db99de6ff3e5f2ef6de763ae547f586';

    const resp = await axios.get(`${URL}${this.valueInput}/videos`, {
      params: {
        api_key: KEY,
        language: this.language,
      },
    });
    this.nextPage();
    return resp.data;
  }
  nextPage() {
    this.page += 1;
  }

  resetPege() {
    this.page = 1;
  }

  get query() {
    return this.valueInput;
  }
  set query(neQuery) {
    this.valueInput = neQuery;
  }
}
