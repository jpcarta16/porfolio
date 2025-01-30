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
                <div className="row g-4">
                    {projects.map(({ id, title, description, img, link, techStack, additionalDetails }) => (
                        <div key={id} className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="project-card shadow-lg p-3 bg-white rounded">
                                <div className="project-image position-relative">
                                    <LazyLoadImage
                                        src={img}
                                        alt={`Vista previa de ${title}`}
                                        className="img-fluid w-100"
                                        effect="blur"
                                    />
                                    <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 opacity-0 transition-all">
                                        <a href={link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                                            Ver Proyecto
                                        </a>
                                    </div>
                                </div>
                                <div className="project-content p-3">
                                    <h3 className="h5">{title}</h3>
                                    <p className="small">{description}</p>
                                    <p className="text-muted small"><strong>Tecnologías:</strong> {techStack}</p>
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