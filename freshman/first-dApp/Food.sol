// SPDX-License-Identifier: MIT
// Deployed at 0x9bd21D01976609b7067AdBbe94Bc33577016268C on Celo Alfajores Testnet
pragma solidity ^0.8.10;
contract favFood {
    string food;
    function setFood(string memory newFood) public{
        food = newFood;  
    }
    function getFood() public view returns(string memory) {
        return food;
    }
}
