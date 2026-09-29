const { query } = require("../config/db");

function mapUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    passwordHash: row.password_hash,
    role: row.role,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function findByEmail(email) {
  const result = await query("SELECT * FROM users WHERE email = $1 LIMIT 1", [email]);
  return mapUser(result.rows[0]);
}

async function findById(id) {
  const result = await query("SELECT * FROM users WHERE id = $1 LIMIT 1", [id]);
  return mapUser(result.rows[0]);
}

async function deleteAll() {
  await query("DELETE FROM users");
}

async function create({ name, email, passwordHash, role = "USER" }) {
  const result = await query(
    `INSERT INTO users (name, email, password_hash, role)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, email, passwordHash, role]
  );
  return mapUser(result.rows[0]);
}

module.exports = {
  findByEmail,
  findById,
  deleteAll,
  create,
};
