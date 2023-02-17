function solution(str) {
  let array = [];
  let newStr;

  if (str.length % 2 !== 0) {
    newStr = str + "_";
  } else {
    for (let i = 0; i < str.length; i++) {
      console.log(i);
    }
  }
}

console.log(solution("abcdef"));
