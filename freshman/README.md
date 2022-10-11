# Web 3.0 Freshman

# Intro to Programming

## Introduction

To build Web3 apps we still need some knowledge of Web2

If you build a smart contract, you need to give users a way to interact with it which can only be done via Web 2 technology

## Frontend

The part of your app via which the user can interact with the app

These are client side and thus the code runs on the user's computer

For websites, its built with HTML, CSS and JS

It is the visual representation of data

## Backend

The part of your app which processes user's input and allows it to operate

These are server side and thus the code runs on the server and cannot be viewed by the user

It can interact with the server unlike frontend technologies. For example, an API (Software that allows communication between 2 different apps) can be used fetch user data stored in the database (Collection of organized data which can be easily accessed and managed)

The frontend technologies make an HTTP request to the backend server to retrieve data/store data/perform a task

Backend languages include Python, Java, Ruby, etc.

# What is a blockchain?

A blockchain is a secure, distributed, public, decentralized and non-editable database that is shared between multiple nodes in a network

Decentralization refers to the practice of not having 1 central authority to approve/reject your request

It is impossible to hack

Multiple transactions are stored in blocks. These blocks are chained (connected) together to form a blockchain

The term was popularized by a person/group going by the name of Satoshi Nakamoto

He released the whitepaper for Bitcoin in 2009

Bitcoin is a secure cryptocurrency network to transfer the BTC asset between users without a centralized users

![State MGMT](https://i.imgur.com/VQySjQu.png)

All blockchains start off with a genesis state. It refers to the initial state of the blockchain

The state constantly changes when transactions are made and blocks are added

For Bitcoin, the genesis state was in 2009 and for Ethereum in 2015

Millions of transactions are made and so multiple transactions get grouped into 1 block

Blocks are chained together via hashing

Current state of the network can be calculated by starting from the genesis block (block at the genesis state) and transitioning the state according to each block's data as of now

All your cryptocurrency assets are stored in a the nodes of the blockchain. You can access your assets at any time as long as you are authenticated

Networks are managed by a group of peer-to-peer (P2P) distributed nodes

Each nodes keeps a copy of the global transaction ledger. This is a history of all the transactions made on the blockchain

Each node have a special software installed to interact with the blockchain. Since it has this software and the ledger, it can therefore verify transactions 

Miners are a type of node that perform mining

Mining is the process of verifying multiple transactions,  grouping them together into 1 block and requesting the block to be added into the blockchain

Mining is a hard task to perform and must be done securely. Miners who perform mining successfully receive a reward in the form of a token

Blockchains confirm that each unit is transferred only once

Since the blockchain stores the ledger in multiple nodes, it is decentralized. The advantages of decentralization are

- Chances of data breaches are reduced
- No censorship
- Greater reliance and no downtime

Decentralization is used in

- Cryptocurrency
- Smart Contracts
- Decentralized Finance
- Data Privacy
- Gaming
- Counterfeiting Protection
- Supply Chain Tracking

A change in the rules of a blockchain leads to a split in the blockchain into 2 different branches. This is called a split

# What is Web3?

The web aka the world wide web refers to the collection of websites which can be accessed via the internet

## Web 1

First phase of the web which took place between the 1980s and 2000s

In this phase, users could simply read information provided by websites

It made the web static

The web browsers used during this time were Internet Explorer and Netscape

## Web2

Current version of the web which most of know

Web1 was read-only while Web2 is read-write

This means that users can read information from websites as well as submit information to the websites

Lets users to consume data, interact with the website and create content 

It made the web dynamic

Web2 led to an explosion in the use of smartphones and mobile apps

Web2 led to the control of the web by leading digital companies. It led to centralization

Centralization leads to the control of your acts by 1 central authority. For example, Apple takes 30% of cut on paid-app downloads and Twitter can remove the President from their platform

It leads to less security, privacy and control

It also leads to higher chances of data breaches

## Web3

Web3 is the future of the web

It is the decentralized and open web which is governed by multiple people and no central authority

Instead of apps being the owner of your data, you are the sole owner of your data

You can read data from apps, submit data to apps while still being the owner of your data

It is for the benefit of the people rather than organizations

Web3 makes the web decentralized, open, distributed, permissionless, trustless and secure

Users dont require permission to be a part of Web3

No central authority is allowed to govern actions taking place in this version of the web

It is open-source

It is trustless as users can interact publicly/privately without intervention of a third party

It is permissionless as users do not require permission from a central authority to join

## Summary

Web1 - Read

Web2 - Read and Write

Web3  - Read, Write and Own

# What is Ethereum?

Ethereum is another type of blockchain which supports transactions and smart contracts

Unlike Bitcoin, Ethereum is more general purpose

Developers can build decentralized applications (dApps) which can be executed on the Ethereum Virtual Machine and thus interact with the Ethereum network

Global state of Ethereum contains the balance of each account as well as the state of the dApps

dApps are built using Solidity (Ethereum's programming language)

Smart contracts are also written in this language and deployed to the network

The nodes on a network come to a consensus (agreement) via a consensus algorithm

Bitcoin uses the proof of work algorithm and Ethereum moved over to proof of stake (from proof of work) during the serenity patch (the merge)

- Proof of work -> Miners solve complex problems and the first miner to solve it will add the block to the blockchain and get a reward. Uses more computing power and hence more electricity. Greater computing power = Greater chances of reward

- Proof of stake -> There are validators to verify a transaction instead of miners. A validator is randomly selected to verify a set of transactions and add it to a block and it to the blockchain. To become a validator, one must make a security deposit known as stake. Greater security deposit = Greater chance of being a validator

It was built by Vitalik Buterin and the Ethereum Foundation oversees the open source development

Ethereum has a token called Ether (ETH) which is used to make transactions

Smart Contracts are pieces of code which are replicated and run on all nodes of the network and are automatically executed when a condition is true

Ethereum allows for deploying of apps while still ensuring security and decentralization

People can also create their own tokens on Ethereum without anyone's permission. There are standards to be followed when creating tokens

The ERC20 standard is to be followed when creating and deploying a token to the network

ERC721 and ERC1155 are standards to be followed when creating and deploying NFTs to the network. Helps NFT  marketplaces be compatible with all types of NFTs

These standards allow digital wallets to easily support all tokens without specific code for each

When comparing it with Bitcoin, Ethereum has a faster block time and smaller block size

Block time refers to the time taken by miners to verify a transaction and add the block to the blockchain

Block size is the amount of space taken by each block on the blockchain

# Setting up a crypto wallet

An address is a string generated by hashing your public key

It is a unique identifier that represents your account on the blockchain

It can be shared with others so that you can receive transactions

They typically start with `0x` since they are in hex format

Private keys is the cryptographic key from which the address is derived

It should not be shared with anyone

It is like a password to prove you are the owner of an address. It is used to digitally sign transactions to make payments/deploy smart contracts

Address = Username AND Private Key = Password

If you lose your private key, you lose access to your account

When developing a smart contract, we should always use the private key of a test account

A seed phrase is like the master password to access your crypto wallet

Your wallet is like a password manager which lets you manage multiple accounts. Each account has its own unique private key

To access all the accounts, we use the master password aka the seed phrase

Upon creating your wallet, you are given a seed phrase to back up. All accounts created via this wallet will be linked to the seed phrase

A seed phrase always generates the same set of unique accounts, unique addresses, unique private keys

If you have created 5 accounts then a seed phrase is linked to those 5. If you want to switch to a new wallet, you can simply import the 5 accounts using 1 seed phrase instead of individually importing them

It is a long string of words

Crypto wallets are apps to create and manage multiple accounts and their private keys

They let you make payments and interact with dApps by connecting your wallet to them. This accounts like a single sign on feature for the blockchain

The most popular wallet for Ethereum is Metamask

# Introduction to Remix

Remix is an open source and web-based IDE to develop and deploy Ethereum smart contracts

It lets you write smart contracts in Solidity and Javascript code as well as test, debug and deploy them

![Remix](https://i.imgur.com/4RqBi40.png)

Left sidebar contains file explorer, compiler, deployer and extensions menu

The bottom has the output section to show results of compilation, deployment and function calls

The middle is for code editing

The `contracts` folder contains the Solidity smart contracts

Using the Solidity Compiler, we can choose the version of the compiler and compile the code. This converts it to bytecode and runs it and makes it ready to be deployed

When deploying our smart contract, Remix gives us various options to use as the virtual machine

- Remix VM -> Simulation of the EVM. Remix will create fake accounts with 100 ETH during this. Thus 100 ETH is not for the test network. As long as the contract does interact with other contracts on the real network, the Remix VM allows for fast testing and debugging

- Hardhat/Ganache/Foundry Provider -> We can also connect it to our local tools such as Hardhat, Foundry and Ganache

- Injected Provider -> It can also be connected to wallets such as Metamask via the Injected Provider and interact with the real network

- External HTTP Provider -> We can also set the VM to a remote one 

- L2 Optimism/Arbitrum One Provider -> It can also be connected to wallets such as Metamask and interact with the Optimism/Arbitrum One network

Once the contract is deployed, we can send data to it/retrieve data from it via the panel below

It also lets you interact with contracts which you did not deploy but others have

# Solidity

Solidity is an objected oriented, high level programming language to build dApps and smart contracts

All code written in solidity can be executed on the EVM

It is statically typed and supports libraries and complex data types

All solidity statements must end with `;`

We can initialize our contract as follows

```sol
pragma ^0.8.10 // Defining the Solidity compiler version. In this case, this code can be run on all compilers above version 0.8.10

contract myContract{ // Creating the contract named myContract

// Solidity Code

}
```

Solidity supports 3 types of variables

- Local -> Declared inside a function and not stored on blockchain
- State -> Declared outside a function and their values are stored on blockchain
- Global -> Store information about the blockchain and it supplied by EVM during runtime. Can store sender, receiver, timestamp, block hash, etc. Have special names

Examples of global variables are 

- `msg.sender` -> Address of the account which sent the transaction
- `block.coinbase` -> Address of the miner of the current block

Scope is defined by where it is declared and not the value

Solidity supports data types that are as follows

- uint -> Unsigned integers. Will always be positive. Default value is `0`
- int -> Signed integers. Default value is `0`
- address -> Store a wallet address. Default value is `0x0000000000000000000000000000000000000000`
- bool -> Boolean. Stores either true or false. Default value is `false`
- string

You can also declare the number of bits stored by an integer. This can be done via `int<bits>` or `uint<bits>`. Examples include `int8`, `uint16` and `uint256`

The minimum number bits an integer can store is 8 bits and maximum is 256 bits and they are always in variations of 8

The range of values will be from `0 to (2^<bits>) - 1`

The `public` keyword is prefixed to a function/variable if we want to call the function/access the variable from within the contract as well from another contract/javascript code. Public functions are listed in the ABI

The `private` keyword is prefixed to a function/variable when we want to access the variable/call the function from only within the function. These functions are not include in the ABI

The `view` keyword is used in a function when it does not change the value of any state/global variable. These functions do not require gas and do not change the state of the contract (state variables)

Changing the state of the contract refers to changing the value of a state variable

Functions can be created as follows

```sol
function name() public {
	// Non-return function which does not accept parameter
} 

function name(int x) public {
	// Non-return function which accepts parameter
} 

function name() public returns(bool){
	// Function which does not accept parameters and returns a value
}

function name(uint x, int y) public returns(bool){
	// Function which accepts parameters and returns a value
}

function name() public view returns(bool){
	// Function which does not change state of global variables
}
```

Solidity supports arrays as follows

```sol
uint[] arr; // Null array

uint[] arr2 = [1,2,3]; // Static array

uint[5] arr3; // Fixed size

uint arr4[] = new uint[](5); // Dynamic arrays whose memory is allocated during runtime

arr[2] = 10; // Accessing element
```

Arrays also have certain functions

```sol
arr.length; // Get array length

arr.push() // Increase array length by 1

arr.pop() // Decrease array length by 1
```

When returning an array (For example, a uint one) from a function, the return would be as follows `function arrReturn() public returns (uint[] memory)`

You can also create strings as follows

```sol
string strName = "my secret data";
```

Strings support escape sequences such as `\n`, `\'`, `\"`, `\t`, `\f`, etc.

When returning a string from a function, the return would be as follows `function arrReturn() public returns (string memory)`

We use the `memory` keyword when returning strings/arrays since they are of not a fixed length and to hence store data in the heap

Other data types of fixed length such as uint and bool are stored in the stack

Storing in the stack is faster since the variables are of fixed length

If we prefix a variable with the `memory` keyword, it will not store the value on the blockchain but instead in a temporary location during function call and then remove it

These can be declared within functions

```sol
string memory memVar = "hello memory variable is being tested";
```

While we can also prefix it with the `storage` keyword to store it on the blockchain and will be stored after function execution 

```sol
string storage storeVar = "hello storage variable is being tested";
```

ABI stands for Application Binary Interface and it denotes all the functions which can be called and variables which can be accessed by public entities. It represents the features of the contract in a compact way. Instructs how the external entities are to interact with the contract. Written in JSON

# Build your first dApp

Learned the following

- Read data from smart contract
- Write data to smart contract
- Deploy smart contract to Goerli Ethereum Testnet
- Interact with the smart contract via Ethers.js

The code can be found [here](https://github.com/arav06/web3/tree/main/freshman/first-dApp)

# Build your own cryptocurrency 

The `import` keyword can be used to load functions, objects and variables from another contract

```sol
import "ERC20.sol"
import "../ERC20.sol"
import "https://github.com/arav06/contracts/blob/main/ERC20.sol"
```

In this case, we import the `ERC20.sol` contract to create tokens that follow the ERC20 standard

The contract can now be referenced using the name of the contract defined in the `.sol` file

ERC stands for Ethereum Request for Comment and they are standards that convey requirements and specifications for various use cases

ERC20 is a standard which is to be followed when creating fungible tokens using smart contracts. Lets these tokens be compatible with all types of wallets

Fungible tokens are the types of tokens which are similar to each other and not unique. ETH is a fungible token and so trading 1 ETH for a different 1 ETH does not make a difference

When creating a contract, we can use the `is` keyword for inheritance to import the functions and members from another other contract which was imported

```sol
contract myContract is otherContract
{
	// Solidity Code
}
```

The `constructor` keyword can be used to create a function which would be called when the contract is deployed

```sol
constructor()
{
	// Solidity Code
}

constructor(string memory name, uint phone)
{
	// Solidity Code
}
```

The parameters of a constructor need to be submitted to the contract before deployment

If we want to run the constructor of another imported contract when running the constructor in our, we can do it as follows

```sol
constructor() ERC20(){
	// Solidity Code
} 
```

Here, since we imported the ERC20 contract which has a constructor, we can reference its constructor via `<contract name>()` i.e. `ERC20()`

Once the above code is deployed, the constructor would be called which would also called the constructor of the ERC20 contract

We can also pass parameters from our constructor to the constructor of the imported contract

```sol
constructor(string memory tName, string memory tSymbol) ERC20(tName, tSymbol){
	// Solidity Code
} 
```

The constructor for the ERC20 accepts 2 arguments: The name of our token and the symbol of our token

`_mint()` is an internal function of the ERC20 contract to send tokens which have the specified name and specified symbol

Internal functions can only be called from within that contract and not externally

This accepts 2 parameters: The address to which the tokens are to be sent and the number of tokens to send

When setting the number of tokens to be sent, it should always be in the form of `x * (10**18)` where x is the number of tokens

This is done because 1 Ether (Dollar) is 10^18 Wei (Cents). So the value of 1 ERC20 token is 10^18 'cents'

`msg.sender` is a global variable which stores the address of the account which made the transaction to deploy the contract

# Build your own NFT using ERC-721

ERC721 is the standard to be followed when creating non fungible tokens so that they are compatible with all wallets

Non Fungible Tokens are unique tokens wherein none of them are similar to each other

We will use HardHat, a framework to locally write, run, debug and deploy our smart contracts

HardHat and its toolbox can be installed as follows

```bash
npm install --save-dev hardhat
npm install @nomicfoundation/hardhat-toolbox
```

We can then setup our HardHat environment as follows

```bash
npx hardhat
```

In this case, we will be building a JavaScript project

The file structure is as follows

- contracts/ -> Solidity smart contracts
- test/ -> Testing of our contract
- scripts/ -> Automation scripts
- hardhat.config.js -> HardHat config file

We will also require the Open Zeppelin and they can be installed via this command

```bash
npm install @openzeppelin/contracts
```

```sol
pragma solidity ^0.8.9

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract myNFT is ERC721 {
    
    constructor (string memory nName, string memory nSymbol) ERC721(nName, nSymbol)
    {
        _mint(msg.sender,1);
    }
}
```

Here we are doing the following

- Importing the ERC721 contract to use the standard
- Inherting the functions and variables from the ERC721 contract into myNFT contract
- Creating a constructor which would accept the NFT's name and symbol
- The constructor would also pass these values to the constructor of the ERC721 contract
- It would finally send one of these NFTs to the account which deployed the smart contract

We can compile our contract via this command

```bash
npx hardhat compile
```

Now we can deploy our smart contract by writing JavaScript code in a file in the scripts folder

To do so we'll first need to import the `Ethers.js` library from HardHat as follows

```js
const { ethers } = require("hardhat");
```

Then we create a function to create and instance of the compiled contract and then deploy it

```js
async function deployNFT(){
  const smartContract = await ethers.getContractFactory("myNFT"); // Create an instance of the myNFT contract using Ethers
  const deployNFT = await smartContract.deploy("NFT Name","NFT Symbol"); // Deploying the contract. We are specifying the arguments for the constructor
  await deployNFT.deployed(); // Waiting for it to be deployed
  console.log(deployNFT.address); // Printing the address of the NFT
}
```

The function can now be called and we can check if it was successful/unsuccessful during `then` and `catch`

```js
deployNFT().then(
  () => {
    console.log("Deployment Successful!");
    process.exit(0)
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Now we will need to create an RPC node to connect to the blockchain and deploy the contract

We can do this via QuickNode. After signing up, click on `Create an Endpoint` and choose the blockchain and network and continue

For testing, we can disable `Token Based Authentication` in the `Security` Tab

This node acts as an intermediatery used by HardHat to deploy our smart contract 

We have to create a `.env` file containing the HTTP Provider URL and our private key

```env
HTTP_URL = "https://something-something1-something2.blockchain-network.discover.quiknode.pro"
PRIVATE = "MY PRIVATE KEY"
```

To access these environment variables, we will install the `dotenv` package

```bash
npm install dotenv	
```

Now replace the contents of `hardhat.config.js` with this 

```js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const quicknode = process.env.HTTP_URL; // Getting value from .env file
const privateKey = process.env.PRIVATE; // Getting value from .env file

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: quicknode,
      accounts: [privateKey],
    },
  },
};
```

Here, the Solidity compiler is set to `0.8.17` and in the networks, `goerli` is the identifier for the network who's node is defined

And now we can deploy the smart contract as follows

```bash
npx hardhat run scripts/deploy.js --network goerli
```

Here, `deploy.js` is the file containing the Javascript code to deploy our NFT and `goerli` refers to the network defined in `hardhat.config.js`

If you see `Deployment Successful`, it means that the NFT has been deployed to the network. Verify it by looking up the address on the Block Explorer for the network

***