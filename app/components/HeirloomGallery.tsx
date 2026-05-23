import Link from "next/link";

const images = [
  { src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80", alt: "Jewelry", tall: false },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80", alt: "Couple", tall: true },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80", alt: "Cake", tall: false },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80", alt: "Lights", tall: false },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80", alt: "Venue", tall: false },
];

export default function HeirloomGallery(): React.ReactElement {
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
            The Heirloom Gallery
          </h2>
          <p style={{ fontSize: "0.72rem", color: "#aaa", marginTop: 4 }}>
            Beautiful memories and inspirations captured in frame
          </p>
        </div>
        <Link href="/gallery" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#C8102E", textDecoration: "none" }}>
          View All ›
        </Link>
      </div>

      <div className="heirloom-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "180px 180px",
        gap: 10,
      }}>
        {images.map((img, i) => (
          <div
            key={i}
            className="heirloom-grid__item"
            style={{
              borderRadius: 10, overflow: "hidden",
              cursor: "pointer",
              gridRow: img.tall ? "span 2" : "span 1",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="heirloom-grid__image"
              style={{
                width: "100%",
                height: img.tall ? "370px" : "180px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
