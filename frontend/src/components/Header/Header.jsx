import React from "react";
import "./Header.scss";
import { FaGithub } from 'react-icons/fa';
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Header = () => (
    <div className="header">
        <Canvas>
            <Text color="black"
            fontSize={3}
            position={[0, 0, 0]}>
                Realtime Chat App by DFCH9503
            </Text>
        </Canvas>
        <FaGithub size={28} />
        <a href="https://github.com/DFCH9503/CHAT-APP">Click to acces the full code!</a>
    </div>
);

export default Header;