function factorialize(num) {
  if (num === 0) {
    num = 1;
  } else {
    for (let i = num; i > 1; i--) {
      num = (i - 1) * num;
    }
  }
  return num;
}

console.log(factorialize(5));
