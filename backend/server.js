const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Memorystore for tasks
let tasks = [
  { id: uuidv4(), title: "Review the task requirements", completed: false },
  { id: uuidv4(), title: "Build the backend API", completed: true },
];

// GET /tasks - For all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST /tasks - For creating a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ error: "Title is required." });
  }
  const task = { id: uuidv4(), title: title.trim(), completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// PATCH /tasks/:id - For toggling task completion
app.patch("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found." });
  task.completed = !task.completed;
  res.json(task);
});

// DELETE /tasks/:id - For deleting a task
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Task not found." });
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // 4000
