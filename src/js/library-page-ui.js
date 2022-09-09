import refs from './refs';
import { watchedTabClickHandler } from './watchedTabClickHandler';
import { queueTabClickHandler } from './queueTabClickHandler';

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

export default { setLibraryEventListeners };
