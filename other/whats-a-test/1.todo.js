// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;

let [result, expected] = [sum(4, 5), 9];

if (result !== 9) {
  throw Error(
    `The result of ${result} is not equal to the expected of ${expected}. YOU SUCK`,
  );
}

[result, expected] = [subtract(10, 2), 8];

if (result !== 8) {
  throw Error(
    `The result of ${result} is not equal to expected of ${expected}. IT NOT WORKS`,
  );
}
