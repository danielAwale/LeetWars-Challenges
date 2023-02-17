function findEvenIndex(arr) {
  // this function will take an array and break it where the SUM of the arrays will be Equal1

  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = arr.slice(i + 1, n).reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
  //final answer will be a NUMBAH! which is the index!!
}
