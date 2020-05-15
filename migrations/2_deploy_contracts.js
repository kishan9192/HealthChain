var HealthCare = artifacts.require("./HealthCare1.sol");

module.exports = function(deployer) {
  deployer.deploy(HealthCare);
};
