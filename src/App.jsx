import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const navbarHeight = 60; // Ajusta la altura de tu Navbar aquí

  const handleScroll = throttle(() => {
    const sections = ['home', 'about', 'projects', 'contact'];

    const offsets = sections.map((id) => {
      const section = document.getElementById(id);
      return section ? section.offsetTop - navbarHeight : 0; // Ajustamos por la altura del Navbar
    });

    const currentSection = sections.reduce((closest, section, index) => {
      const distance = Math.abs(window.scrollY + window.innerHeight / 2 - offsets[index]);
      return distance < Math.abs(window.scrollY + window.innerHeight / 2 - offsets[closest]) ? index : closest;
    }, 0);

    setActiveSection(sections[currentSection]);
  }, 200); // Agrega un delay para optimizar la ejecución del scroll

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} />
      <Sidebar />
      <div className="main-content" style={{ marginLeft: '60px' }}>
        <Header />
        <About />
        <Projects />
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;