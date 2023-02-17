function friend(friends) {
  // final result should be an array.

  return friends.reduce((accumulator, currentValue) => {
    if (currentValue.length === 4 && isNaN(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
