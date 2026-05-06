const express = require("express");
const router = express.Router();
const startMorningJob = require("../jobs/morningJob")
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
  if (req.query.key !== process.env.CRON_KEY) {
    return res.status(403).send("Unauthorized");
  }

  startMorningJob().catch(err => {
    console.error("Morning job failed:", err);
  });

  res.send('Triggered');
});
router.get("/", async (req, res) => {
  const users = await Subscriber.find();
  res.json(users);
});


module.exports = router;
