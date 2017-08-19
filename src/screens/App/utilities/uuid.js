const uuid = (function() {
  let counter = 0;

  return function innerUuid() {
    return counter;
  }
})();
export default uuid;
