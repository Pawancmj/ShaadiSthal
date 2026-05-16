const images = [
  { src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80", alt: "Jewelry", tall: false },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=500&q=80", alt: "Couple", tall: true },
  { src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80", alt: "Cake", tall: false },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80", alt: "Lights", tall: false },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80", alt: "Venue", tall: false },
];

export default function HeirloomGallery(): React.ReactElement {
  return (
    <section style={{
      maxWidth: 1160, margin: "0 auto",
      padding: "52px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.6rem", fontWeight: 700,
        textAlign: "center", marginBottom: 28,
      }}>
        The Heirloom Gallery
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "180px 180px",
        gap: 10,
      }}>
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              borderRadius: 10, overflow: "hidden",
              cursor: "pointer",
              gridRow: img.tall ? "span 2" : "span 1",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
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