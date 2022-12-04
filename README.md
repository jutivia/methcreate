# MetaCreate

<p align="justify">
An online video sharing, live streaming and social media platform
</p>

![Metacreate (1)](https://user-images.githubusercontent.com/76119744/205514424-31bc505b-d944-4800-943c-9fa4a5141763.png)

## Technologies

> | <b><u>Stack</u></b> | <b><u>Usage</u></b>                                  |
> | :------------------ | :--------------------------------------------------- |
> | **`Solidity`**      | Smart contract                                       |
> | **`ipfs`**          | database                                             |
> | **`chainlink`**     | price feed                                           |
> | **`the graph`**     | query data                                           |
> | **`Next JS`**       | Frontend                                             |
> | **` TailwiNd`**     | CSS framework for faster and easier web development. |

#

### Run the DApp Locally

#### clone repository

```
git clone https://github.com/jutivia/methcreate
```

#### Install dependencies

```
yarn install
```

#### Compile smart contract

```
yarn compile
```

#### Update .env

Make an env file from [.env.example](packages/hardhat/.env.example)
and update the following variables

```
# Rpc urls
POLYGON_MUMBAI_RPC="https://zzzzzzzzzzzzzzzzzzzz"
POLYGON_MAINNET_RPC=https://zzzzzzzzzzzzzzzzzzzz"
PRIVATE_KEY="zzzzzzzzzzzzzzzzzzz"

# Block explorer API keys
POLYGONSCAN_API_KEY="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"

# Network - polygon-mumbai or polygon-mainnnet
DEFAULT_NETWORK="polygon-mumbai"
```

#### Test smart contract

```
yarn fork <RPC_URL>
yarn test
```

#### Test coverage

```
yarn fork <RPC_URL>
yarn coverage
```

#### Deploy and verify smart contract

```
yarn deploy
```

#### Start DApp

```
yarn start
```

> ###### README Created by `Enebeli Emmanuel` for methcreate
