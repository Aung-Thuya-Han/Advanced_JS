const counterApp = (function () {
// This variable is private. Only the two functions below can access it.
  let counter = 1;

  function increment() {
    counter += 1;
    return counter;
  }

  function reset() {
    counter = 0;
    return counter;
  }

  // Only these two functions are made available outside the IIFE.
  // But the variable is still inside IIFE.

  return {
    increment,
    reset,
  };
})();

console.log(counterApp.increment());
console.log(counterApp.increment());
console.log(counterApp.reset());
console.log(counterApp.increment());
console.log(counterApp.counter);
// undefined: because that variable is only accessable within IIFE.