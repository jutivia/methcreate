# methcreate content creation dapp

> ## Table of contents
- [Overview](#overview)
- [Project Features](#project-features)
- [Technologies](#technologies)
- [Repo Setup](#repo-setup)
- [Requirements](#requirements)
- [Setup the Project](#setup-the-project)
  - [Install Hardhat](#install-hardhat)
  - [Env Setup](#env-setup)
  - [Setup Hardhat.config](#setup-hardhatconfig)
- [Create the SmartContract](#create-the-smartcontract)
  - [Compile](#compile)
  - [Deploy](#deploy)
  - [Verify](#verify)
- [Setup the Frontend](#setup-the-frontend)
  - [Install Dependencies](#install-dependencies)
  - [Start Server](#start-server)
  - [Build the Frontend](#build-the-frontend)
- [Testing the Smartcontract](#testing-the-smartcontract)
  - [Coverage](#coverage)
  - [Test](#test)
- [Verified Contract Addresses](#verified-contract-addresses)
- [Live Link](#live-link)
- [Contributors](#contributors)
- [Contributing to the project](#contributing-to-the-project)
#
> ## Overview
<p align="justify">
An online video sharing, live streaming and social media platform
</p>

#
> ## Project Features
- Like 
- Share
- Subscribe
- Follow
- Vote for content
- Buying content
- Selling content
- Streaming content
- Live message
- Profile
- Private content can only be viewed by those that have bought or that have being given permission by the owne

</p>

#
> ## Technologies
| <b><u>Stack</u></b> | <b><u>Usage</u></b> |
| :------------------ | :------------------ |
| **`Solidity`**      | Smart contract      |
| **`ipfs`**          | database            |
| **`chainlink`**     | price feed          |
| **`the graph`**     | query data         |
| **`Next JS`**      | Frontend            |

#
> ## Repo Setup

<p align="justify">
To setup the repo, first fork the methcreate repo, then clone the forked repository to create a copy on the local machine.
</p>

    $ git clone https://github.com/EnebeliEmmanuel/methcreate.git

<p align="justify">
Change directory to the cloned repo and set the original Methcreate repository as the "upstream" and your forked repository as the "origin" using gitbash.
</p>

    $ git remote add upstream https://github.com/EnebeliEmmanuel/methcreate.git

#

> ## Requirements
#
- Hardhat
- Alchemy key
- Metamask key
- Etherscan.io API Url
- Node JS
#
> ## Setup the Project
**`*Note:`**

<p align="justify">
This project was setup on a windows 10 system using the gitbash terminal. Some of the commands used may not work with the VScode terminal, command prompt or powershell.
</p>

The steps involved are outlined below:-
#
> ### Install Hardhat
The first step involves cloning and installing hardhat.
```shell
$ cd Methcreate

$ npm i -D hardhat

$ npm install

$ npm install --save-dev "@nomiclabs/hardhat-waffle" "ethereum-waffle" "chai" "@nomiclabs/hardhat-ethers" "ethers" "web3" "@nomiclabs/hardhat-web3" "@nomiclabs/hardhat-etherscan" "@openzeppelin/contracts" "dotenv"

# If you encounter errors installing the dependencies above, delete the old package-lock.json and run the `npm install --save-dev` command again
```
> ### Env Setup
 Next create a `.env` file by using the sample.env. Retrieve your information from the relevant sites and input the information where needed in the `.env` file.

`To retrieve your metamask private key.`
- Open your account details by clicking on the three dots on the metamask extension on your chrome browser
- Click on export private key
- Verify your password
- Copy your private key and place it in the .env file

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1oDl0IbicD7LhNOcYUbGzBYTJdduWim1t" alt="metamask"/>
</p>

#
`To retrieve your alchemy key.`
- Login to your account on https://www.alchemy.com/
- Once youre redirected to your [dashboard](https://dashboard.alchemyapi.io/), click on create app.
- Fill in the relevant details especially the chain and network
- Once the app has been created, click on view key.
- Copy the HTTP and place it in the .env file.


<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1XFtACFN-LWvoDUD1QyJJY9uOc7KNkrL6" alt="alchemy"/>
</p>

#
`To retrieve your etherscan key.`
- Login to [etherscan](https://etherscan.io/) and hover over the dropdown arrow for your profile on the navbar.
- Click on API keys and add to create a new project (optional step).
- Once the project has been created, click on the copy button to copy the API key.
- Paste it in the .env file

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1Gq-hPuwjwb3TOCH2dqUA93VxfyrbUDN6" alt="etherscan key"/>
</p>

#
> ### Setup Hardhat.config


Below is the setup for the hardhat.config.json

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=1Wmc2o2DnF5K6Q5y0CTCjVUfUIoLVm2ei" alt="hardhat"/>
</p>

#
> ## Create the SmartContract
  - First write the Smartcontract codes within the contracts folder.
  - The next step involves the compilation, deployment and verification of the contract on the testnet.

> ### Compile
- To compile the smartcontract before deployment:
```
$ npx hardhat compile
```
#
> ### Deploy
- To deploy the smartcontract:
```
$ npx hardhat run scripts/deploy.js --network rinkeby
```
#
> ### Verify
- To verify the smartcontract:
```
$ npx hardhat verify 0x43f71fbd58e9600924f49a53c6fde787977c2b9d --network mumbai "0x33d57e4712e4c4dc6ff50e3319e1e79d7eabc937"
```

> ## Setup the Frontend
- First run the frontend on your local server to ensure it's fully functional before building for production.
#
> ### Install Dependencies
- Setup and install dependencies
his is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> ## Testing the Smartcontract

- Coverage is used to view the percentage of the code required by tests and unittests were implemented to ensure that the code functions as expected
#
> ### Coverage
- Install Solidity Coverage
```
  $ npm i solidity-coverage
```
- Add `require('solidity-coverage')` to hardhat.config.json

- Install Ganache
``` 
  $ npm i install ganache-cli
``` 
- Run coverage
```
$ npx hardhat coverage --network localhost
```
#
> ### Test

- To test the smartcontract, first open a terminal and run the following command:

``` 
$ npx hardhat node
```
- Leave the previous terminal running and open new terminal. 
- Run the command below:
```
$ npx hardhat test --network localhost
``` 
#


> ## Contributors

This Project was created by the members of Teammeta during the polygon bootcamp.

<p align="center" width="100%">
  <img src="https://drive.google.com/uc?export=view&id=10Ibk5J441crY7Dh4DVPVM5bwx0JenaRL" alt="teamresilient"/>
</p>

#
> ## Contributing to the project

If you find something worth contributing, please fork the repo, make a pull request and add valid and well-reasoned explanations about your changes or comments.

Before adding a pull request, please note:

- This is an open source project.
- Your contributions should be inviting and clear.
- Any additions should be relevant.
- New features should be easy to contribute to.

All **`suggestions`** are welcome!
#
> ###### README Created by `Enebeli Emmanuel` for methcreate
