const MyFirstContract = artifacts.require("MyFirstContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyFirstContract", function (/* accounts */) {
  it("should assert true", async function () {
    await MyFirstContract.deployed();
    return assert.isTrue(true);
  });
});
