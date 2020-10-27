function* factorial(n) {
  // let [index, curr] = [1, 1];
  // while (index <= n) {
  //   [index, curr] = [index + 1, curr * index];
  //   yield curr
  // }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    yield result;
  }
}

for (const n of factorial(5)) {
  console.log(n);
}
