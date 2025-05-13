import React, { useState, useEffect } from "react";
import "./Message.scss";

const Message = ({ message, onDelete }) => {
    const [parsedMessage, setParsedMessage] = useState({ body: "" });

    useEffect(() => {
        const temp = JSON.parse(message);
        setParsedMessage(temp);
    }, [message]);

    return (
        <div className="Message">
            {parsedMessage.body}
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Message;
