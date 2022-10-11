// SPDX-License-Identifier: MIT
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
