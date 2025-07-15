import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, Linkedin } from 'lucide-react';
import '../css/contact.css';

const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver(0.3);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Juan Ignacio Lorenzo Pastrana",
      href: "https://www.linkedin.com/in/juan-ignacio-lorenzo-pastrana-628a4a2a0/",
      colorClass: "bg-blue"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "jilorenzopastranaingenieria@gmail.com",
      href: "mailto:jilorenzopastranaingenieria@gmail.com",
      colorClass: "bg-violet"
    },
    {
      icon: <Phone size={24} />,
      label: "Teléfono",
      value: "+34 635547990",
      href: "tel:+341635547990",
      colorClass: "bg-green"
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-pattern"></div>

      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <h2>Hablemos <span className="highlight">Juntos</span></h2>
          <p>¿Encajo con tus expectativas? ¿Quieres colaborar? No dudes en contactarme.</p>
        </div>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`contact-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <a href={method.href} className="contact-link">
                <div className="contact-content">
                  <div className={`contact-icon ${method.colorClass}`}>
                    {method.icon}
                  </div>
                  <h3>{method.label}</h3>
                  <p>{method.value}</p>
                </div>

                {hoveredButton === index && (
                  <div className={`contact-glow ${method.colorClass}`}></div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;