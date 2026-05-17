export default function Hero(): React.ReactElement {
  return (
    <section className="home-hero" style={{
      position: "relative",
      height: 520,
      backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Overlay */}
      <div className="home-hero__content" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center", padding: "0 16px",
        width: "100%",
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.15,
          textShadow: "0 2px 20px rgba(0,0,0,0.45)",
          marginBottom: 28,
        }}>
          Grandeur Meets<br />
          <em>Precision.</em>
        </h1>

        {/* Search Bar */}
        <div className="home-search" style={{
          display: "flex",
          alignItems: "stretch",
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
          maxWidth: 520,
          margin: "0 auto",
        }}>
          {/* City Field */}
          <div className="home-search__field" style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "0 16px", flex: 1,
            borderRight: "1px solid #e8e8e8",
          }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input
              type="text"
              placeholder="Select City"
              style={{
                border: "none", outline: "none",
                fontSize: "0.82rem", color: "#444",
                fontFamily: "'DM Sans', sans-serif",
                width: "100%", background: "transparent",
                padding: "14px 0",
              }}
            />
          </div>

          {/* Venue Field */}
          <div className="home-search__field" style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "0 16px", flex: 1,
          }}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <input
              type="text"
              placeholder="Wedding Venue"
              style={{
                border: "none", outline: "none",
                fontSize: "0.82rem", color: "#444",
                fontFamily: "'DM Sans', sans-serif",
                width: "100%", background: "transparent",
                padding: "14px 0",
              }}
            />
          </div>

          {/* Button */}
          <button className="home-search__button" style={{
            background: "#C8102E", color: "#fff",
            border: "none", cursor: "pointer",
            padding: "0 22px",
            fontSize: "0.82rem", fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            whiteSpace: "nowrap",
          }}>
            Start Planning
          </button>
        </div>
      </div>
    </section>
  );
}
