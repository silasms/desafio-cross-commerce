const axios = require("axios");
const sort = require("../../modules/sort/index");
const promiseAll = require("../../modules/promise-all/index.js");
const persistRequest = require("../../modules/persist-request/index");
const { multiplyPersistRequest } = require("../../modules/multiply-persist-request");

const objNumber = {};
objNumber.numbers = [];
let starting;

const requestMultiple = async (numInitial = 0, iterations = 1000) => {
  if (!numInitial) {
    numInitial = 0;
  }
  if (!iterations) {
    iterations = 1000;
  }
  let acc = 0;
  let links = [];
  iterations = parseInt(iterations);
  numInitial = parseInt(numInitial);
  for (let i = 1; i + numInitial <= iterations + numInitial; i++) {
    links.push(
      `http://challenge.dienekes.com.br/api/numbers?page=${i + numInitial}`
    );
  }
  acc = numInitial;
  acc += iterations;
  try {
    const responses = await multiplyPersistRequest(links)
    for (const element of responses) {
      objNumber.numbers.push(...element.data.numbers);
      if (!element.data.numbers) {
        break;
      }
    }
    const futureRequest = await persistRequest(
      `http://challenge.dienekes.com.br/api/numbers?page=${acc + 1}`
    );
    if (!futureRequest.data.numbers[0]) {
      console.log(objNumber.numbers.length)
      objNumber.numbers = sort(objNumber.numbers);
      return;
    }
    console.log(acc)
  } catch (err) {
  }
  await requestMultiple(acc, iterations);
};

module.exports = { objNumber, requestMultiple, starting };
