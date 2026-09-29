import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("hnit_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong. Please try again.";
    return Promise.reject({
      ...error,
      message,
      status: error.response?.status,
    });
  }
);

export function getServices() {
  return api.get("/services");
}

export function getService(slug) {
  return api.get(`/services/${slug}`);
}

export function getProjects(category) {
  return api.get("/projects", { params: category && category !== "All" ? { category } : undefined });
}

export function getProject(slug) {
  return api.get(`/projects/${slug}`);
}

export function getTestimonials() {
  return api.get("/testimonials");
}

export function submitContact(payload) {
  return api.post("/contact", payload);
}

export function subscribeNewsletter(email) {
  return api.post("/newsletter", { email });
}

export function loginAdmin(payload) {
  return api.post("/auth/login", payload);
}

export function logoutAdmin() {
  return api.post("/auth/logout");
}

export function getMe() {
  return api.get("/auth/me");
}

export function getAdminStats() {
  return api.get("/admin/stats");
}

export function getAdminMessages() {
  return api.get("/admin/messages");
}

export function updateMessageStatus(id, status) {
  return api.patch(`/admin/messages/${id}`, { status });
}

export function deleteMessage(id) {
  return api.delete(`/admin/messages/${id}`);
}

export function getAdminServices() {
  return api.get("/admin/services");
}

export function createService(payload) {
  return api.post("/admin/services", payload);
}

export function updateService(id, payload) {
  return api.put(`/admin/services/${id}`, payload);
}

export function deleteService(id) {
  return api.delete(`/admin/services/${id}`);
}

export function getAdminProjects() {
  return api.get("/admin/projects");
}

export function createProject(payload) {
  return api.post("/admin/projects", payload);
}

export function updateProject(id, payload) {
  return api.put(`/admin/projects/${id}`, payload);
}

export function deleteProject(id) {
  return api.delete(`/admin/projects/${id}`);
}

export function getAdminTestimonials() {
  return api.get("/admin/testimonials");
}

export function createTestimonial(payload) {
  return api.post("/admin/testimonials", payload);
}

export function updateTestimonial(id, payload) {
  return api.put(`/admin/testimonials/${id}`, payload);
}

export function deleteTestimonial(id) {
  return api.delete(`/admin/testimonials/${id}`);
}

export function getAdminNewsletters() {
  return api.get("/admin/newsletters");
}

export function deleteSubscriber(id) {
  return api.delete(`/admin/newsletters/${id}`);
}

export default api;
