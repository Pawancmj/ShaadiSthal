"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { ReactElement } from "react";
import Footer from "../../components/Footer";

const specializations = [
  { icon: "📸", label: "Candid", desc: "Unscripted emotional moments" },
  { icon: "🎬", label: "Cinematic", desc: "High-definition film style" },
  { icon: "🏛️", label: "Traditional", desc: "Timeless ceremony coverage" },
  { icon: "💑", label: "Pre-Wedding", desc: "Couture couple portraiture" },
];

interface Package {
  feature: string;
  essential: string;
  royal: string;
  imperial: string;
}

const packages: Package[] = [
  { feature: "Photographers", essential: "2 Artisans", royal: "4 Artisans", imperial: "6 Artisans" },
  { feature: "Event Coverage", essential: "1 Day", royal: "3 Days", imperial: "5 Days" },
  { feature: "Deliverables", essential: "Digital Gallery", royal: "Handmade Album + Film", imperial: "Luxury Box Set + VR Film" },
  { feature: "Starting Price", essential: "₹1.5L", royal: "₹3.5L", imperial: "₹7.5L" },
];

interface Review {
  stars: number;
  text: string;
  name: string;
  event: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    stars: 5,
    text: "Vikram and his team felt like family. They captured every minute detail of our Udaipur wedding without being intrusive. The final album is a treasure.",
    name: "Aditi & Sameer",
    event: "Winter Wedding, 2023",
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    stars: 5,
    text: "The cinematic film they produced brought us to tears. Truly a royal experience from the first meeting to the final delivery.",
    name: "Rohan Mehta",
    event: "Anniversary Event, 2024",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];

export default function VendorDetailPage(): ReactElement {
  return (
    <div className="vendor-detail">
      {/* Global Header */}
      <Header />

      {/* Top Header Section */}
      <div className="vendor-detail__top">
        <div className="vendor-detail__top-header">
          <div>
            <div className="vendor-detail__premium-badge">★★★★★ &nbsp; Premium Featured</div>
            <h1 className="vendor-detail__title">The Heritage Frames</h1>
            <p className="vendor-detail__meta">
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Udaipur &amp; Worldwide &nbsp;•&nbsp; Crafting Digital Heirlooms since 2012
            </p>
          </div>
          <div className="vendor-detail__header-actions">
            <button className="btn-share">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />
              </svg>
              Share
            </button>
            <button className="btn-showreel">View Showreel</button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="vendor-gallery">
        <div className="vendor-gallery__header">
          <h2 className="vendor-gallery__title">Visual Narratives</h2>
          <span className="vendor-gallery__meta">42 ALBUMS &nbsp;•&nbsp; 12 AWARDS</span>
        </div>
        <div className="vendor-gallery__grid">
          <div className="vendor-gallery__main">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80" alt="Main" />
          </div>
          <div className="vendor-gallery__small" style={{ borderRadius: "0 10px 0 0" }}>
            <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&q=80" alt="Gallery 1" />
          </div>
          <div className="vendor-gallery__small" style={{ borderRadius: "0 0 10px 0" }}>
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80" alt="Gallery 2" />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
          <div style={{ borderRadius: "0 0 0 10px", overflow: "hidden", height: 160 }}>
            <img src="https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=500&q=80" alt="Gallery 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: "0 0 10px 0", overflow: "hidden", height: 160 }}>
            <img src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=500&q=80" alt="Gallery 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="vendor-detail__body">
        {/* Left Column */}
        <div>
          {/* Artist Card */}
          <div className="artist-card">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
              alt="Vikram Rathore"
              className="artist-card__img"
            />
            <div style={{ flex: 1 }}>
              <p className="artist-card__tag">The Creative Soul</p>
              <h3 className="artist-card__name">Vikram Rathore</h3>
              <p className="artist-card__quote">
                "I don't just take photographs; I capture the weight of a gaze, the tremor in a father's hand, and the unspoken promises exchanged in a palace corridor. My philosophy is rooted in the timeless aesthetics of Indian heritage, blended with a modern editorial edge."
              </p>
              <div className="artist-stats">
                {[
                  { value: "12+", label: "Years Exp" },
                  { value: "400+", label: "Weddings" },
                  { value: "Global", label: "Presence" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="artist-stat__value">{value}</p>
                    <p className="artist-stat__label">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="specializations">
            <h2>Artistic Specializations</h2>
            <div className="specializations__grid">
              {specializations.map((s) => (
                <div key={s.label} className="spec-card">
                  <div className="spec-card__icon">{s.icon}</div>
                  <p className="spec-card__label">{s.label}</p>
                  <p className="spec-card__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="packages">
            <h2>Investment &amp; Packages</h2>
            <table className="packages-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Essential</th>
                  <th className="highlight">Royal</th>
                  <th>Imperial</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.essential}</td>
                    <td className="highlight">{row.royal}</td>
                    <td>{row.imperial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Kind Words */}
          <div className="kind-words">
            <div className="kind-words__header">
              <h2>Kind Words</h2>
              <a href="#" className="kind-words__write">Write a Review ✏️</a>
            </div>
            <div className="kind-words__grid">
              {reviews.map((r, idx) => (
                <div key={idx} className="kind-word-card">
                  <div className="kind-word-card__stars">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <span key={i} style={{ color: "#f5a623", fontSize: "0.9rem" }}>★</span>
                    ))}
                  </div>
                  <p className="kind-word-card__text">"{r.text}"</p>
                  <div className="kind-word-card__author">
                    <img src={r.avatar} alt={r.name} className="kind-word-card__avatar" />
                    <div>
                      <p className="kind-word-card__name">{r.name}</p>
                      <p className="kind-word-card__event">{r.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Availability Card */}
          <div className="availability-card">
            <h3>Check Availability</h3>
            <label className="form-label">Event Date</label>
            <input type="text" placeholder="mm/dd/yyyy" className="avail-input" />
            <label className="form-label">Event Type</label>
            <select className="avail-select">
              <option>Full Wedding</option>
              <option>Engagement</option>
              <option>Pre-Wedding</option>
              <option>Reception</option>
            </select>
            <label className="form-label">Guest Count</label>
            <input type="text" placeholder="Approx. 250" className="avail-input" />
            <button className="btn-primary" style={{ width: "100%", padding: "13px", marginBottom: 10 }}>
              Request Quote
            </button>
            <button className="btn-whatsapp">
              <span>💬</span> Connect on WhatsApp
            </button>
            <div className="form-text-actions">
              <button className="form-text-btn">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                Wishlist
              </button>
              <button className="form-text-btn">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Compare
              </button>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="vendor-verified-badge">
            <span style={{ fontSize: "1.1rem", color: "#D4A017" }}>🛡️</span>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#333", marginBottom: 3 }}>Verified Partner</p>
              <p style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.5 }}>
                Ensuring high-quality standards and reliability for your big day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
