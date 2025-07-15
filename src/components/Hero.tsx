import React from 'react';
import TypewriterText from '../Recursos/TypewriterText';

import '/src/css/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>


      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="main-name">Juan Ignacio</span><br/>
            <span>Lorenzo Pastrana</span>
          </h1>
          <h2>Ingeniero de Computadores</h2>
          <div className="typewriter">
            <TypewriterText 
              texts={[
                "Desarrollador principiante.",
                "Creativo.",
                "Apasionado por la tecnología."
              ]}
              speed={100}
              delay={500}
            />
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/titulo.png" alt="Decoración tecnológica" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-bar"></div>
      </div>
    </section>
  );
};

export default Hero;
