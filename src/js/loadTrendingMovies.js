import { movieService } from '../index';
import { renderMoviesData } from './renderMoviesData';

export async function loadTrendingMovies() {
  const data = await movieService.fetchTrendingMovies();
  renderMoviesData(data);
}
