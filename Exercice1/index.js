function pairNumbers(min, max) {
  let pairNumbers = [];

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      pairNumbers.push(i);
    }
  }
  return pairNumbers.join(",");
}

export default pairNumbers;
