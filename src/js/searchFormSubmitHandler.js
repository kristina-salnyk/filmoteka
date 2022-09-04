import refs from './refs';

export const searchFormSubmitHandler = event => {
  event.preventDefault();

  refs.searchErrorInfo.style.display = 'none';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    refs.searchErrorInfo.style.display = 'block';
    return;
  }
};
