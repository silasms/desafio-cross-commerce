const axios = require("axios");
const sort = require("../../modules/sort/index");
const promiseAll = require("../../modules/promise-all/index.js");

const objNumber = {};
objNumber.numbers = [];

const requestMultiple = async (numInitial = 0, iterations = 5) => {
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
    acc = numInitial;
  }

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
      if (element.data.numbers[1]) {
        objNumber.numbers.push(...element.data.numbers);
      } else {
        objNumber.numbers = sort(objNumber.numbers);
        console.log("finalizado");
        console.log(objNumber.numbers.length);
        return;
      }
    }
  } catch (err) {
    throw new Error(err.message);
  }
  acc += iterations;
  console.log(`Faltam: ${acc} requests`);
  await requestMultiple(acc, iterations);
};

module.exports = { objNumber, requestMultiple };
