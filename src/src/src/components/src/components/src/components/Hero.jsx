import React from 'react';

const Hero = () => {
  return (
    <section style={{
      padding: '120px 0 64px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 350px',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              background: 'rgba(218, 255, 1, 0.1)',
              color: 'rgb(218, 255, 1)',
              padding: '8px 16px',
              borderRadius: '16px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '24px',
              display: 'inline-block'
            }}>
              CFO & Independent Director (IICA)
            </div>

            <h1 style={{
              fontSize: '60px',
              fontWeight: '700',
              lineHeight: '1.0',
              marginBottom: '24px'
            }}>
              Driving Strategy, Execution & 
              <span style={{ color: 'rgb(218, 255, 1)' }}> Financial Narratives</span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: 'rgb(218, 218, 218)',
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              Visionary finance leader with 20+ years of global experience in finance, treasury, 
              taxation, and investment management. Currently serving as CFO at Rewardz Pte Ltd, 
              Singapore.
            </p>

            <div style={{
              display: 'flex',
              gap: '48px',
              marginBottom: '32px'
            }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'rgb(218, 255, 1)' }}>20+</div>
                <div style={{ fontSize: '14px', color: 'rgb(161, 161, 170)' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'rgb(218, 255, 1)' }}>5+</div>
                <div style={{ fontSize: '14px', color: 'rgb(161, 161, 170)' }}>Countries</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'rgb(218, 255, 1)' }}>₹42M</div>
                <div style={{ fontSize: '14px', color: 'rgb(161, 161, 170)' }}>Annual Savings</div>
              </div>
            </div>

            <button className="btn-primary">
              Let's Connect
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_executive-finance/artifacts/yd5fq1x0_RAJIB_%20BISWAS%203%20a%20%281%29.jpg" 
              alt="Rajib Biswas - CFO & Strategic Leader"
              style={{
                width: '350px',
                height: '350px',
                objectFit: 'cover',
                borderRadius: '20px',
                border: '3px solid rgb(218, 255, 1)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
