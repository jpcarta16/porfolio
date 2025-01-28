import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const projects = [
    {
        id: 1,
        title: 'CoolCamps',
        description: 'Plataforma para encontrar las mejores caravanas y lugares para aparcar en España, puedes crear usuarios, añadir favoritos y valorar los lugares.',
        img: '/img/CoolCamps.PNG',
        link: 'https://coolcamps.netlify.app/',
        techStack: 'React, Node.js, MongoDB',
        additionalDetails: 'Este proyecto me permitió explorar la gestión de usuarios y la integración de bases de datos en tiempo real.',
    },
    {
        id: 2,
        title: 'Zombie Runner',
        description: 'Juego de runner donde tienes que esquivar obstáculos y recoger al famoso futbolista Joaquin.',
        img: '/img/ZombieRunner.PNG',
        link: 'https://teresachaves.github.io/Zombie_Runner',
        techStack: 'JavaScript, HTML, CSS',
        additionalDetails: 'Desarrollé este juego con un enfoque en la interacción fluida y la jugabilidad divertida.',
    },
    {
        id: 3,
        title: 'Wiki Star Wars',
        description: 'Es una wiki de Star Wars donde puedes buscar personajes, planetas y naves.',
        img: '/img/StarWars.PNG',
        link: 'https://teresachaves.github.io/wikistarwars/',
        techStack: 'JavaScript, API, HTML, CSS',
        additionalDetails: 'Este proyecto me permitió trabajar con APIs externas para recuperar datos dinámicos.',
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Proyectos Destacados</h2>
                <div className="row">
                    {projects.map(({ id, title, description, img, link, techStack, additionalDetails }, index) => (
                        <div key={id} className="col-12 col-md-6 mb-12" data-aos="fade-up">
                            <div className="project-card">
                                <div className="project-image">
                                    <LazyLoadImage
                                        src={img}
                                        alt={`Vista previa de ${title}`}
                                        className="img-fluid"
                                        effect="blur"
                                        width="100%"
                                        height="300px"
                                    />
                                    <div className="project-overlay">
                                        <a href={link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                                            Ver Proyecto
                                        </a>
                                    </div>
                                </div>
                                <div className="project-details">
                                    <h5 className="project-title">{title}</h5>
                                    <p className="project-description">{description}</p>
                                    <p className="project-additional-details">{additionalDetails}</p>
                                    <div className="tech-stack">{techStack}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;