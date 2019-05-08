const MyToken = artifacts.require("MyToken");

contract("MyToken", ([creator, randomAdd]) => {

  let name = "Gold Token";
  let symbol = "GOLD";
  let decimals = 10;
  let supply = 21000000;

  beforeEach(async () => {
    this.myToken = await MyToken.new(name, symbol, decimals, supply);
  });

  describe("Token::Deployment", () => {
    it("Correct Name", async () => {
      let x = await this.myToken.name();
      assert.equal(x, name, "incorrect name");
    })

    it("Correct Symbol", async () => {
      let x = await this.myToken.symbol();
      assert.equal(x, symbol, "incorrect symbol");
    })

    it("Correct Decimals", async () => {
      let x = await this.myToken.decimals();
      assert.equal(x.toNumber(), decimals, "incorrect decimals");
    })

    it("Correct Supply", async () => {
      let x = await this.myToken.totalSupply();
      let y = web3.utils.toBN(supply * (10 ** decimals))
      assert.equal(x.toString(), y.toString(), "incorrect supply");
    });
  });

  describe("Token::Balance", () => {
    it("Creator Balance should be total supply", async () => {
      let balance = await this.myToken.balanceOf(creator);
      let y = web3.utils.toBN(supply * (10 ** decimals))
      assert.equal(balance.toString(), y.toString(), "incorrect balance of creator")
    })

    it("Should get Balance 0 for random Address", async () => {
      let balance = await this.myToken.balanceOf(randomAdd);
      assert.equal(balance.toString(), 0, "incorrect balance, should be 0")
    })

    it("Transfer and get new Balance", async () => {
      await this.myToken.transfer(randomAdd, "1000000000000", { from: creator });
      let balance = await this.myToken.balanceOf(randomAdd);
      assert.equal(balance.toString(), "1000000000000", "incorrect balance of creator")
    })

  })

})
