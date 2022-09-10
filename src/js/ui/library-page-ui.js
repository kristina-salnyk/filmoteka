import refs from '../refs/refs';
import { watchedTabClickHandler } from '../handlers/watchedTabClickHandler';
import { queueTabClickHandler } from '../handlers/queueTabClickHandler';

const setLibraryEventListeners = () => {
  refs.watchedTab.addEventListener('click', watchedTabClickHandler);
  refs.queueTab.addEventListener('click', queueTabClickHandler);
};

export default { setLibraryEventListeners };
