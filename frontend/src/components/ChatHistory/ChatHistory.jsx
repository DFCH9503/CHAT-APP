import React, { useState, useEffect } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

const ChatHistory = ({ chatHistory }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(chatHistory);
    }, [chatHistory]);

    const deleteMessage = (indexToDelete) => {
        setMessages((prevMessages) =>
            prevMessages.filter((_, index) => index !== indexToDelete)
        );
    };

    return (
        <div className="ChatHistory">
            <h2>Chat History</h2>
            {messages.map((msg, index) => (
                <Message
                    key={index}
                    message={msg.data}
                    onDelete={() => deleteMessage(index)}
                />
            ))}
        </div>
    );
};

export default ChatHistory;

