import React from "react";
import "./Header.scss";
import { FaGithub } from 'react-icons/fa';

const Header = () => (
    <div className="header">
        <h2>Realtime Chat App by DFCH9503</h2>
        <FaGithub size={28} />
        <a href="https://github.com/DFCH9503/CHAT-APP">Click to acces the full code!</a>
    </div>
);

export default Header;