const { query } = require("../config/db");

function mapSubscriber(row) {
  if (!row) return null;
  return {
    id: row.id,
    email: row.email,
    createdAt: row.created_at,
  };
}

async function findByEmail(email) {
  const result = await query("SELECT * FROM newsletter_subscribers WHERE email = $1 LIMIT 1", [email]);
  return mapSubscriber(result.rows[0]);
}

async function create(email) {
  const result = await query(
    "INSERT INTO newsletter_subscribers (email) VALUES ($1) RETURNING *",
    [email]
  );
  return mapSubscriber(result.rows[0]);
}

async function findAll() {
  const result = await query("SELECT * FROM newsletter_subscribers ORDER BY created_at DESC");
  return result.rows.map(mapSubscriber);
}

async function remove(id) {
  const result = await query("DELETE FROM newsletter_subscribers WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

async function deleteAll() {
  await query("DELETE FROM newsletter_subscribers");
}

async function count() {
  const result = await query("SELECT COUNT(*)::int AS count FROM newsletter_subscribers");
  return result.rows[0].count;
}

module.exports = {
  findByEmail,
  create,
  findAll,
  remove,
  deleteAll,
  count,
};
