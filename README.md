github repo link :- https://github.com/man-sol/youtube-fullstack

# 🎬 MERN YouTube Clone

A full-stack YouTube Clone built using the **MERN Stack (MongoDB, Express, React, Node.js)**.

This project allows users to:
- View video listings
- Watch videos
- Fetch videos from backend API
- Use dummy fallback data if backend fails
- Navigate between Home and Video pages

---

# 🚀 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS (Custom Styling)

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Nodemon

---

# 📂 Project Structure

yt/
│
├── backend/
│ ├── models/
│ │ └── Video.js
│ ├── routes/
│ │ └── videoRoutes.js
│ ├── controllers/
│ │ └── videoController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── config/
│ │ └── db.js
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── Sidebar.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── VideoPage.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── Home.css


---

# ⚙️ Backend Setup

## 1️⃣ Go to backend folder

```bash
cd yt/backend

2 npm install

3 PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/youtubeclone
JWT_SECRET=your_secret_key


4 npm run dev


1 Go to frontend folder

cd yt/frontend

2 Install dependencies

npm install
3 Start frontend

npm run dev

App will run on:

http://localhost:5173


Features Implemented


✅ Home Page

Fetches videos from backend

Displays in responsive grid

Shows dummy data if API fails

Clickable video cards

✅ Video Page

Fetch single video by ID

Shows loading state

Shows error state

Plays video using HTML5 video player

✅ Conditional Rendering

Loading state

Error handling

Fallback dummy data

🧠 Learning Outcomes

Full MERN stack integration

REST API creation

MongoDB connection

React hooks (useState, useEffect)

React Router dynamic routing

Conditional rendering

Error handling

Responsive CSS Grid layout