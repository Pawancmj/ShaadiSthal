"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { ReactElement } from "react";

type Venue = {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: number;
  tag: string | null;
  tagColor?: string;
  tagBg?: string;
  description?: string;
  img: string;
  layout: "tall" | "wide";
};

const venues: Venue[] = [
  {
    id: 1,
    name: "The Royal Heritage Palace",
    location: "Chanakyapuri, New Delhi",
    price: "₹2,40,000",
    rating: 4.9,
    tag: "PREMIUM ELITE",
    tagColor: "#b8860b",
    tagBg: "#fff8e1",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80",
    layout: "tall",
  },
  {
    id: 2,
    name: "Lakeside Manor & Gardens",
    location: "Sohna Road, Gurgaon",
    price: "₹1,75,000",
    rating: 4.7,
    tag: null,
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=80",
    layout: "tall",
  },
  {
    id: 3,
    name: "Imperial Palms Banquet",
    location: "Noida Sector 150",
    price: "₹3,50,000",
    rating: 4.8,
    tag: "NEW OPENING",
    tagColor: "#C8102E",
    tagBg: "#fff0f0",
    description:
      "Experience unparalleled luxury at the Imperial Palms. Featuring a 20,000 sq ft pillarless hall and exquisite catering options curated by celebrity chefs.",
    img: "https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=700&q=80",
    layout: "wide",
  },
];

export default function VenuesPage(): ReactElement {
  const [selectedCity, setSelectedCity] = useState<string>("Delhi NCR");
  const [capacity, setCapacity] = useState<string>("300–600");
  const [compared, setCompared] = useState<number[]>([1]);

  const cities = ["Delhi NCR", "Mumbai", "Jaipur"];
  const capacities = ["100–300", "300–600", "600–1000", "1000+"];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f9f8f6", minHeight: "100vh" }}>
      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 32px 80px" }}>
        {/* Page Title */}
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "#C8102E", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            Curated Experiences
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#111", marginBottom: 8 }}>
            Discover the Grandest Venues in Delhi NCR
          </h1>
          <p style={{ fontSize: "0.75rem", color: "#999", letterSpacing: "0.04em" }}>
            1,248 RESULTS FOUND &nbsp;·&nbsp; SORTED BY: POPULARITY
          </p>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <aside style={{
            width: 210, flexShrink: 0,
            background: "#fff", borderRadius: 12,
            padding: "24px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            position: "sticky", top: 72,
          }}>
            {/* Location */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#333", textTransform: "uppercase" }}>Location (City)</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.5}><path d="M19 9l-7 7-7-7"/></svg>
              </div>
              {cities.map((city) => (
                <label key={city} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, cursor: "pointer" }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 3,
                    border: selectedCity === city ? "none" : "1.5px solid #ccc",
                    background: selectedCity === city ? "#C8102E" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }} onClick={() => setSelectedCity(city)}>
                    {selectedCity === city && (
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    )}
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#333" }}>{city}</span>
                </label>
              ))}
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 20 }} />

            {/* Price Range */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#333", textTransform: "uppercase" }}>Price Range (INR)</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.5}><path d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div style={{ position: "relative", height: 4, background: "#eee", borderRadius: 4, margin: "0 4px 10px" }}>
                <div style={{ position: "absolute", left: "0%", right: "30%", top: 0, height: "100%", background: "#C8102E", borderRadius: 4 }} />
                <div style={{ position: "absolute", left: "0%", top: "50%", transform: "translateY(-50%)", width: 12, height: 12, borderRadius: "50%", background: "#C8102E", border: "2px solid #fff", boxShadow: "0 0 0 1px #C8102E" }} />
                <div style={{ position: "absolute", left: "70%", top: "50%", transform: "translateY(-50%)", width: 12, height: 12, borderRadius: "50%", background: "#C8102E", border: "2px solid #fff", boxShadow: "0 0 0 1px #C8102E" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.7rem", color: "#888" }}>₹50K</span>
                <span style={{ fontSize: "0.7rem", color: "#C8102E", fontWeight: 600 }}>₹15L+</span>
                <span style={{ fontSize: "0.7rem", color: "#888" }}>₹50L+</span>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 20 }} />

            {/* Guest Capacity */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#333", textTransform: "uppercase" }}>Guest Capacity</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.5}><path d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {capacities.map((cap) => (
                  <button key={cap} onClick={() => setCapacity(cap)} style={{
                    padding: "8px 0", fontSize: "0.72rem", fontWeight: 500,
                    border: capacity === cap ? "none" : "1px solid #ddd",
                    borderRadius: 6, cursor: "pointer",
                    background: capacity === cap ? "#C8102E" : "#fff",
                    color: capacity === cap ? "#fff" : "#555",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>{cap}</button>
                ))}
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 20 }} />

            {/* Rating */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", color: "#333", textTransform: "uppercase" }}>Minimum Rating</span>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.5}><path d="M19 9l-7 7-7-7"/></svg>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {[1, 2, 3, 4].map((s) => (
                  <span key={s} style={{ color: "#f5a623", fontSize: "1.1rem" }}>★</span>
                ))}
                <span style={{ color: "#ddd", fontSize: "1.1rem" }}>★</span>
                <span style={{ fontSize: "0.78rem", color: "#555", marginLeft: 4 }}>4.0+</span>
              </div>
            </div>
          </aside>

          {/* Venue Cards */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Row 1 – two tall cards side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {venues.filter(v => v.layout === "tall").map((venue) => (
                <div key={venue.id} style={{
                  background: "#fff", borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                }}>
                  <div style={{ position: "relative", height: 220 }}>
                    <img src={venue.img} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    {venue.tag && (
                      <div style={{
                        position: "absolute", bottom: 12, left: 12,
                        background: venue.tagBg, color: venue.tagColor,
                        fontSize: "0.62rem", fontWeight: 700,
                        padding: "4px 10px", borderRadius: 4,
                        letterSpacing: "0.06em",
                      }}>{venue.tag}</div>
                    )}
                    <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 6 }}>
                      <button style={iconBtnStyle}>
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                      </button>
                      <button style={{ ...iconBtnStyle, background: "#C8102E" }}>
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}><path strokeLinecap="round" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"/></svg>
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 700, color: "#111" }}>{venue.name}</h3>
                      <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#f5a623", whiteSpace: "nowrap", marginLeft: 8 }}>★ {venue.rating}</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "#888", marginBottom: 12, display: "flex", alignItems: "center", gap: 4 }}>
                      <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {venue.location}
                    </p>
                    <p style={{ fontSize: "0.65rem", color: "#aaa", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>Starting From</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 700, color: "#111" }}>{venue.price}<span style={{ fontSize: "0.7rem", fontWeight: 400, color: "#999" }}> /day</span></span>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <button style={chatBtnStyle}>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                        </button>
                        <Link href="/venues/raj-palace" style={viewDetailsBtnStyle}>View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 – wide card */}
            {venues.filter(v => v.layout === "wide").map((venue) => (
              <div key={venue.id} style={{
                background: "#fff", borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                display: "flex",
              }}>
                <div style={{ position: "relative", width: "45%", flexShrink: 0 }}>
                  <img src={venue.img} alt={venue.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {venue.tag && (
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: "#fff0f0", color: "#C8102E",
                      fontSize: "0.62rem", fontWeight: 700,
                      padding: "4px 10px", borderRadius: 4,
                      letterSpacing: "0.06em",
                    }}>{venue.tag}</div>
                  )}
                </div>
                <div style={{ flex: 1, padding: "24px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: "#111" }}>{venue.name}</h3>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#f5a623", whiteSpace: "nowrap", marginLeft: 8 }}>★ {venue.rating}</span>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#888", marginBottom: 10, display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {venue.location}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6, marginBottom: 16 }}>{venue.description}</p>
                  <p style={{ fontSize: "0.65rem", color: "#aaa", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Starting From</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>{venue.price}<span style={{ fontSize: "0.7rem", fontWeight: 400, color: "#999" }}> /day</span></span>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <button style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "#fff", border: "1px solid #ddd",
                        borderRadius: 6, padding: "7px 14px",
                        fontSize: "0.75rem", fontWeight: 600, color: "#444",
                        cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                      }}>
                        <span>💬</span> WhatsApp
                      </button>
                      <Link href="/venues/raj-palace" style={viewDetailsBtnStyle}>View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compare Bar */}
      <div style={{
        position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
        background: "#1a1a1a", borderRadius: 14,
        padding: "14px 24px",
        display: "flex", alignItems: "center", gap: 20,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        zIndex: 200, minWidth: 420,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 42, height: 38, borderRadius: 6, overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=100&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: 6,
            border: "2px dashed #555",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#888", fontSize: "1.2rem",
          }}>+</div>
        </div>
        <div>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em" }}>Compare Venues</p>
          <p style={{ fontSize: "0.68rem", color: "#888" }}>1 item selected (max 3)</p>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <button style={{ background: "none", border: "none", color: "#ccc", fontSize: "0.75rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Clear All</button>
          <button style={{
            background: "#D4A017", color: "#1a1a1a",
            border: "none", borderRadius: 8,
            padding: "9px 20px", fontSize: "0.78rem", fontWeight: 700,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          }}>Compare Now</button>
        </div>
      </div>

      {/* Footer */}
      <VenuesFooter />
    </div>
  );
}

const iconBtnStyle = {
  width: 30, height: 30, borderRadius: 6,
  background: "#fff", border: "none",
  display: "flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer", boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
};

const chatBtnStyle = {
  width: 32, height: 32, borderRadius: 6,
  background: "#f5f5f5", border: "none",
  display: "flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer",
};

const viewDetailsBtnStyle: React.CSSProperties = {
  background: "#C8102E", color: "#fff",
  border: "none", borderRadius: 6,
  padding: "8px 18px", fontSize: "0.75rem", fontWeight: 700,
  cursor: "pointer", textDecoration: "none",
  fontFamily: "'DM Sans', sans-serif",
  display: "inline-block",
};

function VenuesFooter(): ReactElement {
  return (
    <footer style={{ background: "#fff", borderTop: "1px solid #eee", padding: "48px 32px 24px", marginTop: 40 }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 40, marginBottom: 36 }}>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, display: "block", marginBottom: 10, color: "#1a1a1a" }}>ShaadiSthal</span>
            <p style={{ fontSize: "0.76rem", color: "#888", lineHeight: 1.7, maxWidth: 220 }}>The Digital Heirloom of Wedding Planning. We curate the finest venues and vendors to make your royal day truly unforgettable.</p>
          </div>
          {[
            { title: "Top Cities", items: ["Delhi", "Mumbai", "Bangalore"] },
            { title: "Marketplace", items: ["Photographers", "Catering", "Invitations"] },
            { title: "Support", items: ["Terms", "Privacy"] },
          ].map(({ title, items }) => (
            <div key={title}>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#333", marginBottom: 14 }}>{title}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map(item => <li key={item}><a href="#" style={{ fontSize: "0.78rem", color: "#888", textDecoration: "none" }}>{item}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 20, textAlign: "center" }}>
          <p style={{ fontSize: "0.68rem", color: "#bbb", letterSpacing: "0.06em" }}>© 2024 SHAADISTHAL. THE DIGITAL HEIRLOOM OF WEDDING PLANNING.</p>
        </div>
      </div>
    </footer>
  );
}
