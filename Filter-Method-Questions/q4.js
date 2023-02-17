/*
Write a function that takes an array of objects representing movies, 
where each object has a title, director, and year property, and 
returns a new array that only contains movies that were released before the year 2000.
*/

const movies = [
  {
    title: "Avengers",
    director: "Joss Wheedon",
    year: 2012,
  },
  {
    title: "Infinity War",
    director: "Russo Brothers",
    year: 2019,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];

const findMovies = (array) => {
  return array.filter((movie) => {
    return movie.year < 2000;
  });
};

console.log(findMovies(movies));
