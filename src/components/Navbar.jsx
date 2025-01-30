import React from 'react';

const Navbar = ({ activeSection }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#home">Juan Cardenas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">Sobre mí</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;