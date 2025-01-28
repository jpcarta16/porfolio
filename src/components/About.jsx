import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 300,
        config: { tension: 220, friction: 120 },
    });

    return (
        <section id="about" className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    Sobre mí
                </h2>
                <animated.p className="text-center mb-4" style={fade}>
                    ¡Hola! Soy un desarrollador frontend con una fuerte pasión por la tecnología y el diseño. A lo largo de mi carrera, he trabajado en proyectos tanto individuales como en equipo, utilizando metodologías ágiles como Scrum. Mi enfoque principal es crear experiencias de usuario fluidas y atractivas utilizando tecnologías modernas como React, JavaScript y Node.js.
                </animated.p>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <p className="lead">
                            Mi principal área de enfoque es el desarrollo frontend, donde utilizo herramientas como React para crear aplicaciones interactivas y con una experiencia de usuario fluida. Además, tengo experiencia trabajando con tecnologías como JavaScript, TypeScript, y Node.js, lo que me permite construir aplicaciones completas, tanto en el frontend como en el backend.
                        </p>
                        <a
                            href="/img/JPCT_Web.pdf"
                            className="btn btn-primary btn-lg mt-3"
                            download="Juan_Cardenas_CV.pdf"
                        >
                            Descargar CV
                        </a>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h3 className="text-primary mb-3">Tecnologías que domino:</h3>
                        <ul className="list-unstyled">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Node.js</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;