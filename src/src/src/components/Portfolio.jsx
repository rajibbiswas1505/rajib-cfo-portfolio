import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="portfolio-container">
      <Header activeSection={activeSection} />
      <section id="hero">
        <Hero setActiveSection={setActiveSection} />
      </section>
    </div>
  );
};

export default Portfolio;
