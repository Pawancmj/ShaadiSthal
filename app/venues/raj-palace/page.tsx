"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import { useCompare } from "../../hooks/useCompare";
import { ReactElement, CSSProperties } from "react";
import Footer from "../../components/Footer";

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

export default function VenueDetailPage(): ReactElement {
  const [selectedDay, setSelectedDay] = useState<number>(8);
  const [activeTab, setActiveTab] = useState<'portfolio' | 'albums' | 'videos'>('portfolio');
  const router = useRouter();
  const { compareIds, toggleCompare } = useCompare();

  const handleCompareClick = () => {
    if (!compareIds.includes(6)) {
      toggleCompare(6); // Rajwada Courtyard Palace has ID 6
    }
    router.push("/comparison");
  };

  const labelStyle: CSSProperties = {
    display: "block", fontSize: "0.68rem",
    color: "#aaa", textTransform: "uppercase",
    letterSpacing: "0.06em", marginBottom: 5,
  };

  const inputStyle: CSSProperties = {
    width: "100%", padding: "9px 12px",
    border: "none", borderBottom: "1.5px solid #e8e8e8",
    outline: "none", fontSize: "0.82rem",
    color: "#333", fontFamily: "'DM Sans', sans-serif",
    background: "transparent",
  };

  const textActionBtn: CSSProperties = {
    background: "none", border: "none",
    fontSize: "0.68rem", fontWeight: 700,
    color: "#888", cursor: "pointer",
    display: "flex", alignItems: "center", gap: 5,
    letterSpacing: "0.05em",
    fontFamily: "'DM Sans', sans-serif",
  };

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
        <div style={{ display: "flex", gap: 10, marginTop: -28, position: "relative", zIndex: 10 }}>
          {[
            { icon: "🎭", label: "Starting Price", value: "₹2,50,000", sub: "per plate (approx.)" },
            { icon: "👥", label: "Capacity", value: "500 – 2000", sub: "Guests across lawns" },
            { icon: "🏰", label: "Venue Type", value: "Heritage", sub: "Grand Architecture" },
            { icon: "📍", label: "Address", value: "Amer Road", sub: "Jaipur, Rajasthan" },
          ].map(({ icon, label, value, sub }) => (
            <div key={label} style={{
              flex: 1, background: "#fff",
              borderRadius: 10, padding: "12px 13px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              border: "1px solid #f0f0f0",
              minWidth: 0,
            }}>
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              <p style={{ fontSize: "0.62rem", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 6, marginBottom: 3 }}>{label}</p>
              <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#111", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</p>
              <p style={{ fontSize: "0.62rem", color: "#aaa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sub}</p>
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

          {/* Portfolio / Albums / Videos */}
          <div style={{ marginBottom: 32 }}>
            {/* Tab Bar */}
            <div style={{ display: "flex", gap: 0, borderBottom: "2px solid #f0f0f0", marginBottom: 20 }}>
              {([
                { key: 'portfolio', label: 'Portfolio', count: 54 },
                { key: 'albums',    label: 'Albums',    count: 3  },
                { key: 'videos',    label: 'Videos',    count: 6  },
              ] as const).map(({ key, label, count }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '10px 20px 10px 0',
                    fontSize: '0.82rem', fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    color: activeTab === key ? '#C8102E' : '#888',
                    borderBottom: activeTab === key ? '2px solid #C8102E' : '2px solid transparent',
                    marginBottom: -2, letterSpacing: '0.03em',
                    transition: 'color 0.2s',
                  }}
                >
                  {label.toUpperCase()} ({count})
                </button>
              ))}
            </div>

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {[
                  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80',
                  'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&q=80',
                  'https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=400&q=80',
                  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80',
                  'https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=400&q=80',
                  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80',
                  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80',
                  'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80',
                  'https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&q=80',
                  'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80',
                  'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80',
                  'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&q=80',
                ].map((src, i) => (
                  <div key={i} style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer', position: 'relative' }}>
                    <img src={src} alt={`Portfolio ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Albums Tab */}
            {activeTab === 'albums' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {[
                  { title: 'Royal Ceremony', count: 24, cover: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80' },
                  { title: 'Palace Décor',   count: 18, cover: 'https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=500&q=80' },
                  { title: 'Garden Lawns',   count: 12, cover: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80' },
                ].map(({ title, count, cover }) => (
                  <div key={title} style={{ borderRadius: 10, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.09)', position: 'relative' }}>
                    <img src={cover} alt={title} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)', padding: '24px 14px 14px' }}>
                      <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', marginBottom: 2 }}>{title}</p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>{count} photos</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {[
                  { title: 'Grand Baraat Entry',  dur: '3:24', thumb: 'https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=500&q=80' },
                  { title: 'Phera Ceremony',      dur: '5:12', thumb: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80' },
                  { title: 'Palace Décor Tour',   dur: '2:48', thumb: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80' },
                  { title: 'Reception Highlight', dur: '4:05', thumb: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&q=80' },
                  { title: 'Sangeet Night',       dur: '6:30', thumb: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80' },
                  { title: 'Aerial View Tour',    dur: '1:58', thumb: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80' },
                ].map(({ title, dur, thumb }) => (
                  <div key={title} style={{ borderRadius: 10, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,0.09)', position: 'relative' }}>
                    <img src={thumb} alt={title} style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                    {/* Play Button Overlay */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(0,0,0,0.25)',
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#C8102E"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div style={{
                      position: 'absolute', bottom: 44, right: 8,
                      background: 'rgba(0,0,0,0.65)', color: '#fff',
                      fontSize: '0.62rem', fontWeight: 600,
                      padding: '2px 6px', borderRadius: 4,
                    }}>{dur}</div>
                    <div style={{ padding: '10px 12px', background: '#fff' }}>
                      <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#111' }}>{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
              <button style={{ ...textActionBtn, color: compareIds.includes(6) ? "#C8102E" : "#888" }} onClick={handleCompareClick}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                {compareIds.includes(6) ? "COMPARING" : "COMPARE"}
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
      <Footer />
    </div>
  );
}
