export const setLocalStorage = (key, itemToSet) => {
  localStorage.setItem(key, JSON.stringify(itemToSet));
};

export const getLocalStorage = (key) => {
  const itemStored = localStorage.getItem(key);
  return JSON.parse(itemStored);
};

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);
};
