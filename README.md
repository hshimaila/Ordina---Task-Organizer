# 🚀 Ordina — Smart Task Management System

A modern, full-stack task management application designed to help users **organize work, boost productivity, and track progress efficiently**. Built with a clean UI and robust backend, Ordina demonstrates real-world application architecture using industry-relevant technologies.

---

## 🌟 Overview

Ordina is a **secure, feature-rich productivity platform** where users can:

* Manage daily tasks with ease
* Track progress with real-time statistics
* Stay organized using categories, priorities, and due dates
* Maintain productivity streaks

This project focuses on scalability, user experience, and clean design principles.

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

* SQLite (development)

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

* Filter by:

  * Status (Active / Completed)
  * Category
  * Priority
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
* Dropdown navigation system

### 👤 Profile System

* Avatar with initials
* User stats overview
* Theme preferences
* Notification toggle (UI)
* Account info display

---

## 🧠 Architecture Highlights

* **Separation of Concerns**

  * Clean division between frontend and backend
* **RESTful API Design**
* **Reusable Components**
* **State Optimization using Hooks & Memoization**
* **Token-based Authorization Handling**

---

## 📂 Project Structure

```
Ordina/
│
├── frontend/
|   └── src/
│       ├── components/
        ├── auth/
│       ├── pages/
│       ├── context/
        ├── styles/
│       ├── hooks/
        ├── assets/
│       └── api/
│
├── backend/
│   ├── users/
│   ├── tasks/
    ├── requirements.txt
│   └── project settings
```

---

## ⚡ Getting Started

### 🔹 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint                 | Description     |
| ------ | ------------------------ | --------------- |
| POST   | `/api/register/`         | Register user   |
| POST   | `/api/login/`            | Login (JWT)     |
| GET    | `/api/tasks/`            | Get all tasks   |
| POST   | `/api/tasks/`            | Create task     |
| PUT    | `/api/tasks/update/:id/` | Update task     |
| DELETE | `/api/tasks/:id/`        | Delete task     |
| GET    | `/api/tasks/stats/`      | Get user stats  |
| POST   | `/api/change-password/`  | Change password |

---

## 💡 What This Project Demonstrates

✔ Full-stack development capability
✔ Secure authentication implementation

✔ API design & integration

✔ State management in React

✔ Clean and scalable UI architecture

✔ Problem-solving & debugging skills

✔ Real-world application building

---

## 🚀 Future Enhancements

* 📈 Advanced analytics & charts
* 🔔 Real notification system
* ☁️ Cloud deployment (Vercel + Render)
* 📱 Mobile responsiveness improvements
* 📊 Productivity insights dashboard

---

## 📌 Why This Project Matters

Ordina is not just a CRUD app — it reflects the ability to build a **production-level application** with:

* Clean UI/UX
* Secure backend
* Real-time data handling
* Scalable structure

---

## 👩‍💻 Author

**Shimaila Hanif**

Aspiring Software Engineer | Full-Stack Developer

---


👉 *Open to collaborations and learning!*
