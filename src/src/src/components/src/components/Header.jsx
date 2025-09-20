import React, { useState, useEffect } from 'react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    alert('For CV download, please contact me at rajib.biswas1505@gmail.com or +91 9674749623');
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(17, 17, 19, 0.95)',
      padding: '16px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>
              Rajib Biswas
            </div>
            <div style={{ fontSize: '12px', color: 'rgb(218, 255, 1)', textTransform: 'uppercase' }}>
              CFO & Strategic Leader
            </div>
          </div>
          <button className="btn-primary" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
