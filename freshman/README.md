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

Mining is the process of verifying multiple transactions,  grouping them together into 1 block and requesting the block to be added into the global transaction ledger

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

The nodes on the network come to a consensus (agreement) via proof of work. However, it will be moving over to proof of stake during the serenity patch

In proof of work, the miners solve complex problems and the first miner to solve it will add the block to the blockchain and get a reward

It was built by Vitalik Buterin and the Ethereum Foundation oversees the open source development

Ethereum has a token called Ether (ETH) which is used to make transactions

Smart Contracts are pieces of code which are replicated and run on all nodes of the network and are automatically executed when a condition is true

Ethereum allows for deploying of apps while still ensuring security and decentralization

People can also create their own tokens on Ethereum without anyone's permission. There are standards to be followed when creating tokens

The ERC20 standard is to be followed when creating and deploying a smart contract to the network

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