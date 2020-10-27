
function askFoo() {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run(generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;
    return result.value.then((value) => {
      return go(it.next(value));
    }, (error) => {
      return go(it.throw(error));
    })
  }

  go(it.next());
}

run(function* () {
  try {
    const foo = yield askFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
});
