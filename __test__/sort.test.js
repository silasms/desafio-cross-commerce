const sort = require("../src/modules/sort/index");

describe("Testando o módulo de ordenação", () => {
  it("Verificando se o array ordenado é igual", () => {
    const arr = [10, 5, 2, 6, 3, 5, 1, 4];
    expect(sort(arr)).toStrictEqual([1, 2, 3, 4, 5, 5, 6, 10]);
  });
});
