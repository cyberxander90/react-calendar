export const range = (n, startOn = 0) => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    if (i >= startOn) {
      result.push(i);
    }
  }
  return result;
};

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
