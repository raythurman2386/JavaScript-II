// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello() {
  const say = function () {
    console.log(hello);
  }
  const hello = 'Hello, world!';
  return say;
}
const sayHelloClosure = sayHello();
sayHelloClosure();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  const newCounter = () => {
    counter++;
    return counter;
  }
  return newCounter;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  const increment = () => {
    let num = 0;
    while (num < 5) {
      num++;
      debugger;
    }
    const decrement = () => {
      while (num > 0) {
        num--;
        debugger;
      }

    }
    console.log(num);
    decrement();
  }
  // `decrement` should decrement the counter variable and return it.
  increment()
};

console.log(counterFactory());