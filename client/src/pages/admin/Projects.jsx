import { useEffect, useState } from "react";
import { createProject, deleteProject, getAdminProjects, updateProject } from "../../services/api";
import Button from "../../components/Button";
import { Field } from "../../sections/ContactPreview";

const empty = {
  title: "",
  slug: "",
  description: "",
  category: "Web Development",
  image: "aurora",
  technologies: "",
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);

  async function load() {
    const res = await getAdminProjects();
    setProjects(res.data.data.projects);
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const payload = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };
    if (editing) await updateProject(editing, payload);
    else await createProject(payload);
    setForm(empty);
    setEditing(null);
    await load();
  }

  return (
    <div className="px-5 py-8 sm:px-8">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-3xl border border-white/8 p-6 md:grid-cols-2">
        <Field label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <Field label="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <Field
          className="md:col-span-2"
          label="Description"
          as="textarea"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <Field
          className="md:col-span-2"
          label="Technologies (comma separated)"
          value={form.technologies}
          onChange={(e) => setForm({ ...form, technologies: e.target.value })}
        />
        <Button type="submit">{editing ? "Update project" : "Create project"}</Button>
      </form>
      <div className="mt-8 space-y-3">
        {projects.map((project) => (
          <article key={project.id} className="flex items-center justify-between rounded-2xl border border-white/8 p-4">
            <div>
              <p className="font-semibold">{project.title}</p>
              <p className="text-sm text-muted">{project.category}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <button
                type="button"
                onClick={() => {
                  setEditing(project.id);
                  setForm({
                    title: project.title,
                    slug: project.slug,
                    description: project.description,
                    category: project.category,
                    image: project.image,
                    technologies: project.technologies.join(", "),
                  });
                }}
              >
                Edit
              </button>
              <button type="button" className="text-red-400" onClick={() => deleteProject(project.id).then(load)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
