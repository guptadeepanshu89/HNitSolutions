const { query } = require("../config/db");

function mapService(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    icon: row.icon,
    category: row.category,
    content: row.content,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function findActive() {
  const result = await query(
    "SELECT * FROM services WHERE is_active = TRUE ORDER BY created_at ASC"
  );
  return result.rows.map(mapService);
}

async function findAll() {
  const result = await query("SELECT * FROM services ORDER BY created_at ASC");
  return result.rows.map(mapService);
}

async function findBySlug(slug) {
  const result = await query("SELECT * FROM services WHERE slug = $1 LIMIT 1", [slug]);
  return mapService(result.rows[0]);
}

async function findById(id) {
  const result = await query("SELECT * FROM services WHERE id = $1 LIMIT 1", [id]);
  return mapService(result.rows[0]);
}

async function create(data) {
  const result = await query(
    `INSERT INTO services (title, slug, description, icon, category, content, is_active)
     VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7)
     RETURNING *`,
    [
      data.title,
      data.slug,
      data.description,
      data.icon,
      data.category,
      JSON.stringify(data.content || {}),
      data.isActive ?? true,
    ]
  );
  return mapService(result.rows[0]);
}

async function update(id, data) {
  const current = await findById(id);
  if (!current) return null;

  const next = {
    title: data.title ?? current.title,
    slug: data.slug ?? current.slug,
    description: data.description ?? current.description,
    icon: data.icon ?? current.icon,
    category: data.category ?? current.category,
    content: data.content ?? current.content,
    isActive: data.isActive ?? current.isActive,
  };

  const result = await query(
    `UPDATE services
     SET title = $1,
         slug = $2,
         description = $3,
         icon = $4,
         category = $5,
         content = $6::jsonb,
         is_active = $7,
         updated_at = NOW()
     WHERE id = $8
     RETURNING *`,
    [
      next.title,
      next.slug,
      next.description,
      next.icon,
      next.category,
      JSON.stringify(next.content || {}),
      next.isActive,
      id,
    ]
  );
  return mapService(result.rows[0]);
}

async function remove(id) {
  const result = await query("DELETE FROM services WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

async function deleteAll() {
  await query("DELETE FROM services");
}

async function count() {
  const result = await query("SELECT COUNT(*)::int AS count FROM services");
  return result.rows[0].count;
}

module.exports = {
  findActive,
  findAll,
  findBySlug,
  findById,
  create,
  update,
  remove,
  deleteAll,
  count,
};
