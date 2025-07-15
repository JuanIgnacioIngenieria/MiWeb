import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../css/About.css';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <div className="about-grid">
          {/* Imagen */}
          <div className={`about-image-container ${isVisible ? 'visible' : 'hidden-left'}`}>
            <div className="image-wrapper">
              <div className="image-background"></div>
              <div className="image-inner">
                <img 
                  src={`${import.meta.env.BASE_URL}Images/yo.jpg`}
                  alt="Juan Ignacio Lorenzo Pastrana"
                  className="about-image"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className={`about-text-container ${isVisible ? 'visible' : 'hidden-right'}`}>
            <h2 className="about-title">
              Sobre <span className="highlight">mí</span>
            </h2>
            <div className="about-text">
              <p>
                Soy un ingeniero de computadores apasionado por crear soluciones tecnológicas 
                innovadoras que impacten positivamente en la vida de las personas. Mi enfoque 
                se centra en el desarrollo de software.
              </p>
              <p>
                Con experiencia en tecnologías modernas y metodologías ágiles, disfruto realmente
                el desarrollo full-stack, inteligencia artificial, y automatizacion de procesos. 
                
              </p>
              <p>
                Cuando no estoy programando trato de aprender nuevas tecnologías, buscando nuevos 
                desafíos que me permitan crecer profesionalmente. 
              </p>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="about-button-outline"
            >
              Contáctame
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
