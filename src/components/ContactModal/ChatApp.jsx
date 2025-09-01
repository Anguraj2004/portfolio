import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot } from "lucide-react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Predefined Q/A ---
  const predefined = {
    "are you ai version of anguraj ?":
      "Yes, I'm AI version of Anguraj, a Mechatronics engineer graduated from TCE, Madurai.",
    "how are you ?":
      "I'm fine, doing good at my Project intern at embedUR systems, Chennai.",
    "what is you doing currently ?":
      "I'm currently pursuing my virtual intern at embedUR systems, Chennai and developing my skills in AI and embedded systems.",
  };

  // --- Main sendMessage flow ---
  const sendMessage = async (customInput) => {
    const query = customInput || input;
    if (!query.trim()) return;

    const newMessage = { role: "user", content: query };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      console.log("🟢 User query:", query);

      // 1️⃣ Predefined check
      const lowerQ = query.toLowerCase().trim();
      if (predefined[lowerQ]) {
        console.log("📌 Matched predefined:", lowerQ);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: predefined[lowerQ] },
        ]);
        setLoading(false);
        return;
      }

      // 2️⃣ Call Netlify backend
      console.log("🌐 Sending to Netlify backend:", query);
      const response = await fetch("https://ai-anguraj.netlify.app/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

      console.log("🌍 Netlify response status:", response.status);
      const data = await response.json();
      console.log("✅ Netlify response JSON:", data);

      const aiMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("❌ Error in sendMessage:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Server error, please try again." },
      ]);
    }

    setLoading(false);
  };

  // --- Auto scroll ---
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div
      className="flex flex-col bg-white dark:bg-primary rounded-lg"
      style={{ width: 400, height: 500, maxWidth: "100%", maxHeight: "100%" }}
    >
      <header className="p-3 shadow bg-white dark:bg-primary text-lg font-bold text-gray-800 dark:text-white">
        Meet my AI version
      </header>

      {/* Suggested Prompts */}
      {messages.length === 0 && (
        <div className="p-3 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Try asking one of these:
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(predefined).map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(q)}
                className="px-3 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ minHeight: 0 }}>
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-2 max-w-xl ${
              msg.role === "user" ? "ml-auto flex-row-reverse" : ""
            }`}
          >
            <div className="p-2 bg-white dark:bg-primary rounded-full">
              {msg.role === "user" ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div
              className={`p-3 rounded-2xl shadow text-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
            <Bot size={18} /> Anguraj is typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white dark:bg-primary border-t flex gap-2 sticky bottom-0 z-10">
        <input
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-white bg-white dark:bg-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Say something..."
        />
        <button
          onClick={() => sendMessage()}
          className="p-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
