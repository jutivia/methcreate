
# Polygon Hackfest submission 


> ## Overview

<p align="justify">
An online video sharing, live streaming and social media platform
</p>



#
### Constraints
- we could not make use of the zkevm with chainlink because chainlink has not extended their coverage there yet

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
- Private content can only be viewed by those that have bought or that have being given permission by the owner


> ## Technologies
>
> | <b><u>Stack</u></b> | <b><u>Usage</u></b> |
> | :------------------ | :------------------ |
> | **`Solidity`**      | Smart contract      |
> | **`ipfs`**          | database            |
> | **`chainlink`**     | price feed          |
> | **`the graph`**     | query data          |
> | **`Next JS`**       | Frontend            |
> | **` TailwiNd`**       | CSS framework for faster and easier web development.|




#
### Run the DApp Locally

### Open new terminal window and clone this repository
```
git clone https://github.com/jutivia/methcreate
```
#### Install dependencies
```
npm install
```
#### Compile smart contract
```
npx hardhat compile
```
#### Deploy smart contract 
```
npx hardhat run scripts/deploy.ts --network namhmii
```
#### Test smart contract
```
npx hardhat test test/bondAndStake.ts.
```
#### Navigate to the client
```
cd client
```
#### Install dependencies
```
yarn
```
#### Start DApp
```
yarn start
```
- Open metamask browser wallet and connect network.
```
#### Hardhat help commands
npx hardhat help

```

> ###### README Created by `Enebeli Emmanuel` for methcreate
