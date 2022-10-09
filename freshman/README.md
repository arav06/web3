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