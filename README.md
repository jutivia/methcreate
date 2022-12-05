![MIT LICENSE](https://badgen.net//badge/license/MIT/green) ![TEST BADGE](https://img.shields.io/badge/Test%3F-PASSING-green.svg) ![COVERAGE BADGE](https://img.shields.io/badge/Coverage%3F-97.14-green.svg)

# MetaCreate ([Open](methcreate-client.vercel.app))

<p align="justify">
An online video sharing, live streaming and social media platform
</p>

![Metacreate (1)](https://user-images.githubusercontent.com/76119744/205514424-31bc505b-d944-4800-943c-9fa4a5141763.png)

## Quick Links

- [Smart Contract](https://mumbai.polygonscan.com/address/0x007fF1Fc2709f6eCedAB3021804f0C330c83eA72#code)
- [Design (Prototype)](https://www.figma.com/proto/Jndsu86Dt4QeefBEdPlI5z/UI-screens?node-id=168%3A16666&scaling=scale-down-width&page-id=1%3A4&starting-point-node-id=168%3A16666)
- [Design (Static)](https://www.figma.com/file/Jndsu86Dt4QeefBEdPlI5z/UI-screens?node-id=1%3A4&t=CQKrpaTwpeuRz6V6-3)
- [Video Demo](https://www.loom.com/share/fd1937f323ec447cab83191466aa75d7)
- [Frontend](https://methcreate-client.vercel.app/)
- [Api](https://video-api-08tf.onrender.com/)

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
