const MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  const _name = "Gold Token";
  const _symbol = "GOLD";
  const _decimals = 18;
  const _supply = 21000000;
  deployer.deploy(MyToken, _name, _symbol, _decimals, _supply);
};
