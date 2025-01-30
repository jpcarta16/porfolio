import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyled mb-0">
                <li>
                    <a href="https://www.linkedin.com/in/juancardenastaborda/" target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn">
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jpcarta16" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub">
                        <FaGithub size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jpcarta16/" target="_blank" rel="noopener noreferrer" data-tooltip="Instagram">
                        <FaInstagram size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;