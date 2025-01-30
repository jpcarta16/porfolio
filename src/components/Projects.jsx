import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const projects = [
    {
        id: 1,
        title: 'CoolCamps',
        description: 'Plataforma para encontrar las mejores caravanas y lugares para aparcar en España. Funcionalidades: creación de usuarios, favoritos y valoraciones.',
        img: '/img/CoolCamps.PNG',
        link: 'https://coolcamps.netlify.app/',
        techStack: ['React', 'Node.js', 'MongoDB'],
        category: 'Fullstack',
    },
    {
        id: 2,
        title: 'Zombie Runner',
        description: 'Juego de runner donde debes esquivar obstáculos y recoger al famoso futbolista Joaquín.',
        img: '/img/ZombieRunner.PNG',
        link: 'https://teresachaves.github.io/Zombie_Runner',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        category: 'Juegos',
    },
    {
        id: 3,
        title: 'Wiki Star Wars',
        description: 'Wiki de Star Wars con búsqueda de personajes, planetas y naves.',
        img: '/img/StarWars.PNG',
        link: 'https://teresachaves.github.io/wikistarwars/',
        techStack: ['JavaScript', 'API', 'HTML', 'CSS'],
        category: 'Frontend',
    },
];

const Projects = () => {
    const [filter, setFilter] = useState('Todos');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        if (filter === 'Todos') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.category === filter));
        }
    }, [filter]);

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Proyectos Destacados</h2>
                <div className="text-center mb-4">
                    <button
                        className={`btn ${filter === 'Todos' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                        onClick={() => setFilter('Todos')}
                    >
                        Todos
                    </button>
                    <button
                        className={`btn ${filter === 'Fullstack' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                        onClick={() => setFilter('Fullstack')}
                    >
                        Fullstack
                    </button>
                    <button
                        className={`btn ${filter === 'Frontend' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                        onClick={() => setFilter('Frontend')}
                    >
                        Frontend
                    </button>
                    <button
                        className={`btn ${filter === 'Juegos' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setFilter('Juegos')}
                    >
                        Juegos
                    </button>
                </div>
                <div className="row g-4">
                    {filteredProjects.map(({ id, title, description, img, link, techStack }) => (
                        <div key={id} className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="project-card shadow-lg p-3 bg-white rounded h-100">
                                <div className="project-image position-relative">
                                    <LazyLoadImage
                                        src={img}
                                        alt={`Vista previa de ${title}`}
                                        className="img-fluid w-100 rounded-top"
                                        effect="blur"
                                    />
                                    <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 opacity-0 transition-all">
                                        <a href={link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                                            Ver Proyecto
                                        </a>
                                    </div>
                                </div>
                                <div className="project-content p-3">
                                    <h3 className="h5 mb-3">{title}</h3>
                                    <p className="small mb-3">{description}</p>
                                    <div className="tech-stack mb-3">
                                        <strong>Tecnologías:</strong>
                                        <div className="d-flex flex-wrap gap-2 mt-2">
                                            {techStack.map((tech, index) => (
                                                <span key={index} className="badge bg-primary">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
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