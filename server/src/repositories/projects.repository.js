const { query } = require("../config/db");

function mapProject(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    category: row.category,
    image: row.image,
    technologies: row.technologies || [],
    projectUrl: row.project_url,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function findAll(category) {
  if (category && category !== "All") {
    const result = await query(
      "SELECT * FROM projects WHERE category = $1 ORDER BY created_at DESC",
      [category]
    );
    return result.rows.map(mapProject);
  }
  const result = await query("SELECT * FROM projects ORDER BY created_at DESC");
  return result.rows.map(mapProject);
}

async function findBySlug(slug) {
  const result = await query("SELECT * FROM projects WHERE slug = $1 LIMIT 1", [slug]);
  return mapProject(result.rows[0]);
}

async function findById(id) {
  const result = await query("SELECT * FROM projects WHERE id = $1 LIMIT 1", [id]);
  return mapProject(result.rows[0]);
}

async function create(data) {
  const result = await query(
    `INSERT INTO projects (title, slug, description, category, image, technologies, project_url)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [
      data.title,
      data.slug,
      data.description,
      data.category,
      data.image,
      data.technologies || [],
      data.projectUrl || null,
    ]
  );
  return mapProject(result.rows[0]);
}

async function update(id, data) {
  const current = await findById(id);
  if (!current) return null;

  const next = {
    title: data.title ?? current.title,
    slug: data.slug ?? current.slug,
    description: data.description ?? current.description,
    category: data.category ?? current.category,
    image: data.image ?? current.image,
    technologies: data.technologies ?? current.technologies,
    projectUrl: data.projectUrl !== undefined ? data.projectUrl : current.projectUrl,
  };

  const result = await query(
    `UPDATE projects
     SET title = $1,
         slug = $2,
         description = $3,
         category = $4,
         image = $5,
         technologies = $6,
         project_url = $7,
         updated_at = NOW()
     WHERE id = $8
     RETURNING *`,
    [
      next.title,
      next.slug,
      next.description,
      next.category,
      next.image,
      next.technologies || [],
      next.projectUrl,
      id,
    ]
  );
  return mapProject(result.rows[0]);
}

async function remove(id) {
  const result = await query("DELETE FROM projects WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

async function deleteAll() {
  await query("DELETE FROM projects");
}

async function count() {
  const result = await query("SELECT COUNT(*)::int AS count FROM projects");
  return result.rows[0].count;
}

module.exports = {
  findAll,
  findBySlug,
  findById,
  create,
  update,
  remove,
  deleteAll,
  count,
};
