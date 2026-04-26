# ✦ ZoraDev — Mini Task Manager App

A clean and functional full-stack Task Manager application built as part of the ZoraDev Full Stack Developer Intern selection task.

🔗 **Live Demo:** https://frontend-zero-dev.vercel.app/  
📦 **GitHub Repo:** https://github.com/rockyhans/ZoraDev_Full-Stack-Developer-Intern_Selection-Task  

---

## 🚀 Overview

This project demonstrates a simple full-stack application where users can:

- Add tasks  
- View all tasks  
- Delete tasks  
- Toggle task completion (bonus feature)  

The focus was on **clean architecture, working API integration, and a polished UI/UX** rather than overengineering.

---

## 🧩 Tech Stack

### Frontend
- React (Vite)  
- Axios  
- Custom CSS (modern dark UI)  

### Backend
- Node.js  
- Express  
- UUID (for unique IDs)  

---

## ⚙️ Features

### ✅ Core Features
- Create tasks  
- View all tasks  
- Delete tasks  

### ⭐ Bonus Feature
- Toggle task as complete/incomplete  

### 🎨 UI/UX Enhancements
- Loading states  
- Error handling banner  
- Sticky input field  
- Smooth animations  
- Progress bar (task completion)  
- Responsive design  
- Micro-interactions (hover, click feedback)  

---

## 🔌 API Endpoints

| Method | Endpoint        | Description              |
|--------|---------------|--------------------------|
| GET    | /tasks        | Fetch all tasks          |
| POST   | /tasks        | Create a new task        |
| DELETE | /tasks/:id    | Delete a task            |
| PATCH  | /tasks/:id    | Toggle task completion   |

---

## 📁 Folder Structure


project-root/

├── backend/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── api.js
│ │ └── App.css
│ └── package.json
│
└── README.md


---

## 🧠 Key Decisions

- Used **in-memory storage (array)** as per assignment instructions  
- Separated API logic (`api.js`) from UI logic  
- Used **UUID** for reliable unique IDs  
- Implemented **optimistic UI updates** for better user experience  
- Focused on **minimal but meaningful UI enhancements**  

---

## 🛠️ Run Locally

### 1️⃣ Clone the Repository

git clone https://github.com/rockyhans/ZoraDev_Full-Stack-Developer-Intern_Selection-Task.git

cd ZoraDev_Full-Stack-Developer-Intern_Selection-Task


---

### 2️⃣ Run Backend

cd backend
npm install
node server.js


Server runs on:

http://localhost:4000


---

### 3️⃣ Run Frontend

cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


---

## 🌐 Deployment

- **Frontend:** Vercel  
- **Backend:** Render  

The frontend is configured to communicate with the deployed backend API.

---

## ⚠️ Assumptions & Notes

- No database is used (as per instructions)  
- Data resets when the server restarts  
- Focus was on functionality + clean UI rather than persistence  

---

## 🏁 Final Thoughts

This project demonstrates:

- Full-stack architecture understanding  
- Clean API design  
- Frontend-backend integration  
- UI/UX attention to detail  

---

## 📬 Submission

Submitted as part of ZoraDev Full Stack Developer Intern selection process.

---

**Built with focus, clarity, and simplicity.**
