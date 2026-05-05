const axios = require("axios");

const localQuote = [
  "Success starts with self-discipline. It starts with the willingness to do what you know you should do, even when you don't feel like doing it.",
  "Keep going, you're getting there. Every step forward, no matter how small, is progress.",
  "Discipline is the bridge between goals and accomplishment. Stay focused and keep pushing forward.",
  "The pain of discipline is far less than the pain of regret. Stay committed to your goals and keep moving forward.",
  "Small steps every day lead to big results. Stay consistent and keep working towards your dreams.",
  "You have got this! Stay disciplined, stay focused, and keep pushing forward. Your hard work will pay off.",
  "Progress not perfection. Focus on making progress every day, and the results will follow. Stay disciplined and keep moving forward.",
  "Make today count! Stay disciplined, stay focused, and keep working towards your goals. You have the power to create the life you want.",
  "Stay Positive and keep pushing forward. Every step you take, no matter how small, is a step towards your dreams. Stay disciplined and keep moving forward.",
];
const getQuote = async () => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format");
    }
    const data = await response.json();
    const quote = data[0];
    return `${quote.q} 
          - ${quote.a}
          `;
  } catch (error) {
    console.log(error);
  }

  return localQuote[Math.floor(Math.random() * localQuote.length)];
};
module.exports = getQuote;
