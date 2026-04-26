import { useState, useEffect, useRef } from "react";
import { fetchTasks, createTask, deleteTask, toggleTask } from "./api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adding, setAdding] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch(() => setError("Could not connect to the server."))
      .finally(() => setLoading(false));
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    const title = input.trim();
    if (!title) return;

    setAdding(true);
    try {
      const task = await createTask(title);
      setTasks((prev) => [...prev, task]);
      setInput("");
      inputRef.current?.focus();
    } catch {
      setError("Failed to add task.");
    } finally {
      setAdding(false);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Failed to delete task.");
    }
  }

  async function handleToggle(id) {
    try {
      const updated = await toggleTask(id);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch {
      setError("Failed to update task.");
    }
  }

  const done = tasks.filter((t) => t.completed).length;
  const progress = tasks.length ? (done / tasks.length) * 100 : 0;

  return (
    <div className="app">
      <header className="header">
        <span className="logo">✦ TASKS</span>
        {!loading && (
          <span className="counter">
            {done}/{tasks.length} done
          </span>
        )}
      </header>

      {!loading && tasks.length > 0 && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      <main className="main">
        {error && (
          <div className="error-banner" onClick={() => setError(null)}>
            {error} <span className="dismiss">✕</span>
          </div>
        )}

        <form className="add-form sticky" onSubmit={handleAdd}>
          <input
            ref={inputRef}
            className="add-input"
            type="text"
            placeholder="What needs doing?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={adding}
            maxLength={200}
          />
          <button
            className="add-btn"
            type="submit"
            disabled={adding || !input.trim()}
          >
            {adding ? "…" : "ADD"}
          </button>
        </form>

        <div className="tasks">
          {loading ? (
            <div className="state-msg">Loading tasks…</div>
          ) : tasks.length === 0 ? (
            <div className="empty-state">
              <h3>No tasks yet</h3>
              <p>Start by adding your first task above.</p>
            </div>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`task-item ${task.completed ? "done" : ""}`}
                >
                  <button
                    className="check-btn"
                    onClick={() => handleToggle(task.id)}
                  >
                    {task.completed ? "✔" : ""}
                  </button>

                  <span className="task-title">{task.title}</span>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="footer">Assignment works.</footer>
    </div>
  );
}
