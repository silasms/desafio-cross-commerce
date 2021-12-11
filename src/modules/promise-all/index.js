const asyncLib = require("async");

const promiseAll = (promises) => {
  return new Promise((resolve) => {
    const parallelCalls = promises.map((promise) => {
      return (done) => {
        promise
          .then((result) => {
            return done(null, result);
          })
          .catch((error) => {
            done()
          });
      };
    });
    asyncLib.parallel(parallelCalls, (_, results) => {
      resolve(results.filter((result) => result));
    });
  });
};

module.exports = promiseAll;
