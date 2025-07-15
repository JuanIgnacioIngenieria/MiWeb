import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import '../css/Projects.css';

const Projects: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Bot web scraping",
      description: "Implementación de un bot en Telegram de web scraping para encontrar los productos mejor valorados y con el mejor precio sobre Amazon. El desarrollo de este proyecto fue en Python y se realizó por medio de solicitudes al servidor de Amazon.",
      image: "/Images/proyecto1.jpg",
      tech: ["Python"],
      github: "#",
      
    },
    {
      title: "Conecta 4",
      description: "Implementación del juego clásico Conecta 4. El juego se implementó en el lenguaje Java, cumpliendo los principios de programación orientada a objetos SOLID. El usuario podrá jugar contra otro jugador, pero también contra un pequeño algoritmo inteligente.",
      image: "/Images/proyecto2.jpg",
      tech: ["Java", "SOLID"],
      github: "#",
      
    },
    {
      title: "Cinta transportadora",
      description: "Creación de un proyecto de Internet of Things (IoT) simulando una cinta transportadora inteligente en un restaurante de comida. Implementado en VHDL y utilizando diversos sensores y una placa FPGA.",
      image: "/Images/proyecto3.jpg",
      tech: ["VHDL", "IOT", "Vivado", "FPGA", "Electrónica"],
      github: "#",
      
    },
    {
      title: "Sistema crítico de distracciones al volante",
      description: "Programación de un sistema de detección de distracciones al volante de un coche en ADA. Esta programación de un sistema crítico se basó en el desarrollo del código cargado en una placa con sensores soldados, simulando un pequeño coche con la lectura de los datos.",
      image: "/Images/proyecto4.jpeg",
      tech: ["ADA", "Electrónica", "Raspberry Pi"],
      github: "#",
      
    },
    {
      title: "Red empresa",
      description: "Simulación y creación de una red en el software Packet Tracer, aplicando los conocimientos sobre redes informáticas aprendidos.",
      image: "/Images/proyecto5.jpeg",
      tech: ["CISCO Packet tracer", "Redes LAN"],
      github: "#",
      
    },
    {
      title: "Sistema contador de coches",
      description: "Implementación de un sistema inteligente en Python capaz de detectar coches en avenidas principales, permitiendo así el cálculo de tráfico al conocer cuántos coches hay en cada dirección. Se utilizó el conocimiento de visión por computadora.",
      image: "/Images/proyecto6.jpg",
      tech: ["Python", "opencv"],
      github: "#",
      
    },
    {
      title: "Páginas web",
      description: "Creación de páginas web por entretenimiento para diferentes personas, para mostrar proyectos o negocio. Desarrollada de manera básica en HTML, CSS y JavaScript o React y CSS.",
      image: "/Images/proyecto8.jpg",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "#",
      
    },
    {
      title: "Aplicación movil fitness",
      description: "Desarrollo de una aplicación multiplataforma deportiva para la realización de mi TFG. Esta aplicación se desarrolla en React Native y en esta versión, implementa un apartado para crear rutinas personalizadas desde casa de manera inteligente.",
      image: "/Images/app.png",
      tech: ["React Native", "MySQL", "JavaScript", "TypeScript", "node.js", "API REST", "Expo Go"],
      github: "#",
      
    }
  ];

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="projects-container">
        <div className="projects-header">
          <h2>Mis <span>Proyectos</span></h2>
          <p>Una selección de proyectos que demuestran mi experiencia y pasión por el desarrollo</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className={`project-overlay ${hoveredProject === index ? 'visible' : ''}`}>
                  <div className="project-overlay-content">
                    
                    
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>

              {hoveredProject === index && <div className="project-glow"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
