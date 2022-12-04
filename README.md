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

### Open new terminal window and clone this repository

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
