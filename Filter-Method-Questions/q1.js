// Write a function that takes an array of strings and returns a new array that only contains strings that are less than 5 characters in length.

const fiveArr = (array) => {
  return array.filter((str) => {
    return str.length < 5;
  });
};

const strings = ["apple", "banana", "pear", "orange", "grape"];

console.log(fiveArr(strings));
