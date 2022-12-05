![MIT LICENSE](https://badgen.net//badge/license/MIT/green) ![TEST BADGE](https://img.shields.io/badge/Test%3F-PASSING-green.svg) ![COVERAGE BADGE](https://img.shields.io/badge/Coverage%3F-97.14-green.svg)

# MetaCreate

<p align="justify">
An online video sharing, live streaming and social media platform
</p>

> live link

 [Metacreate](methcreate-client.vercel.app)
 

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

## Run the DApp Locally

### clone repository

```
git clone https://github.com/jutivia/methcreate
```

### Install dependencies

```
yarn install
```

### Compile smart contract

```
yarn compile
```

### Update .env

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

### Test smart contract

```
yarn fork <RPC_URL>
yarn test
```

### Test coverage

```
yarn fork <RPC_URL>
yarn coverage
```

### Deploy and verify smart contract

```
yarn deploy
```

### Start DApp

```
yarn dev
```

## How to Contribute

- [Coding Guidelines](CONTRIBUTIONS/CODING_GUIDELINES.md)
- [Commits](CONTRIBUTIONS/COMMITS.md)
- [Prs](CONTRIBUTIONS/PRs.md)
- [Structure](CONTRIBUTIONS/STRUCTURE.md)

## Credits

- [David Enebeli](https://github.com/havidtech)
- [Emmanuel Enebeli ](https://github.com/EnebeliEmmanuel)
- [KCPele](https://github.com/KcPele)
- [Jutiva](https://github.com/jutivia)
