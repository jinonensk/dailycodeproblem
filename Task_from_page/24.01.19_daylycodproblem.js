// There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
// Given N, write a function that returns the number of unique ways you can climb the staircase.
// The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:
// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example,
// if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

let steps = 6;

let func = (n) => {
  if (n <= 1) {
    return 1;
  };
  return func(n - 1) + func(n - 2);
};

console.log(func(steps));



let steps2 = 6;
let arr = [1, 2, 5];

let func2 = (n, m) => {
  
  if (n <= 1) {
    return 1;
  };
  
  for (let item of m) {
    // let sum;
    // return sum += func2(n - item);
    console.log(item);
    // console.log(sum);
  };
};

console.log(func2(steps2, arr));

// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// };