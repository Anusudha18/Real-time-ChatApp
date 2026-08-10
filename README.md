# 💬 VMessage

A real-time chat application built with the MERN stack, featuring secure authentication, live messaging, and a clean, modern UI.

**🔗 Live Demo:** [real-time-chatapp-1-d7sm.onrender.com](https://real-time-chatapp-1-d7sm.onrender.com)

---

## ✨ Features

- **Real-time messaging** — instant chat updates powered by WebSockets
- **Secure authentication** — sign in via Clerk (secure entry, TLS-encrypted sessions)
- **User directory** — browse and start conversations with other users
- **Light & dark mode** — toggle between themes instantly
- **Search** — quickly find conversations
- **Responsive UI** — built with HeroUI components and Tailwind CSS
- **Custom backgrounds** — personalize the app's visual theme

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- HeroUI component library
- Clerk (authentication)

**Backend**
- Node.js / Express
- MongoDB (user & message storage)
- WebSockets (real-time communication)

**Deployment**
- Docker (multi-stage build)
- Render (hosting)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB instance (local or Atlas)
- Clerk account (for authentication keys)

### Installation

Clone the repository:
```bash
git clone <your-repo-url>
cd real-time-chatapp
```

**Frontend setup:**
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` with:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Run the frontend locally:
```bash
npm run dev
```

**Backend setup:**
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend locally:
```bash
npm run dev
```

---

## 📦 Building for Production

```bash
cd frontend
npm run build
```

The app is containerized with Docker for deployment — see the `Dockerfile` for the multi-stage build process (frontend build → API bundle).

---

## 🔒 Privacy Note

User accounts and messages are stored in MongoDB. As the project maintainer, database access allows viewing of user data — this is disclosed here for transparency with anyone testing the app.

---

## 📄 License

This project is open source. Feel free to fork and adapt it.

---

## 🙋 Contact

Built by Anusudha — feel free to reach out with questions or feedback!
