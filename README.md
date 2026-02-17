# FUTURE_FS_02

A simple Customer Relationship Management (CRM) web application built using Node.js, Express, MongoDB, and EJS.

This project allows admin users to manage leads, add notes, update follow-ups, and track customer interactions securely with authentication.

---

## 🚀 Live Demo

🔗 https://future-fs-02-yyg2.onrender.com

---

## 📌 Features

- 🔐 Admin Login Authentication (Session-based)
- ➕ Add New Leads
- 📋 View All Leads
- 📝 Add Notes / Follow-ups
- ✏️ Update Lead Information
- ❌ Delete Leads
- 🛡️ Protected Routes (Dashboard accessible only after login)
- 🌐 Deployed on Render
- ☁️ MongoDB Atlas Cloud Database

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS (Template Engine)
- Express-Session
- CSS (Custom Styling)
- Render (Deployment)

---

## 📂 Project Structure

mini-crm/
│
├── server.js
├── package.json
├── .env
│
├── models/
│ └── Lead.js
│
├── routes/
│ └── leadRoutes.js
│
├── middleware/
│ └── auth.js
│
├── views/
│ ├── login.ejs
│ ├── dashboard.ejs
│ ├── add.ejs
│
└── public/
└── style.css


---

## ⚙️ Installation (Run Locally)

1. Clone the repository:

git clone https://github.com/shailu992/FUTURE_FS_02.git

2. Install dependencies:

npm install


3. Create a `.env` file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
SESSION_SECRET=your_secret_key


4. Start the server:

node server.js


5. Open in browser:

http://localhost:5000


---

## 🔐 Environment Variables

| Variable        | Description |
|---------------|------------|
| PORT | Server port |
| MONGO_URI | MongoDB Atlas connection string |
| ADMIN_EMAIL | Admin login email |
| ADMIN_PASSWORD | Admin login password |
| SESSION_SECRET | Secret key for sessions |

---

## 📦 Deployment

This application is deployed using **Render**.

Steps:
- Push code to GitHub
- Connect repository to Render
- Add environment variables
- Deploy

---

## 📈 Future Improvements

- User roles (Admin / Staff)
- Search & Filter Leads
- Export leads to CSV
- Pagination
- Email Notifications
- UI Enhancement

