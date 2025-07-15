import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Globe, Briefcase, Code } from 'lucide-react';
import '../css/Skills.css';

const Skills: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillSections = [
    {
      icon: <GraduationCap className="icon" />,
      title: "Educación",
      items: [
        "Educacion Sencundaria Obligatoria Colegio Nuestra Señora del Pilar (2013-2017)",
        "Bachillerato sanitario/tecnológico Colegio Nuestra Señora del Pilar (2017-2019)",
        "Ingeniería de Computadores Universidad Politécnica de Madrid (2019-2025)",
        
      ]
    },
    {
      icon: <Globe className="icon" />,
      title: "Idiomas",
      items: [
        "Español - Nativo",
        "Inglés - Intermedio (B2)",
        "Francés - Básico (A1)",
        
      ]
    },
    {
      icon: <Briefcase className="icon" />,
      title: "Experiencia",
      items: [
        "Trabajador en montaje de eventos y asistente de cocina",
        "Profesor particular de Eléctronica básica y Fundamentos de la programación en C",
        "Becario en Accenture S.L, configurando software PLM y programando scripts en python para realizar automatizaciones",

      ]
    },
    {
      icon: <Code className="icon" />,
      title: "Conocimientos Técnicos",
      items: [
        "React, React Native, TypeScript, Node.js, HTML, CSS",
        "Python, Java, C",
        "SQL, MySQL",
        "VHDL, ADA"
      ]
    }
  ];

  return (
    <section className="skills-section" ref={ref}>
      <div className="skills-container">
        <div className={`skills-header ${isVisible ? 'visible' : ''}`}>
          <h2>
            Mi <span className="highlight">Perfil</span>
          </h2>
          <p>
            Una visión completa de mi formación, experiencia y habilidades técnicas
          </p>
        </div>

        <div className="skills-grid">
          {skillSections.map((section, index) => (
            <div
              key={index}
              className={`skill-card-wrapper ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`skill-card ${hoveredCard === index ? 'hovered' : ''}`}>
                <div className="glow-overlay"></div>
                <div className="skill-card-inner">
                  <div className="skill-header">
                    <div className="icon-container">{section.icon}</div>
                    <h3 className="skill-title">{section.title}</h3>
                  </div>
                  <ul className="skill-list">
                    {section.items.map((item, itemIndex) => (
                      <li className="skill-list-item" key={itemIndex}>
                        <span className="dot"></span>
                        <span className="item-content">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
