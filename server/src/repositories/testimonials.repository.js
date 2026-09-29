const { query } = require("../config/db");

function mapTestimonial(row) {
  if (!row) return null;
  return {
    id: row.id,
    clientName: row.client_name,
    company: row.company,
    role: row.role,
    avatar: row.avatar,
    rating: row.rating,
    content: row.content,
    createdAt: row.created_at,
  };
}

async function findAll() {
  const result = await query("SELECT * FROM testimonials ORDER BY created_at DESC");
  return result.rows.map(mapTestimonial);
}

async function findById(id) {
  const result = await query("SELECT * FROM testimonials WHERE id = $1 LIMIT 1", [id]);
  return mapTestimonial(result.rows[0]);
}

async function create(data) {
  const result = await query(
    `INSERT INTO testimonials (client_name, company, role, avatar, rating, content)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [
      data.clientName,
      data.company,
      data.role,
      data.avatar || "",
      data.rating || 5,
      data.content,
    ]
  );
  return mapTestimonial(result.rows[0]);
}

async function update(id, data) {
  const current = await findById(id);
  if (!current) return null;

  const next = {
    clientName: data.clientName ?? current.clientName,
    company: data.company ?? current.company,
    role: data.role ?? current.role,
    avatar: data.avatar ?? current.avatar,
    rating: data.rating ?? current.rating,
    content: data.content ?? current.content,
  };

  const result = await query(
    `UPDATE testimonials
     SET client_name = $1, company = $2, role = $3, avatar = $4, rating = $5, content = $6
     WHERE id = $7
     RETURNING *`,
    [next.clientName, next.company, next.role, next.avatar, next.rating, next.content, id]
  );
  return mapTestimonial(result.rows[0]);
}

async function remove(id) {
  const result = await query("DELETE FROM testimonials WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

async function deleteAll() {
  await query("DELETE FROM testimonials");
}

async function count() {
  const result = await query("SELECT COUNT(*)::int AS count FROM testimonials");
  return result.rows[0].count;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  deleteAll,
  count,
};
