# ✦ Task Manager — ZoraDev Selection Task

A full-stack task manager built with **React** (frontend) and **Node.js + Express** (backend). Tasks are stored in-memory on the server — no database needed.

> **Live Demo:** [https://frontend-zero-dev.vercel.app](https://frontend-zero-dev.vercel.app)
> **GitHub:** [https://github.com/rockyhans/ZoraDev_Full-Stack-Developer-Intern_Selection-Task](https://github.com/rockyhans/ZoraDev_Full-Stack-Developer-Intern_Selection-Task)

---

## Folder Structure

```
zoradev-task-manager/
├── README.md
├── .gitignore
│
├── backend/
│   ├── server.js          # Express app — all API routes (GET, POST, PATCH, DELETE)
│   └── package.json       # Dependencies: express, cors, uuid, nodemon
│
└── frontend/
    ├── index.html          # Vite HTML entry — loads Google Fonts, mounts #root
    ├── package.json        # Dependencies: react, react-dom, vite
    └── src/
        ├── main.jsx        # ReactDOM.createRoot — app entry point
        ├── App.jsx         # All UI, state, and event handlers
        ├── api.js          # Centralised fetch helpers (one function per endpoint)
        └── index.css       # All styles — CSS variables, dark theme, animations
```

---

## Running Locally

---

### Step 1 — Clone the repo

```bash
git clone https://github.com/rockyhans/ZoraDev_Full-Stack-Developer-Intern_Selection-Task.git
cd ZoraDev_Full-Stack-Developer-Intern_Selection-Task
```

---

### Step 2 — Start the backend

```bash
cd backend
npm install
npm start
# Server running on http://localhost:4000
```

> **Dev mode** (auto-reload on save): `npm run dev` — uses nodemon

---

### Step 3 — Start the frontend *(open a new terminal)*

```bash
cd frontend
npm install
npm run dev
# Frontend running on http://localhost:3000
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

Both servers must be running at the same time for the app to work.

---

## API Reference

Base URL (local): `http://localhost:4000`

| Method   | Endpoint       | Request Body       | Response              | Description            |
|----------|----------------|--------------------|-----------------------|------------------------|
| `GET`    | `/tasks`       | —                  | `Task[]` 200          | Returns all tasks      |
| `POST`   | `/tasks`       | `{ title: string }`| `Task` 201            | Creates a new task     |
| `PATCH`  | `/tasks/:id`   | —                  | `Task` 200            | Toggles completed      |
| `DELETE` | `/tasks/:id`   | —                  | `204 No Content`      | Deletes a task by ID   |

**Task object shape:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Build the backend API",
  "completed": false
}
```

---

## Deploying

### Backend → Render (free tier)

1. Push code to GitHub
2. Go to [render.com](https://render.com) → **New Web Service** → connect your repo
3. Set the following:
   - **Root directory:** `backend`
   - **Build command:** `npm install`
   - **Start command:** `npm start`
4. Copy your service URL (e.g. `https://zoradev-api.onrender.com`)

> Note: Free Render services spin down after 15 minutes of inactivity. First load may take ~30 seconds.

---

## Assumptions & Decisions

| Decision | Reason |
|---|---|
| **In-memory storage** | The spec explicitly permits a plain JS array. Data resets on server restart — this is expected and noted. |
| **uuid v4 for IDs** | Avoids collision bugs that happen with integer counters when tasks are deleted (no gaps to manage). |
| **Vite instead of CRA** | Vite is the current community standard — faster dev server, no ejection needed, minimal boilerplate. |
| **`api.js` module** | All `fetch` calls live in one file. The component never constructs URLs manually, making it easy to swap the base URL or add auth headers later. |
| **PATCH for toggle** | Cleaner REST semantics for a partial update. No request body schema needed — the server simply flips the boolean. |
| **No UI library** | Styled from scratch with CSS custom properties. Keeps the bundle small and demonstrates understanding of CSS — no black-box component hiding the work. |
| **Dark theme** | Intentional aesthetic choice — memorable and clean, avoids the default white-background look. |

---

## Bonus Feature — Task Completion Toggle

Each task row has a circular toggle button on the left. Clicking it:

1. Sends `PATCH /tasks/:id` to the backend
2. Server flips `task.completed` (true → false or false → true)
3. Frontend updates state with the returned task object
4. Completed tasks appear with a strikethrough title and reduced opacity

This is implemented end-to-end through the API — not just a local React state toggle.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5 |
| Backend | Node.js, Express 4 |
| Styling | Plain CSS (custom properties, no library) |
| IDs | uuid v4 |
| Frontend deploy | Vercel |
| Backend deploy | Render |
