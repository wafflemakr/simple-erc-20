const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
  it("Token details correct", () => {
    return MyToken.deployed().then(async instance => {
      let app = instance;

      name = await app.name();
      assert.equal(name, "Gold Token", "incorrect name");

      symbol = await app.symbol();
      assert.equal(symbol, "GOLD", "incorrect symbol");

      decimals = await app.decimals();
      assert.equal(decimals.toNumber(), 18, "incorrect decimals");

      supply = await app.totalSupply();
      supply = web3.utils.fromWei(supply.toString(), "ether"); // This only works if decimals are 18 (wei)
      assert.equal(supply, "21000000", "incorrect supply");
    });
  });
});
