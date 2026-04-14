const venues = [
  {
    name: "Royal Heritage Palace",
    location: "5 Star | Rajasthan",
    price: "₹2,50,000",
    note: "Per Person onwards",
    rating: "4.8★",
    img: "https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=500&q=80",
  },
  {
    name: "Lakeside Manor",
    location: "Poolside Resource",
    price: "₹1,80,000",
    note: "Per Place onwards",
    rating: "4.6★",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80",
  },
  {
    name: "The Crystal Ballroom",
    location: "5 Star | New Delhi",
    price: "₹3,20,000",
    note: "Per Table onwards",
    rating: "4.9★",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80",
  },
];

export default function FeaturedVenues() {
  return (
    <section style={{
      maxWidth: 1160, margin: "0 auto",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <div style={{ width: 36, height: 3, background: "#C8102E", borderRadius: 2, marginBottom: 8 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111" }}>
            Featured Venues
          </h2>
          <p style={{ fontSize: "0.78rem", color: "#999", marginTop: 4, maxWidth: 380 }}>
            Handpicked venues that blend elegance, comfort and timeless luxury for your celebration.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {["By Budget", "By Capacity", "By Rating"].map((f) => (
            <button key={f} style={{
              fontSize: "0.72rem", padding: "5px 12px",
              border: "1px solid #ddd", borderRadius: 4,
              background: "#fff", color: "#555", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {venues.map((v) => (
          <div key={v.name} style={{
            borderRadius: 12, overflow: "hidden",
            boxShadow: "0 2px 14px rgba(0,0,0,0.09)",
            background: "#fff", cursor: "pointer",
          }}>
            {/* Image */}
            <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
              <img src={v.img} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{
                position: "absolute", top: 10, left: 10,
                background: "rgba(255,255,255,0.92)",
                fontSize: "0.7rem", fontWeight: 700, color: "#c07800",
                padding: "3px 8px", borderRadius: 20,
              }}>
                {v.rating}
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "14px 16px" }}>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "#111" }}>{v.name}</h3>
              <p style={{ fontSize: "0.72rem", color: "#999", marginTop: 2, marginBottom: 10 }}>{v.location}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#C8102E" }}>{v.price}</span>
                  <span style={{ fontSize: "0.68rem", color: "#aaa", marginLeft: 4 }}>{v.note}</span>
                </div>
                <button style={{
                  fontSize: "0.72rem", padding: "5px 12px",
                  border: "1px solid #ddd", borderRadius: 4,
                  color: "#555", cursor: "pointer", background: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}