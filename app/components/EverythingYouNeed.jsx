const services = [
  { label: "Venues", emoji: "🏛️" },
  { label: "Photographers", emoji: "📷" },
  { label: "Makeup", emoji: "💄" },
  { label: "Catering", emoji: "🍽️" },
  { label: "Decor", emoji: "✨" },
  { label: "Jewelry", emoji: "💍" },
];

export default function EverythingYouNeed() {
  return (
    <section style={{
      background: "#fafafa",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.6rem", fontWeight: 700,
          color: "#111", marginBottom: 36,
        }}>
          Everything You Need
        </h2>

        <div style={{
          display: "flex", justifyContent: "center",
          gap: 40, flexWrap: "wrap",
        }}>
          {services.map((s) => (
            <a key={s.label} href="#" style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 8,
              textDecoration: "none", cursor: "pointer",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                display: "flex", alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}>
                {s.emoji}
              </div>
              <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#444" }}>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}