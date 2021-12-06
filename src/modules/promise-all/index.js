const async = require("async");
const persistRequest = require("../persist-request/index");

const promiseAll = (promises) => {
  return new Promise((resolve) => {
    const parallelCalls = promises.map((promise) => {
      return (done) => {
        promise
          .then((result) => {
            return done(null, result);
          })
          .catch((error) => {
            persistRequest(error.config.url).then((response) => {
              done(null, response);
            });
          });
      };
    });
    async.parallel(parallelCalls, (_, results) => {
      resolve(results.filter((result) => result));
    });
  });
};

module.exports = promiseAll;
