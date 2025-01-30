import React, { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Sidebar from './components/Sidebar';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const offsetsRef = useRef([]);
  const navbarHeight = 60;

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    offsetsRef.current = sections.map((id) => {
      const section = document.getElementById(id);
      return section ? section.offsetTop - navbarHeight : 0;
    });
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.reduce((closest, section, index) => {
        const distance = Math.abs(window.scrollY + window.innerHeight / 2 - offsetsRef.current[index]);
        return distance < Math.abs(window.scrollY + window.innerHeight / 2 - offsetsRef.current[closest]) ? index : closest;
      }, 0);

      setActiveSection(sections[currentSection]);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} />
      <Sidebar />
      <div className="main-content">
        <Header />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
