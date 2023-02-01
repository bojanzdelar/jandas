const _logError = (fn, returnValue = []) => {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.log(err);
      return returnValue;
    }
  };
};

export default _logError;
