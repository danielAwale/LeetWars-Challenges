function solution(str) {
  let array = [];

  if (str.length % 2 !== 0) {
    str += "_";
  } else {
    for (let i = 0; i < str.length; i += 2) {
      array.push(str.substr(i, 2));
    }
  }

  return array;
}

console.log(solution("abcdef"));
