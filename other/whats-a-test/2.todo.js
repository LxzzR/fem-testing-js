// writing an assertion library
/*

Now let's implement our own assertion library.
Create a function called `expect` that accepts an "actual"
and returns an object of assertions.

Tip: I want to be able to use it like so:

> expect(actual).toBe(expected)

Then run this code with `node 2.todo`

> Make sure you're in the right directory!

 */

const {sum, subtract} = require('./math');

const expect = (actual) => {
  return {
    toBe: (expected) => {
      if (expected !== actual) {
        throw new Error('You smell like rotten milk');
      }
    },
  };
};

expect(sum(5, 5)).toBe(10);

expect(subtract(10, 8)).toBe(2);
