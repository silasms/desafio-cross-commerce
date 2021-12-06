const axios = require("axios");
const sort = require("../../modules/sort/index");
const promiseAll = require("../../modules/promise-all/index.js");

const objNumber = {};
objNumber.numbers = [];
let starting;

const requestMultiple = async (numInitial = 0, iterations = 5) => {
  if (iterations > 1000) {
    iterations = 1000;
  }
  if (!numInitial) {
    numInitial = 0;
  }
  if (!iterations) {
    iterations = 5;
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
    const responses = await promiseAll(
      links.map((value) => {
        return axios.get(value);
      })
    );

    if (responses.length < links.length) {
      for (const element of responses) {
        links.splice(links.indexOf(element.config.url), 1);
      }
      console.log(links);
      const responsesAgain = await promiseAll(
        links.map((value) => {
          return axios.get(value);
        })
      );
      responses.push(...responsesAgain);
    }
    for (const element of responses) {
      objNumber.numbers.push(...element.data.numbers);
      if (!element.data.numbers) {
        break;
      }
    }
    const futureRequest = await axios.get(
      `http://challenge.dienekes.com.br/api/numbers?page=${acc + 1}`
    );
    if (!futureRequest.data.numbers[0]) {
      objNumber.numbers = sort(objNumber.numbers);
      return;
    }
  } catch (err) {
    throw new Error(err.message);
  }
  await requestMultiple(acc, iterations);
};

module.exports = { objNumber, requestMultiple, starting };
