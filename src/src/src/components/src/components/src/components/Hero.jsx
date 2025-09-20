import React from 'react';

const Hero = () => {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1 style={{ color: 'rgb(218, 255, 1)', fontSize: '48px' }}>
        Rajib Biswas
      </h1>
      <h2 style={{ color: 'white', fontSize: '24px' }}>
        CFO & Strategic Finance Leader
      </h2>
      <p style={{ color: 'rgb(218, 218, 218)', fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>
        20+ years of global finance leadership across Singapore, Malaysia, UAE, India & Sri Lanka. 
        CFO at Rewardz Pte Ltd with proven track record of cost optimization and team building.
      </p>
      <div style={{ margin: '40px 0' }}>
        <img 
          src="https://customer-assets.emergentagent.com/job_executive-finance/artifacts/yd5fq1x0_RAJIB_%20BISWAS%203%20a%20%281%29.jpg" 
          alt="Rajib Biswas"
          style={{ width: '300px', height: '300px', borderRadius: '20px', objectFit: 'cover' }}
        />
      </div>
      <button style={{
        background: 'rgb(218, 255, 1)',
        color: 'black',
        border: 'none',
        padding: '15px 30px',
        fontSize: '16px',
        borderRadius: '10px',
        cursor: 'pointer'
      }}>
        Contact Me: rajib.biswas1505@gmail.com
      </button>
    </div>
  );
};

export default Hero;
