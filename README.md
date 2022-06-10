<h1> Coffee Farm Supply Chain </h1>

(Project created for the Udacity Blockchain Nano Degree Assesment) <br>

This dApp follows the supply chain of a coffee farm through its life cycle. At each stage only the correct stakeholder can update the current state of the supplychain and transfer funds if needed. The smart contracts have 100% test coverage and they were then migrated to Rinkeby test net to simulate production.

<h2> Instructions to run code </h2>

> The code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24.

After this please clone this github repository using: <br>
``` git clone https://github.com/JackQ96/Web3_SupplyChain.git ```

Once the code has been cloned you need to enter the respective directory to where the code has been saved and run: <br>
``` npm install ```

After installation proceed to run Ganache in the terminal via: <br>
``` ganache-cli```

Then open a new terminal tab and compile the contracts with: <br>
```truffle compile```

Once compiled succesfully, migrate the contracts to the local server by running: <br>
``` truffle migrate ```

After this has completed you can then test the contracts by running: <br>
```truffle test```


Finally, to run the front end, you want to open a new terminal tab and enter: <br>
``` npm run dev```

<br>

<h2> Versions </h2>
Node v14.15.4 <br>
NPM v8.12.1 <br>
Truffle v4.1.14 (core: 4.1.14) <br>
Solidity v0.4.24 (solc-js) <br>
Web3.js v1.7.3 <br>

<h2> Rinkeby Test Net Launch </h2>

Hash: 0x765ee946bd03e02153493faae3a4eb48c31669c1ffce8da15cecb2d624569312 <br>
Contract: 0xa8b8e89085a164259550eea16236a4c77c0161a8 <br>
Url: https://rinkeby.etherscan.io/tx/0x765ee946bd03e02153493faae3a4eb48c31669c1ffce8da15cecb2d624569312

<h3> UML Diagrmas </h3>

[Click here to view UML Diagrams](UML)
