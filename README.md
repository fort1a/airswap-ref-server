# AirSwap Demo Maker

Reference RFQ and Last Look protocol server for AirSwap.

**Install packages**

```
$ yarn
```

**Quick start on Rinkeby**

Copy `.env.example` to `.env` and update values:

```
PRIVATE_KEY= …
CHAIN_ID=11155111
```

Then start the server (with both RFQ and streaming):

```
$ yarn dev
```

Now you can query the server from the AirSwap CLI:

```
$ yarn global add airswap
$ airswap chain
  → set to 11155111
$ airswap account:import (or account:generate)
$ airswap gas
  → set to 10
$ airswap token:approve
  → weth, dai
$ airswap stream:open
  → ws://localhost:3000
$ airswap rfq:get
  → http://localhost:3000
```

**Build and run for production**

```
$ yarn build
$ yarn start
```

Configure desired port, private key, infura api, chainid, expiry, and protocol fee.

MAKE SURE THAT PROTOCOL FEE IS THE SAME AS SWAPERC20.SOL CONTRACT - or it errors.

Airswap protocols are untouched, use the stock one.
Airswap CLI is untouched, use the stock one.

Forward the http server using ngrok, tcp is also available.


