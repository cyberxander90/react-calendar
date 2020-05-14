export const range = (n) => Array.from({ length: n }, (v, k) => k);

export const debounce = (callback, ms) => {
  let timeOut;
  return (arg) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      callback(arg);
      timeOut = null;
    }, ms);
  };
};
