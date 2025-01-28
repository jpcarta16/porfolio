import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ReactTyped } from 'react-typed';

const Header = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 200,
    });

    const scaleUp = useSpring({
        transform: 'scale(1)',
        from: { transform: 'scale(0.95)' },
        delay: 400,
        config: { tension: 170, friction: 26 },
    });

    return (
        <header
            id="home"
            className="header text-center text-white d-flex align-items-center justify-content-center"
            style={{
                height: '100vh',
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.4), rgba(0, 0, 0, 0.6)), url(https://www.example.com/your-image.jpg)', // Fondo más sutil
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <div
                className="overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(0, 0, 0, 0.5)', // Ajuste más sutil
                }}
            ></div>
            <div className="container position-relative z-index-10">
                <animated.div style={{ ...fadeIn, ...scaleUp }}>
                    <h1 className="display-4 mb-3" style={{ fontFamily: 'Helvetica, Arial, sans-serif', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                        Hola, soy <span className="text-primary">Juan Cardenas</span>
                    </h1>
                    <p className="lead mb-4" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>
                        <ReactTyped
                            strings={[
                                "Soy un desarrollador frontend apasionado por crear experiencias web innovadoras y atractivas.",
                                "Me especializo en React, Vue.js, creando interfaces dinámicas y funcionales.",
                                "Tengo experiencia trabajando con tecnologías modernas y responsive design."
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={1000}
                            loop
                            showCursor={false} // No mostrar cursor
                        />
                    </p>
                    <a
                        href="#about"
                        className="btn btn-lg btn-primary mt-4"
                        aria-label="Explorar mis proyectos y habilidades"
                    >
                        <span className="btn-text">Explora mis proyectos y habilidades</span>
                    </a>
                </animated.div>
            </div>
        </header>
    );
};

export default Header;
