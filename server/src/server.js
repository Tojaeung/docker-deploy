const keys = require("../keys");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { Pool } = require("pg");
const pgClient = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.send("HI");
});

app.get("/api/value/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");
  res.send(values);
});

app.post("/api/values", async (req, res) => {
  if (!req.body.value) return res.send({ working: false });
  pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);
  res.send({ working: true });
});

app.listen(5000, (err) => {
  console.log("5000포트 가동");
});
