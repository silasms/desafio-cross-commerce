const persistRequest = require("../src/modules/persist-request/index");

test("Testando o módulo insistente de requisição", () => {
  return persistRequest("http://challenge.dienekes.com.br/api/numbers?page=1")
    .then((response) => expect(response.data))
    .catch((e) => expect(e).toMatch("error"));
});
