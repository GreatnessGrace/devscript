# DevScript - Blog Application

This is a full-stack blogging application built using **React.js**, **Node.js**, **Express**, and **MongoDB**.  
It supports **user authentication**, **role-based access** (Admin/User), and **blog management**.

---

## Features

- User Registration and Login
- JWT Authentication (token stored in LocalStorage)
- Role-based Access (Admin Dashboard visible only to Admins)
- View Blog Posts
- Responsive UI with Tailwind CSS
- Protected API routes

---

## Technologies Used

- Frontend: React.js, React Router, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (jsonwebtoken)

---

## Installation and Running Locally

### Prerequisites:

- Node.js (v18+)
- MongoDB (local instance or Atlas cluster)

### 1. Clone the Repository:

git clone https://github.com/GreatnessGrace/devscript.git
cd devscript


### 2. Install Frontend Dependencies:
cd devscript
npm install

### 3. Install Backend Dependencies:
cd ../backend
npm install

### 4. Create .env file in /server folder:
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
ADMIN_SECRET_KEY=your_admin_secret_key

### 5. Run the Backend Server:
cd backend
npm run dev

Server will start on: http://localhost:5000

### 6. Run the Frontend (Vite Dev Server):

cd devscript
npm run dev

Frontend will start on: http://localhost:5173

