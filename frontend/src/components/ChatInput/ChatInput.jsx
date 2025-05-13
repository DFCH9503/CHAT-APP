import "./ChatInput.scss";
import React, { useState } from 'react';


const ChatInput = ({ send }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            send(e);
            setInputValue("");
        }
    };

    return (
        <div className="ChatInput">
            <input
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default ChatInput;