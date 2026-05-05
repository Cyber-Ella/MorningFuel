import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sunrise, Sparkles } from "lucide-react";

export default function Subscriber() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("https://morningfuel.onrender.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(
        data.message ||
          `🥳 Subscribed Successfully! 
          Check your email tomorrow morning.`,
      );
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl shadow-xl bg-white p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-orange-100">
                <Sunrise className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">MorningFuel</h1>
            <p className="text-gray-600">
              Get fresh Motivational emails delivered every morning.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 5 w-5 h-5 text-grey-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <button
              className="w-full rounded-xl py-4 bg-orange-500 text-white hover:bg-orange-600 items-center justify-center flex gap-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  Subscribing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 w-5 h-5" />
                  Subscribe
                </>
              )}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-green-600 font-medium">
              {message}
            </p>
          )}
          <p className="mt-6 text-xs text-center text-gray-500">
            One motivational message every morning 🌞
          </p>
        </div>
      </motion.div>
    </div>
  );
}
