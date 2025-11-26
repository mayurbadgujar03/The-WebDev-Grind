const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "database",
  database: process.env.DB_NAME || "postgres",
  password: process.env.DB_PASS || "password",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Hello from Express Backend");
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0] });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
    console.log(`Exmaple app listening on port ${PORT}`);
})