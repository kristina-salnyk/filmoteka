import refs from './refs';

export const searchFormSubmitHandler = event => {
  event.preventDefault();

  refs.searchError.style.display = 'none';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    refs.searchError.style.display = 'block';
    return;
  }
};
