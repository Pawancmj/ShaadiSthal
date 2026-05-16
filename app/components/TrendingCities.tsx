const cities = [
  { name: "Delhi", venues: "1,200+ Venues", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
  { name: "Mumbai", venues: "980+ Venues", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80" },
  { name: "Udaipur", venues: "540+ Venues", img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=400&q=80" },
  { name: "Jaipur", venues: "760+ Venues", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80" },
];

export default function TrendingCities(): React.ReactElement {
  return (
    <section style={{
      maxWidth: 1160, margin: "0 auto",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <div style={{ width: 36, height: 3, background: "#C8102E", borderRadius: 2, marginBottom: 8 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111" }}>
            Trending Cities
          </h2>
        </div>
        <a href="#" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#C8102E", textDecoration: "none" }}>
          Explore All ›
        </a>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {cities.map((city) => (
          <a key={city.name} href="#" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div style={{
              borderRadius: 12, overflow: "hidden",
              height: 150,
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}>
              <img
                src={city.img}
                alt={city.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
              />
            </div>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#111", marginTop: 8 }}>{city.name}</p>
            <p style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>{city.venues}</p>
          </a>
        ))}
      </div>
    </section>
  );
}