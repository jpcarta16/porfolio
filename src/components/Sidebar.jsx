import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
// Puedes usar cualquier ícono de react-icons

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
