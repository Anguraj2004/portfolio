import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot } from "lucide-react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const aiMessage = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Server error" }]);
    }

    setLoading(false);
  };

  // Ref for auto-scrolling
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div
      className="flex flex-col bg-white dark:bg-primary rounded-lg"
      style={{ width: 400, height: 480, maxWidth: '100%', maxHeight: '100%' }}
    >
      <header className="p-3 shadow bg-white dark:bg-primary text-lg font-bold text-gray-800 dark:text-white">
        Meet my AI version
      </header>

  <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ minHeight: 0 }}>
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-2 max-w-xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
          >
            <div className="p-2 bg-white dark:bg-primary rounded-full">
              {msg.role === "user" ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div
              className={`p-3 rounded-2xl shadow text-sm whitespace-pre-wrap ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
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

      <div className="p-3 bg-white dark:bg-primary border-t flex gap-2 sticky bottom-0 z-10">
        <input
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-white bg-white dark:bg-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Say something..."
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
