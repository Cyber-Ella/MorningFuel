const Subscriber = require("../model/Subscriber");
const sendEmail = require("../service/emailService");
const getQuote = require("../service/quoteService");

const startMorningJOb = async () => {
    console.log("Sending text email...");
 try{
    const users = await Subscriber.find();
    const quote = await getQuote();
    const today = new Date().toDateString()
    const message = `
          <div
      style="
        font-family: Arial, Helvetica, sans-serif;
        padding: 20px;
        background: #f9f9f9;
      "
    >
      <div
        style="
          max-width: 500px;
          margin: auto;
          background: white;
          padding: 20px;
          border-radius: 10px;
        "
      >
        <h2 style="color: #f97317; text-align: center">Good Morning 🌞</h2>
        <p style="font-size: 16px; color: #333; text-align: center">
          ${quote}
        </p>
        <hr style="margin: 20px 0" />
        <p style="font-size: 12px; color: #888; text-align: center">
          You are receiving this because you subscribed to MorningFuel by
          Cyberella
        </p>
      </div>
    </div>
       `;
    for (const user of users) {
        if(user.lastSent === today){
            console.log("Skipped", user.email)
            continue
        }
     try {
       await sendEmail(user.email, "Good Morning Motivation 🌟", message);
         user.lastSent = today;
         await user.save()
       console.log("Email sent to:", user.email);
        
     } catch (err) {
        console.log("Email failed for:", user.email, err);
      }
    }
      console.log("morning job finshed")
 }catch(err){
      console.error("Job failed:", err);
 }
}
module.exports = startMorningJOb;
