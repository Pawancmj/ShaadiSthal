import Link from "next/link";
import type { ReactElement } from "react";
import { trendingCities } from "../data/cities";

export default function TrendingCities(): ReactElement {
  return (
    <section
      className="home-section"
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "52px 32px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="home-section__header"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 28,
        }}
      >
        <div>
          <div style={{ width: 36, height: 3, background: "#C8102E", borderRadius: 2, marginBottom: 8 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#111" }}>
            Trending Cities
          </h2>
        </div>
        <Link href="/cities" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#C8102E", textDecoration: "none" }}>
          Explore All &gt;
        </Link>
      </div>

      <div className="trending-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {trendingCities.map((city) => (
          <Link
            className="trending-card"
            key={city.name}
            href={`/venues?city=${encodeURIComponent(city.name)}`}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <div
              className="trending-card__image"
              style={{
                borderRadius: 12,
                overflow: "hidden",
                height: 150,
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={city.image}
                alt={city.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
              />
            </div>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#111", marginTop: 8 }}>{city.name}</p>
            <p style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>{city.venues}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
