import React, { useState, useEffect } from "react";
import { Navigation } from "../navigation";

export const DoctorChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [chatEnded, setChatEnded] = useState(false);
  
    useEffect(() => {
      // Simulate patient's initial auto-message when the page loads
      setTimeout(() => {
        const patientAutoMessage = {
          sender: "patient",
          text: "Are you available?",
        };
        setMessages([patientAutoMessage]);
      }, 1000); // Adjust the timing as needed
    }, []); // Empty dependency array ensures that this effect runs only once on component mount
  
    const handleSendMessage = () => {
      if (chatEnded) {
        // If the chat has ended, do nothing
        return;
      }
  
      if (newMessage.trim() === "") return;
  
      // Simulate doctor's manual reply
      const updatedMessages = [
        ...messages,
        { sender: "doctor", text: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
  
      // Simulate patient's auto-reply after 5 seconds
      setTimeout(() => {
        const patientAutoReply = {
          sender: "patient",
          text: "Thank you for your response.",
        };
        setMessages((prevMessages) => [...prevMessages, patientAutoReply]);
  
      // Simulate doctor's reply after 3 seconds
      setTimeout(() => {
        const doctorEndingMessage = {
          sender: "doctor",
          text: "Thank you for contacting me and Chat with me after 3 days.",
        };
        setMessages((prevMessages) => [...prevMessages, doctorEndingMessage]);

        // Set the chat to be ended
        setChatEnded(true);
      }, 2000);
    }, 5000);
  };
  
  return (
    <>
      <Navigation />
      <div style={styles.container}>
        <h1 style={styles.heading}>Chat with Doctor</h1>

        <div style={styles.centeredBox}>
          <div style={styles.chatBox}>
            {messages.map((message, index) => (
              <div key={index} style={styles.messageContainer}>
                <span
                  style={
                    message.sender === "patient"
                      ? styles.youLabel
                      : styles.doctorLabel
                  }
                >
                  {message.sender === "patient" ? "You:" : "Doctor:"}
                </span>
                <p style={styles.messageText}>{message.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.inputContainer}>
          <textarea
            rows="4"
            cols="50"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            style={styles.textArea}
            disabled={chatEnded} // Disable textarea when chat has ended
          ></textarea>
          <br />
          <button onClick={handleSendMessage} style={styles.button} disabled={chatEnded}>
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};
  
  const styles = {
    pageContainer: {
      backgroundColor: "#ADD8E6", // Blue-yellow mixed color
      minHeight: "100vh", // Full height of the viewport
    },
    container: {
      padding: "20px",
    },
    heading: {
      fontSize: "34px",
      textAlign:"center",
      marginBottom: "20px",
    },
    centeredBox: {
      width: "80%",
      margin: "0 auto", // Center the box horizontally
    },
    chatBox: {
      border: "1px solid #ccc",
      boxShadow: "10px 20px 30px #000000", // Red shadow
      backgroundColor: "#ADD8E6", // Light blue-green background color
      minHeight: "200px",
      marginLeft:"15%",
      padding: "5px",
      width: "70%",
      marginBottom: "20px",
      overflowY: "auto",
    },
    messageContainer: {
      width: "80%",
      margin: "0 auto", // Center the message container
    },
    youLabel: {
      fontWeight: "bold",
      color: "#2196F3",
    },
    doctorLabel: {
      fontWeight: "bold",
      color: "#4CAF50",
    },
    messageText: {
      margin: 0,
      paddingLeft: "10px",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
    },
    textArea: {
      width: "60%", // Set the width to match the chat box
      margin: "0 auto", // Center the text area
      marginBottom: "10px",
      padding: "10px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Subtle shadow
    },
    button: {
      width: "20%", // Set the width to match the chat box
      margin: "0 auto", // Center the button
      textAlign: "center",
      backgroundColor: "#4CAF50",
      color: "#fff",
      cursor: "pointer",
      border: "none",
      borderRadius: "4px",
    },
  };