const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30_000,
});

async function query(text, params = []) {
  return pool.query(text, params);
}

async function connectDatabase() {
  const client = await pool.connect();
  try {
    await client.query("SELECT 1");
  } finally {
    client.release();
  }
}

async function disconnectDatabase() {
  await pool.end();
}

module.exports = {
  pool,
  query,
  connectDatabase,
  disconnectDatabase,
};
