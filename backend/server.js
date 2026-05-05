const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const SubscriberRouter = require("./routes/subscribeRoutes");
const startMorningJob = require("./jobs/morningJob");
const sendEmail = require("./service/emailService")
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();
app.use("/api", SubscriberRouter);

startMorningJob();

app.get("/", (req, res) => {
  res.send("Morning email bot running");
});

app.get("/test-email", async (req, res) => {
  try {
    await sendEmail(
      "cyberella001@gmail.com",
      "SMTP Test",
      "If you see this, email works"
    );

    res.send("Email sent successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Email failed: " + err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
