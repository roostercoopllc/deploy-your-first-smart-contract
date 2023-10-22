// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyFirstContract {
    uint bankAccount;

    constructor() public {
        bankAccount = 100;
    }

    function addFunds(uint addAmount) public returns (uint) {
        bankAccount += addAmount;
        return bankAccount;
    }

    function subtractFunds(uint subAmount) public returns (uint) {
        bankAccount -= subAmount;
        return bankAccount;
    }

    function getFunds() public view  returns(uint) {
        return bankAccount;
    }
}
