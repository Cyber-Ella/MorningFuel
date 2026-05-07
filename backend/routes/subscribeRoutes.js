const express = require("express");
const router = express.Router();
const startMorningJob = require("../jobs/morningJob")
const Subscriber = require("../model/Subscriber");

// handles subscribers
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }
    
    const exists = await Subscriber.findOne({ email: normalizedEmail });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newUser = new Subscriber({ email: normalizedEmail });
    await newUser.save();

    res.status(201).json({ message: "Subscribed Successfully" });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//send morning email
router.get('/send-morning-email', async (req, res) => {
  if (req.query.key !== process.env.CRON_KEY) {
    return res.status(403).send("Unauthorized");
  }

  startMorningJob().catch(err => {
    console.error("Morning job failed:", err);
  });

  res.send('Triggered');
});

//count subscribers
router.get("/", async (req, res) => {
  try {
    const count = await Subscriber.countDocuments();
    res.json({
      subscribers: count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }

});


module.exports = router;
