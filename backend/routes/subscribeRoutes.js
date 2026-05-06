const express = require("express");
const router = express.Router();
const sendEmail= require("../service/emailService")
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

router.get('/send-morning-email', async (req, res) => {
  try {
    await sendEmail();
    res.send('Morning email sent');
  } catch (err) {
    res.status(500).send('Error sending email');
  }
});

router.get("/", async (req, res) => {
  const users = await Subscriber.find();
  res.json(users);
});


module.exports = router;
