const save = (key, value) => {
  const serializedState = JSON.stringify(value);
  localStorage.setItem(key, serializedState);
};

const load = key => {
  const serializedState = localStorage.getItem(key);
  return serializedState === null ? undefined : JSON.parse(serializedState);
};

const remove = key => {
  localStorage.removeItem(key);
};

export default {
  save,
  load,
  remove,
};
