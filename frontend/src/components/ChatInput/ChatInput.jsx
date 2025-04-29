import React, { Component } from "react";
import "./ChatInput.scss";
import React, { useState } from 'react';

// function ChatInput() {
//     const [message, setMessage] = useState('');

//     return (
//         <input
//         type="text"
//         placeholder="Type a message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="p-2 border rounded w-full"
//         />
//     );
//     }

class ChatInput extends Component {
    render() {
    return (
        <div className="ChatInput">
        <input onKeyDown={this.props.send} />
        </div>
    );
    }
}

export default ChatInput;