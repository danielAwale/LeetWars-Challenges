/*
Write a function that takes an array of strings and 
returns a new array that only contains strings that 
start with the letter "a".
*/

const array = ["Ashely", "Amber", "Jake", "John", "Daniel", "Jacob", "Elvis"];

const newFunction = (array) => {
  return array.filter((str) => {
    return str.charAt(0) === "A";
  });
};

console.log(newFunction(array));
