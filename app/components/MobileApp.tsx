import React from 'react';

export default function MobileApp(): React.ReactElement {
  const gridSquares = Array.from({ length: 25 }).map((_, i) => {
    // 5x5 grid
    // Row 2 (indices 5-9): empty at 6, 8
    // Row 4 (indices 15-19): empty at 16, 17, 18
    const isEmpty = [6, 8, 16, 17, 18].includes(i);
    return (
      <div
        key={i}
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: isEmpty ? 'transparent' : '#4d4d4d',
          borderRadius: '4px'
        }}
      />
    );
  });

  return (
    <section className="mobile-app-section" style={{
      backgroundColor: '#f8f7f5',
      padding: '40px 20px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div className="mobile-app-inner" style={{
        margin: '0 auto',
        backgroundColor: '#e8e6e1',
        borderRadius: '20px',
        maxWidth: '1000px',
        width: '100%',
        padding: '50px 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        {/* Left Content */}
        <div style={{ maxWidth: '520px' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2.4rem',
            color: '#2a2a2a',
            margin: '0 0 16px 0',
            fontWeight: 500,
          }}>
            Wedding Planning in Your Pocket.
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6a6561',
            lineHeight: '1.6',
            margin: '0 0 32px 0'
          }}>
            Receive real-time RSVP updates, chat with vendors on the go, and manage your checklist from anywhere.
          </p>
          <div className="mobile-store-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#1c1c1c',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '0.95rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>iOS</span> App Store
            </button>
            <button style={{
              backgroundColor: '#1c1c1c',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '0.95rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5L10.5 7L1.5 12.5V1.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>

        {/* Right Content - Grid Graphic */}
        <div className="mobile-pattern-wrap" style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 28px)',
          gap: '6px',
          flexShrink: 0
        }}>
          {gridSquares}
        </div>
      </div>
    </section>
  );
}
