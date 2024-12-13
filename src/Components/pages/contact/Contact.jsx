import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Collaboration Opportunities",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
      } else {
        setResponseMessage(`Failed to send message: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
    setFormData({
      name: "",
      email: "",
      inquiryType: "Collaboration Opportunities",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="c-con">
        <h1>Let’s Create Something Amazing Together! 😁</h1>
        <p>
          <i>
            Have an idea, a question, or just want to say hi? Drop a message
            below, and I’ll get back to you as soon as possible!
          </i>
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="inquiry-type">
            Subject:{" "}
            <select
              name="inquiryType"
              id="inquiry-type"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="Collaboration Opportunities">
                Collaboration Opportunities
              </option>
              <option value="Freelance/Consulting Services">
                Freelance/Consulting Services
              </option>
              <option value="Technical Guidance">Technical Guidance</option>
              <option value="General Questions or Chat">
                General Questions or Chat
              </option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label htmlFor="message">
            Message:{" "}
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <input type="submit" id="submit" value="Send Message" />
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
