import React from 'react';

const Header = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(17, 17, 19, 0.95)',
      padding: '15px 20px',
      zIndex: 1000,
      textAlign: 'center'
    }}>
      <h3 style={{ color: 'rgb(218, 255, 1)', margin: 0 }}>
        Rajib Biswas - Professional CFO Portfolio
      </h3>
    </div>
  );
};

export default Header;
