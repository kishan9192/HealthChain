var Migrations = artifacts.require("./HealthCare1.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
