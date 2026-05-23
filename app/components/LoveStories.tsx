import Link from "next/link";

const stories = [
  { title: "The Udaipur Affair", date: "October 2024", img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=700&q=80" },
  { title: "A Royal Delhi Soiree", date: "December 2024", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=700&q=80" },
];

export default function LoveStories(): React.ReactElement {
  return (
    <section className="home-section" style={{
      maxWidth: 1160, margin: "0 auto",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Header */}
      <div className="home-section__header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <div style={{ width: 36, height: 3, background: "#C8102E", borderRadius: 2, marginBottom: 8 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111" }}>
            Real Love Stories
          </h2>
          <p style={{ fontSize: "0.72rem", color: "#aaa", marginTop: 4 }}>
            63 incredible weddings planned through Shaadified
          </p>
        </div>
        <Link href="/real-wedding" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#C8102E", textDecoration: "none" }}>
          View All ›
        </Link>
      </div>

      {/* Cards */}
      <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {stories.map((s) => (
          <a className="story-card" key={s.title} href="#" style={{
            position: "relative",
            borderRadius: 16, overflow: "hidden",
            height: 280, display: "block",
            textDecoration: "none", cursor: "pointer",
          }}>
            <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            {/* Overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
            }} />
            {/* Text */}
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: 20 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{s.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
