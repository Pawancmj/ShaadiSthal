"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

const amenities = [
  { icon: "❄️", label: "AC Hall" },
  { icon: "🍷", label: "Alcohol Allowed" },
  { icon: "🌙", label: "Overnight Wedding" },
  { icon: "🏊", label: "Poolside" },
  { icon: "🅿️", label: "Parking for 500+" },
  { icon: "🎵", label: "Music Allowed" },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    date: "Wedding Date: Oct 2023",
    rating: 5,
    avatar: "https://i.pravatar.cc/40?img=47",
    review: "A dream come true. The staff treated us like actual royalty. The illumination of the palace at night is something I will never forget.",
  },
  {
    name: "Vikram Mehta",
    date: "Wedding Date: Dec 2023",
    rating: 4,
    avatar: "https://i.pravatar.cc/40?img=12",
    review: "Magnificent venue. The catering was exceptional. Only slight issue was parking during the peak baraat arrival, but handled well.",
  },
];

const similar = [
  { name: "Rambagh Palace", location: "Jaipur, Rajasthan", price: "₹3,90,000+", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80" },
  { name: "Umaid Bhawan Palace", location: "Jodhpur, Rajasthan", price: "₹4,00,000+", img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=400&q=80" },
  { name: "Suryagarh Jaisalmer", location: "Jaisalmer, Rajasthan", price: "₹2,00,000+", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80" },
];

const calendarDays = [
  { day: 28, prev: true }, { day: 29, prev: true }, { day: 30, prev: true },
  { day: 1 }, { day: 2 }, { day: 3, peak: true }, { day: 4 },
  { day: 5, sun: true }, { day: 6, sun: true }, { day: 7 }, { day: 8, selected: true }, { day: 9 }, { day: 10 }, { day: 11 },
  { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 },
];

export default function VenueDetailPage() {
  const [selectedDay, setSelectedDay] = useState(8);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      {/* Global Header */}
      <Header />

      {/* Hero Gallery */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.65fr", gridTemplateRows: "260px 130px", gap: 8 }}>
          <div style={{ position: "relative", gridRow: "span 2", borderRadius: "12px 0 0 12px", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80" alt="Raj Palace" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", bottom: 80, left: 20,
              background: "#D4A017", color: "#fff",
              fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em",
              padding: "4px 10px", borderRadius: 4,
            }}>HERITAGE PALACE</div>
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                The Raj Palace, Jaipur
              </h1>
            </div>
          </div>
          <div style={{ borderRadius: "0 12px 0 0", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, borderRadius: "0 0 12px 0", overflow: "hidden" }}>
            <div style={{ overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=300&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ overflow: "hidden", borderRadius: "0 0 12px 0" }}>
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&q=80" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: 12, marginTop: -28, position: "relative", zIndex: 10 }}>
          {[
            { icon: "🎭", label: "Starting Price", value: "₹2,50,000", sub: "per plate (approx.)" },
            { icon: "👥", label: "Capacity", value: "500 – 2000", sub: "Guests across lawns" },
            { icon: "🏰", label: "Venue Type", value: "Heritage", sub: "Grand Architecture" },
          ].map(({ icon, label, value, sub }) => (
            <div key={label} style={{
              flex: 1, background: "#fff",
              borderRadius: 10, padding: "14px 16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              border: "1px solid #f0f0f0",
            }}>
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              <p style={{ fontSize: "0.65rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 6, marginBottom: 3 }}>{label}</p>
              <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#111" }}>{value}</p>
              <p style={{ fontSize: "0.65rem", color: "#aaa" }}>{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Body */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px 60px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "flex-start" }}>
        {/* Left Column */}
        <div>
          {/* Amenities */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 28 }}>
            {amenities.map(({ icon, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span style={{ fontSize: "0.78rem", color: "#444" }}>{label}</span>
              </div>
            ))}
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 24 }} />

          {/* Story */}
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 14 }}>The Digital Heirloom: Our Story</h2>
            <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.75, marginBottom: 12 }}>
              The Raj Palace is a living masterpiece of Rajasthani architectural heritage. Built in 1727, it was the city's first palace and remains an emblem of royal opulence. Today, it stands as a prestigious venue for those seeking a wedding that transcends the ordinary.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.75 }}>
              Every corner of the palace whispers stories of legendary grandeur, from the Durbar Mahal's gold-leafed ceilings to the lush lawns that have hosted centuries of celebrations. Our dedicated team ensures that your "Big Fat Indian Wedding" is treated with the reverence of a royal ceremony.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 24 }} />

          {/* Calendar */}
          <div style={{ marginBottom: 28 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: 20 }}>Check Wedding Availability</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(d => (
                <div key={d} style={{ textAlign: "center", fontSize: "0.65rem", fontWeight: 700, color: "#aaa", letterSpacing: "0.06em", padding: "4px 0" }}>{d}</div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
              {calendarDays.map((d, i) => {
                const isSelected = d.day === selectedDay && !d.prev;
                const isPeak = d.peak;
                const isBooked = d.sun;
                return (
                  <button key={i} onClick={() => !d.prev && setSelectedDay(d.day)} style={{
                    padding: "10px 4px", border: "none", borderRadius: 6,
                    fontSize: "0.82rem", fontWeight: isSelected ? 700 : 400,
                    cursor: d.prev ? "default" : "pointer",
                    background: isSelected ? "#C8102E" : isPeak ? "#fff0e8" : "#f9f9f9",
                    color: isSelected ? "#fff" : d.prev ? "#ccc" : isPeak ? "#e07000" : "#333",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {d.day}
                  </button>
                );
              })}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 14 }}>
              {[
                { color: "#C8102E", label: "Selected" },
                { color: "#ddd", label: "Booked" },
                { color: "#e07000", label: "Peak Season" },
              ].map(({ color, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                  <span style={{ fontSize: "0.65rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 24 }} />

          {/* Testimonials */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700 }}>Royal Testimonials</h2>
                <p style={{ fontSize: "0.75rem", color: "#aaa", marginTop: 3 }}>What our prestigious guests say</p>
              </div>
              <a href="#" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#C8102E", textDecoration: "none" }}>Write a Review</a>
            </div>
            {testimonials.map((t) => (
              <div key={t.name} style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                  <img src={t.avatar} alt={t.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div>
                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#111" }}>{t.name}</p>
                        <p style={{ fontSize: "0.68rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.date}</p>
                      </div>
                      <div style={{ display: "flex", gap: 2 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} style={{ color: i < t.rating ? "#f5a623" : "#ddd", fontSize: "0.85rem" }}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "#555", lineHeight: 1.65, paddingLeft: 52, fontStyle: "italic" }}>"{t.review}"</p>
              </div>
            ))}
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #f0f0f0", marginBottom: 28 }} />

          {/* Similar Venues */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: 20 }}>Other Palatial Destinations</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {similar.map((v) => (
                <Link key={v.name} href="#" style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ borderRadius: 10, overflow: "hidden", position: "relative", height: 150, marginBottom: 10 }}>
                    <img src={v.img} alt={v.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{
                      position: "absolute", top: 10, right: 10,
                      background: "#1a1a1a", color: "#fff",
                      fontSize: "0.65rem", fontWeight: 600,
                      padding: "3px 8px", borderRadius: 4,
                    }}>{v.price}</div>
                  </div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#111" }}>{v.name}</p>
                  <p style={{ fontSize: "0.72rem", color: "#aaa", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    {v.location}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column – Inquiry Form */}
        <div style={{ position: "sticky", top: 74 }}>
          <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 14, padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", marginBottom: 14 }}>
            <p style={{ fontSize: "0.68rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>Starting From</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.65rem", fontWeight: 700, color: "#C8102E", marginBottom: 20 }}>
              ₹2.5 Lakhs <span style={{ fontSize: "0.75rem", fontWeight: 400, color: "#aaa" }}>/plate</span>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" placeholder="Your Name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={labelStyle}>Wedding Date</label>
                  <input type="text" placeholder="mm/dd/yyyy" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Guests</label>
                  <input type="text" placeholder="500+" style={inputStyle} />
                </div>
              </div>
              <button style={{
                background: "#C8102E", color: "#fff",
                border: "none", borderRadius: 8,
                padding: "13px", fontSize: "0.85rem", fontWeight: 700,
                cursor: "pointer", width: "100%",
                fontFamily: "'DM Sans', sans-serif",
                marginTop: 4,
              }}>Send Inquiry</button>
              <button style={{
                background: "#fff", color: "#333",
                border: "1.5px solid #ddd", borderRadius: 8,
                padding: "12px", fontSize: "0.82rem", fontWeight: 600,
                cursor: "pointer", width: "100%",
                fontFamily: "'DM Sans', sans-serif",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}>
                <span style={{ fontSize: "1rem" }}>💬</span> Connect on WhatsApp
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 14 }}>
              <button style={textActionBtn}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                WISHLIST
              </button>
              <button style={textActionBtn}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                COMPARE
              </button>
            </div>
          </div>

          <div style={{ background: "#fffbf0", border: "1px solid #f0e4b0", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ color: "#D4A017", fontSize: "1.1rem", flexShrink: 0 }}>🛡️</div>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#333", marginBottom: 3 }}>ShaadiSthal Verified</p>
              <p style={{ fontSize: "0.72rem", color: "#888", lineHeight: 1.5 }}>We personally visited this venue to ensure the highest royal standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#f9f8f6", borderTop: "1px solid #eee", padding: "32px 24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#C8102E", display: "block", marginBottom: 16 }}>ShaadiSthal</span>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginBottom: 16 }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy", "Contact Us"].map(item => (
              <a key={item} href="#" style={{ fontSize: "0.72rem", color: "#888", textDecoration: "none" }}>{item}</a>
            ))}
          </div>
          <p style={{ fontSize: "0.65rem", color: "#ccc", letterSpacing: "0.06em" }}>© 2024 SHAADISTHAL LUXURY WEDDINGS PVT LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

const labelStyle = {
  display: "block", fontSize: "0.68rem",
  color: "#aaa", textTransform: "uppercase",
  letterSpacing: "0.06em", marginBottom: 5,
};

const inputStyle = {
  width: "100%", padding: "9px 12px",
  border: "none", borderBottom: "1.5px solid #e8e8e8",
  outline: "none", fontSize: "0.82rem",
  color: "#333", fontFamily: "'DM Sans', sans-serif",
  background: "transparent",
};

const textActionBtn = {
  background: "none", border: "none",
  fontSize: "0.68rem", fontWeight: 700,
  color: "#888", cursor: "pointer",
  display: "flex", alignItems: "center", gap: 5,
  letterSpacing: "0.05em",
  fontFamily: "'DM Sans', sans-serif",
};