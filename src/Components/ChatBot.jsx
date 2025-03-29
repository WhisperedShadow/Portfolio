import styles from "./Chatbot.module.css";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello, how can I help you?" },
  ]);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    const newMessage = { role: "user", content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");
  };

  useEffect(() => {
    const fetchResponse = async () => {
      const lastMessage = messages[messages.length - 1];

      if (lastMessage.role !== "user") return;

      const prompt = `
      You are an assistant for Durai Pon Singh's website: "https://durai-pon-singh.me". Your name is Sarah
      He is a Computer Science and Engineering student at Jeppiaar Engineering College, affiliated with Anna University, Chennai.
      His website showcases his portfolio and projects, including pages: Home (/), About (/about), Projects (/projects), Contact (/contact), Education (/education), and Skills (/skills).
      Respond briefly and in flirty way.
      Use some emojies while responding.
      If somebody ask you to redirect to certain page then ask them to check out the navbar. Untill that don't even talk about navbar 



      Conversation history:
      ${messages.map((msg) => `${msg.role}: ${msg.content}`).join("\n")}
      
      Answer the user's latest question in a few words.
      `;

      const requestBody = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      };

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
            import.meta.env.VITE_GEMINI
          }`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
          }
        );

        const data = await response.json();
        console.log("API Response:", data);

        if (data?.candidates?.length > 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: "assistant",
              content:
                data.candidates[0]?.content?.parts?.[0]?.text ||
                "Sorry, I didn't understand that.",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
      }
    };

    fetchResponse();
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.icon} onClick={toggleChat}>
        <i className="fa-solid fa-comments fa-3x"></i>
      </div>

      {isOpen && (
        <div className={styles.chatPopup}>
          <div className={styles.chatHeader}>
            <span>Chat with me</span>
            <button className={styles.closeBtn} onClick={toggleChat}>×</button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <p
                key={index}
                className={
                  message.role === "user" ? styles.userMessage : styles.assistantMessage
                }
              >
                {message.content}
              </p>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
