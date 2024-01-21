const express = require("express")
const bodyParser = require("body-parser")

export const app = express()

app.user(bodyParser({}));

interface Balances {
    [key: string]: number;
}

interface User {
    id: string,
    balance: Balances
}

interface Order {
    userID: string,
    price: number,
    quantity: number
}