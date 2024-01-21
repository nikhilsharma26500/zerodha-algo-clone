const express = require("express");
const bodyParser = require("body-parser");

export const app = express();

app.user(bodyParser({}));

interface Balances {
  [key: string]: number;
}

interface User {
  id: string;
  balance: Balances;
}

interface Order {
  userID: string;
  price: number;
  quantity: number;
}

export const TICKER = "GOOGLE";

const users: User[] = [
  {
    id: "1",
    balance: {
      GOOGLE: 10,
      USD: 50000,
    },
  },
  {
    id: "2",
    balance: {
      GOOGLE: 10,
      USD: 50000,
    },
  },
];

const bids: Order[] = [];
const asks: Order[] = [];
