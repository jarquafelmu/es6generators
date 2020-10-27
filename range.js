function* range(from, to, step = 1) {
  // range code goes here
  for (let current = from; current <= to; current += step)
    yield current;
}

for (let r of range(5, 10)) {
  console.log(r);
}
