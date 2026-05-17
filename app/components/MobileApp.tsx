export default function MobileApp(): React.ReactElement {
  return (
    <section className="mobile-app-section" style={{
      background: "#f8f7f5",
      padding: "60px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div className="mobile-app-inner" style={{
        maxWidth: 1160, margin: "0 auto",
        display: "flex", alignItems: "center",
        gap: 60, flexWrap: "wrap",
      }}>
        {/* Left */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem", fontWeight: 700, marginBottom: 12,
          }}>
            Wedding Planning in Your Pocket.
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.7, maxWidth: 340, marginBottom: 24 }}>
            Download the Shaadified app to chat with our AI, track vendors, and manage your checklist from anywhere.
          </p>
          <div className="mobile-store-buttons" style={{ display: "flex", gap: 10 }}>
            {[
              { label: "App Store", icon: "🍎" },
              { label: "Play Store", icon: "▶" },
            ].map(({ label, icon }) => (
              <button key={label} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#1a1a1a", color: "#fff",
                padding: "10px 20px", borderRadius: 8,
                fontSize: "0.78rem", fontWeight: 600,
                border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right – decorative grid */}
        <div className="mobile-pattern-wrap" style={{ flexShrink: 0 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 40px)",
            gap: 6,
          }}>
            {Array.from({ length: 12 }).map((_, i) => {
              const colors = ["#C8102E22", "#D4A01722", "#1a1a1a12", "#E91E8C18"];
              return (
                <div key={i} style={{
                  width: 40, height: 40, borderRadius: 6,
                  background: colors[i % colors.length],
                }} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
