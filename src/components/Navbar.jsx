import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ activeSection }) => {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${activeSection !== 'home' ? 'navbar-dark bg-dark shadow-lg' : 'navbar-light bg-transparent'}`}>
            <div className="container">
                <a className="navbar-brand" href="#home" style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#fff' }}>
                    Juan Cardenas
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                href="#about"
                                style={{ transition: 'all 0.3s ease', fontSize: '1.1rem' }}
                            >
                                Sobre mí
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                href="#projects"
                                style={{ transition: 'all 0.3s ease', fontSize: '1.1rem' }}
                            >
                                Proyectos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                href="#contact"
                                style={{ transition: 'all 0.3s ease', fontSize: '1.1rem' }}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    activeSection: PropTypes.string.isRequired,
};

export default Navbar;
