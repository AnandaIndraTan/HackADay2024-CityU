// backend/migrations/1_deploy_contract.js

const BiometricStorage = artifacts.require("BiometricStorage");

module.exports = function (deployer) {
  deployer.deploy(BiometricStorage);
};
