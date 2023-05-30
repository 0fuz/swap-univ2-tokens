Example of making swaps without available gui.

CAREFUL: not slippage-bot protected, so try on own risk in popular blockchains.

Steps to use:
- make sure nodejs installed, then:
```bash
npm i
cp .env-example .env
# write wallet private key to .env
```
```bash
# buy any grimace for 100 wdoge
npx ts-node buy.ts 100
```
```bash
# sell 5 grimace for X wdoge
npx ts-node sell.ts 5
```

---
### Dont forget to give approve to spend kibbleswap router your tokens:
kibbleswap router: 0x6258c967337D3faF0C2ba3ADAe5656bA95419d5f
approve wdoge to be spent by router:
- https://explorer.dogechain.dog/token/0x2f90907fD1DC1B7a484b6f31Ddf012328c2baB28/write-contract
- connect wallet
- section `1. approve`, spender = 0x6258c967337D3faF0C2ba3ADAe5656bA95419d5f , amount = 100000000000000000000000000

---
Any proof-checks can be started from this https://dexscreener.com/dogechain/0x1aad352a2190b399bb3cfd4d5e4b0bf6efa33c0e