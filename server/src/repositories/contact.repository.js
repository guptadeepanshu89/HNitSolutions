const { query } = require("../config/db");

function mapMessage(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    company: row.company,
    service: row.service,
    message: row.message,
    status: row.status,
    createdAt: row.created_at,
  };
}

async function create(data) {
  const result = await query(
    `INSERT INTO contact_messages (name, email, phone, company, service, message)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [data.name, data.email, data.phone || null, data.company || null, data.service || null, data.message]
  );
  return mapMessage(result.rows[0]);
}

async function findAll() {
  const result = await query("SELECT * FROM contact_messages ORDER BY created_at DESC");
  return result.rows.map(mapMessage);
}

async function findById(id) {
  const result = await query("SELECT * FROM contact_messages WHERE id = $1 LIMIT 1", [id]);
  return mapMessage(result.rows[0]);
}

async function updateStatus(id, status) {
  const result = await query(
    "UPDATE contact_messages SET status = $1 WHERE id = $2 RETURNING *",
    [status, id]
  );
  return mapMessage(result.rows[0]);
}

async function remove(id) {
  const result = await query("DELETE FROM contact_messages WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

async function deleteAll() {
  await query("DELETE FROM contact_messages");
}

async function count() {
  const result = await query("SELECT COUNT(*)::int AS count FROM contact_messages");
  return result.rows[0].count;
}

module.exports = {
  create,
  findAll,
  findById,
  updateStatus,
  remove,
  deleteAll,
  count,
};
