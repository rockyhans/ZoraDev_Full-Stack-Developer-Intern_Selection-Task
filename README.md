# ✦ Task Manager — ZoraDev Selection Task

A full-stack task manager with a React frontend and a Node.js + Express REST API. Tasks are stored in-memory on the server; no database is needed.

**Live links (fill after deploying):**
- Frontend: `https://<your-app>.vercel.app`
- Backend: `https://<your-app>.onrender.com`

---

## Folder Structure

```
zoradev-task-manager/
├── backend/
│   ├── server.js          # Express app — all routes live here
│   └── package.json
└── frontend/
    ├── index.html          # Vite entry point (loads fonts, mounts #root)
    ├── vite.config.js
    ├── vercel.json         # Vercel deployment config
    ├── .env.example        # Copy → .env and set VITE_API_URL
    └── src/
        ├── main.jsx        # ReactDOM.createRoot
        ├── App.jsx         # All UI logic and state
        ├── api.js          # Fetch helpers (one function per endpoint)
        └── index.css       # All styles (CSS variables, dark theme)
```

---

## Running Locally

### Prerequisites
- Node.js ≥ 18
- npm

### 1 — Clone the repo

```bash
git clone https://github.com/<your-username>/zoradev-task-manager.git
cd zoradev-task-manager
```

### 2 — Start the backend

```bash
cd backend
npm install
npm start          # runs on http://localhost:4000
```

> For auto-reload during development: `npm run dev` (uses nodemon)

### 3 — Start the frontend (new terminal)

```bash
cd frontend
npm install
cp .env.example .env   # VITE_API_URL defaults to http://localhost:4000
npm run dev            # runs on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Reference

| Method | Endpoint         | Body              | Response            |
|--------|-----------------|-------------------|---------------------|
| GET    | `/tasks`        | —                 | `Task[]`            |
| POST   | `/tasks`        | `{ title: str }`  | `Task` (201)        |
| PATCH  | `/tasks/:id`    | —                 | `Task` (toggled)    |
| DELETE | `/tasks/:id`    | —                 | 204 No Content      |

**Task shape:**
```json
{ "id": "uuid-v4", "title": "string", "completed": false }
```

---

## Deploying

### Backend → Render (free tier)

1. Push code to GitHub.
2. New Web Service on [render.com](https://render.com) → connect repo.
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `npm start`
6. Copy the service URL (e.g. `https://zoradev-api.onrender.com`).

### Frontend → Vercel (free tier)

1. Import repo on [vercel.com](https://vercel.com).
2. Root directory: `frontend`
3. Framework preset: **Vite**
4. Environment variable: `VITE_API_URL` = your Render URL
5. Deploy.

---

## Assumptions & Decisions

- **In-memory storage** — The spec explicitly permits a plain JS array. Data resets on server restart; that's expected.
- **uuid v4** — Used for task IDs to avoid collision bugs that occur with simple integer counters when deletes are involved.
- **Vite over CRA** — Vite is the current standard for React projects; much faster dev server with no unnecessary boilerplate.
- **PATCH for toggle** — Added a `PATCH /tasks/:id` endpoint (beyond the required three) to support the bonus completion toggle without a separate PUT body schema.
- **Single-file API module** (`api.js`) — All `fetch` calls are centralised so the component never constructs URLs manually. Easier to swap the base URL or add auth later.
- **No UI library** — Styled from scratch with CSS variables to keep the bundle small and the code readable.

---

## Bonus Feature

Each task has a circular toggle button. Clicking it sends `PATCH /tasks/:id` to the backend, which flips the `completed` boolean. Completed tasks are shown with a strikethrough and reduced opacity.
