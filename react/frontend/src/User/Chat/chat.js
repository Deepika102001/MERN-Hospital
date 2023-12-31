import React, { useState } from "react";
import { Navigation } from "../navigation";



export const Userchat = ()=>{
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [chatEnded, setChatEnded] = useState(false);
  
    const handleSendMessage = () => {
      if (newMessage.trim() === "") return;
  
      const updatedMessages = [...messages, { sender: "patient", text: newMessage }];
      setMessages(updatedMessages);
      setNewMessage("");
  
      // Simulate auto-reply after 2 seconds
      setTimeout(() => {
        let autoReply = {};
  
        if (updatedMessages.length === 1) {
          autoReply = { sender: "doctor", text: "Hi" };
        } else if (updatedMessages.length === 3) {
          autoReply = { sender: "doctor", text: "Yes, I am available" };
        } else if (updatedMessages.length === 5) {
          autoReply = { sender: "doctor", text: "Thank you for reaching out." };
        } else if (updatedMessages.length === 7) {
          autoReply = { sender: "doctor", text: "Chat with me after 3 days" };
          // Set the chat to be ended after 3 seconds
          setTimeout(() => {
            setChatEnded(true);
          }, 3000);
        }
  
        setMessages([...updatedMessages, autoReply]);
      }, 2000);
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
      backgroundImage: "url(https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2023/12/shutterstock_1473017651-1.jpg)",
      backgroundColor: "#ADD8E6", // Blue-yellow mixed color
      minHeight: "100vh", // Full height of the viewport
      backgroundSize: "cover", // Ensure the background image covers the entire container
      backgroundPosition: "center", // Center the background image
      backgroundRepeat: "no-repeat",  // Full height of the viewport
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
      boxShadow: "0 0 30px black", // Red shadow
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
      boxShadow: "0 0 55px rgba(0, 0, 0, 0.2)", // Subtle shadow
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