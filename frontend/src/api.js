const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function fetchTasks() {
  const res = await fetch(`${BASE_URL}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export async function createTask(title) {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete task");
}

export async function toggleTask(id) {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, { method: "PATCH" });
  if (!res.ok) throw new Error("Failed to toggle task");
  return res.json();
}
