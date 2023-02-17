function getMiddle(s) {
  // we need to make the string into an array
  const sArr = s.split("");
  // lets find the length of the array
  //   return sArr.length
  let length1 = sArr.length / 2;
  let length2 = sArr.length / 2 - 1;
  let answer1 = sArr[length2];
  let answer2 = sArr[length1];

  // add a conditional
  if (sArr.length % 2 === 0) {
    return `${answer1}${answer2}`;
  } else {
    return sArr[Math.round(sArr.length - 1) / 2];
  }
}
