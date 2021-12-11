const {multiplyPersistRequest} = require("../src/modules/multiply-persist-request/index");

test("Testando o módulo de múltiplas requisições persistente", () => {
  return multiplyPersistRequest([
    "http://challenge.dienekes.com.br/api/numbers?page=1",
    "http://challenge.dienekes.com.br/api/numbers?page=2",
    "http://challenge.dienekes.com.br/api/numbers?page=3",
  ])
    .then((response) => {
      expect(response.data);
    })
    .catch((e) => expect(e).toMatch("error"));
});
