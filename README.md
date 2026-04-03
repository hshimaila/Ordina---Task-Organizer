# 🚀 Ordina — Smart Task Management System

A modern, full-stack task management application designed to help users **organize work, boost productivity, and track progress efficiently**. Built with a clean UI and robust backend, Ordina demonstrates real-world application architecture using industry-relevant technologies.

## 🚀 Live Demo
**Frontend:** [https://ordina-frontend.vercel.app](https://ordina-frontend.vercel.app)  
**Backend API:** [https://ordina-backend.onrender.com](https://ordina-backend.onrender.com)

---

## 🌟 Overview

Ordina is a **secure, feature-rich productivity platform** where users can:

* Manage daily tasks with ease
* Track progress with real-time statistics
* Stay organized using categories, priorities, and due dates
* Maintain productivity streaks

---

## 🛠️ Tech Stack

### 💻 Frontend
* React.js
* Context API (Theme Management)
* React Router DOM (SPA Navigation)
* Axios (API integration)
* Custom Hooks (LocalStorage, State Management)

### ⚙️ Backend
* Django
* Django REST Framework (DRF)
* JWT Authentication (Secure token-based auth)

### 🗄️ Database
* PostgreSQL (production via Render)
* SQLite (development)

### ☁️ Deployment
* Frontend: Vercel
* Backend: Render
* Database: Render PostgreSQL

---

## 🔐 Key Features

### 👤 Authentication & Security
* User Registration & Login
* JWT-based Authentication (Access + Refresh tokens)
* Protected Routes
* Secure Password Change Functionality

### 📝 Task Management
* Create, Update, Delete tasks
* Toggle task completion
* Real-time backend sync
* Category & Priority support
* Due date tracking

### 🔍 Smart Filtering & Search
* Filter by Status (Active / Completed), Category, Priority
* Search tasks instantly

### 📊 User Dashboard
* Total Tasks
* Completed Tasks
* Productivity Streak System
* Dynamic stats fetched from backend

### 🎨 UI/UX Features
* Dark / Light Mode toggle 🌙☀️
* Responsive and clean interface
* Skeleton Loading UI
* Empty state handling

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/api/register/` | Register user |
| POST | `/api/login/` | Login (JWT) |
| GET | `/api/tasks/` | Get all tasks |
| POST | `/api/tasks/` | Create task |
| PUT | `/api/tasks/update/:id/` | Update task |
| DELETE | `/api/tasks/:id/` | Delete task |
| GET | `/api/tasks/stats/` | Get user stats |
| POST | `/api/change-password/` | Change password |

---

## ⚡ Getting Started

### 🔹 Backend Setup
```bash
cd OrdinaBackend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 🔹 Frontend Setup
```bash
cd OrdinaFrontend
npm install
npm start
```

---

## 💡 What This Project Demonstrates

✔ Full-stack development with React + Django  
✔ Secure JWT authentication implementation  
✔ RESTful API design & integration  
✔ PostgreSQL database in production  
✔ Cloud deployment (Vercel + Render)  
✔ State management with React Context & Hooks  
✔ Clean, scalable UI architecture  

---

## 👩‍💻 Author

**Shimaila Hanif**

[GitHub](https://github.com/hshimaila) · [LinkedIn](https://www.linkedin.com/in/shimaila-hanif-08ba1b262/)