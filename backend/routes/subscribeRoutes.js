const express = require("express");
const router = express.Router();
const Subscriber = require("../model/Subscriber");

router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newUser = new Subscriber({ email });
    await newUser.save();

    res.json({ message: "Subscribed Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const users = await Subscriber.find();
  res.json(users);
});

router.get("/test-email", async (req, res) => {
  try {
    await sendEmail(
      "your-email@gmail.com",
      "SMTP Test",
      "If you see this, email works"
    );

    res.send("Email sent successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Email failed: " + err.message);
  }
});

module.exports = router;
