/* 
    useLocalStorage is a custom hook that allows you to interact with the local storage of the browser. 
    It takes a key as an argument and returns three functions:
    - setItem: saves a value in the local storage
    - getItem: retrieves a value from the local storage
    - deleteItem: deletes a value from the local storage
    The value is always stored as a string, so you need to use JSON.stringify and JSON.parse to store and retrieve objects.
    If an error occurs, the function will log the error to the console.

*/

type UseLocalStorage = [
  setItem: (value: string) => void,
  getItem: () => string | undefined,
  deleteItem: () => void
];

export const useLocalStorage = (key: string): UseLocalStorage => {
  const setItem = (value: string) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  return [setItem, getItem, deleteItem];
};
