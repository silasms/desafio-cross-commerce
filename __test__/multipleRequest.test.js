const promiseAll = require("../src/modules/promise-all/index");
const axios = require("axios");

test("Testando o módulo de múltiplas requisições", () => {
  return promiseAll([
    axios.get("http://challenge.dienekes.com.br/api/numbers?page=1"),
    axios.get("http://challenge.dienekes.com.br/api/numbers?page=2"),
    axios.get("http://challenge.dienekes.com.br/api/numbers?page=3"),
  ])
    .then((response) => {
      expect(response.data);
    })
    .catch((e) => expect(e).toMatch("error"));
});
