import {A} from "./libs";

let env = require('dotenv').config()

let amount = Number(process.argv[2]) || 1
console.log({amount})

let a = new A(env.parsed.PRIVATE_KEY)
a.buyGrimace(amount).then()