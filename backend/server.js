const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const SubscriberRouter = require("./routes/subscribeRoutes");
const startMorningJob = require("./jobs/morningJob");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running", PORT);
});
