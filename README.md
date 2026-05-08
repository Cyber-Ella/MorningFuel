# ☀️ MorningFuel

<div align="center">

### Start Every Morning With Positivity ✨

MorningFuel is a motivational email subscription app that delivers a daily **Good Morning message** and an inspiring quote directly to users' inboxes.

Built with ❤️ using **Node.js**, **Express.js**, **MongoDB**, and automated scheduling with **Cron Jobs**.

</div>

---

## 🌟 Preview

```text
☀️ Good Morning!

"Success is the sum of small efforts repeated daily."

Have an amazing day ahead ✨
```

---

# 🚀 Features

✅ Daily motivational emails
✅ User email subscription system
✅ Random inspirational quotes
✅ Automated email scheduling
✅ RESTful API support
✅ MongoDB database integration
✅ Environment variable security
✅ Backend email automation

---

# 🛠️ Tech Stack

<div align="center">

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Backend Runtime       |
| Express.js | Server Framework      |
| MongoDB    | Database              |
| Mongoose   | Database Modeling     |
| Nodemailer | Sending Emails        |
| node-cron  | Task Scheduling       |
| dotenv     | Environment Variables |

</div>

---

# 📂 Folder Structure

```bash
MorningFuel/
│
├── config/
├── controllers/
├── model/
├── routes/
├── service/
├── utils/
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
```

---

## 2️⃣ Navigate Into the Project Folder

```bash
cd MorningFuel
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
CRON_KEY=your_secret_key
```

---

## 5️⃣ Start the Development Server

```bash
npm run dev
```

---

# 📮 API Endpoint

## Subscribe User

```http
POST /api/subscribe
```

### 📥 Request Body

```json
{
  "email": "example@gmail.com"
}
```

### ✅ Success Response

```json
{
  "message": "Subscription successful"
}
```

---

# ⏰ Cron Job Workflow

MorningFuel automatically sends daily emails using scheduled cron jobs.

```text
Cron Trigger
      ↓
Fetch Subscribers
      ↓
Generate Quote
      ↓
Send Emails
```

---

# 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

---

# 🌍 Deployment

MorningFuel can be deployed using:

* Render
* Railway
* Cyclic

⚠️ Ensure all environment variables are configured correctly in production.

---

# 📖 What I Learned

Building MorningFuel helped me understand:

* Backend architecture with Express.js
* REST API development
* MongoDB and Mongoose integration
* Email automation with Nodemailer
* Cron job scheduling
* Environment variable management
* Error handling and async programming
* Deployment workflows

---

# 💡 Future Improvements

* 🔐 Authentication system
* 📊 Admin dashboard
* 📨 Beautiful email templates
* 🙋 Personalized quotes
* ❌ Unsubscribe feature
* 📱 Mobile app version
* 📈 Analytics & tracking

---

# 🤝 Contributing

Contributions, ideas, and feedback are welcome.

```bash
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request
```

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👩‍💻 Author

## Emmanuella Obi

💻 Backend Developer
🚀 Passionate about building impactful projects
☀️ Creator of MorningFuel

---

<div align="center">

### ⭐ If you like this project, consider giving it a star on GitHub ⭐

</div>
