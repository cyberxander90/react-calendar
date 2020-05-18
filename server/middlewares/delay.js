function delay(timeout = 1000) {
  return (req, res, next) => setTimeout(next, timeout);
}

module.exports = delay;
