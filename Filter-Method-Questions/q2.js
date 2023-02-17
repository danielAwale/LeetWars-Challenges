/*
Write a function that takes an array of objects representing people, 
where each object has a name and age property, and returns a new array 
that only contains objects representing people who are over the age of 18.
*/

const overEighteen = (data) => {
  return data.filter((person) => {
    return person.age > 18;
  });
};

const data = [
  { name: "John", age: 19 },
  { name: "Johnathon", age: 21 },
  { name: "Joe", age: 36 },
];

console.log(overEighteen(data));
