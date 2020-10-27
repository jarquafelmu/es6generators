const fs = require('fs');

function run(generator) {
  // improve `run` above
  const it = generator(go);

  function go(err, result) {
    if (err) return it.throw(err);
    it.next(result);
  }

  go();
}

// entry point
run(function* (done) {
  // catch exception
  let firstFile;
  try {
    let dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});
