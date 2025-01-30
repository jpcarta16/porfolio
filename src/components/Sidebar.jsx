import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled mb-0">
                <li>
                    <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn">
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub">
                        <FaGithub size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer" data-tooltip="Twitter">
                        <FaTwitter size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer" data-tooltip="Instagram">
                        <FaInstagram size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;