"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";

const dreamTeam = [
  { role: "Venue", name: "Taj Lake Palace", sub: "Udaipur, Rajasthan", link: "View Venue", img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=80&q=80" },
  { role: "Photographer", name: "The Heritage Frames", sub: "By Vikram Rathore", link: "View Portfolio", img: "https://i.pravatar.cc/40?img=12" },
  { role: "Makeup Artist", name: "Artistry by Aditi", sub: "Bridal Expert", link: "View Profile", img: "https://i.pravatar.cc/40?img=47" },
  { role: "Couture", name: "Heritage Weaves", sub: "By Meera Khan", link: "View Atelier", img: "https://i.pravatar.cc/40?img=35" },
];

const moreStories = [
  { cat: "Himalayan Escape", catBg: "#1a3a2a", catColor: "#6fcf97", name: "Simran & Kabir in Shimla", desc: "A cosy winter wedding amidst the pine forests and colonial charm of the hills.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  { cat: "Garden Banquet", catBg: "#3a2a1a", catColor: "#f2994a", name: "Ananya & Neal's Forest Gala", desc: "An eco-conscious celebration where traditional rituals met modern forest aesthetics.", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80" },
  { cat: "Mumbai Edge", catBg: "#1a1a3a", catColor: "#9b51e0", name: "The Mumbai Loft Wedding", desc: "A sophisticated urban wedding focusing on clean lines, high fashion, and curated cocktails.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80" },
];

const diaryTabs = ["The Vows", "The Sangeet", "The Mehndi"];

export default function InsideRealWedding() {
  const [activeTab, setActiveTab] = useState("The Vows");

  return (
    <div className="rw-detail">
      <Header />

      {/* ── CINEMATIC HERO ── */}
      <div className="rw-detail__hero">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=80"
          alt="Wedding Hero"
        />
        <div className="rw-detail__hero-overlay" />
        <div className="rw-detail__hero-content">
          <p className="rw-detail__hero-location">Udaipur · Winter 2023</p>
          <h1 className="rw-detail__hero-title">
            The Royal Union of<br />
            <em>Meera &amp; Rohan</em>
          </h1>
          <div className="rw-detail__hero-tags">
            <span className="rw-detail__hero-tag">Palatial Splendour</span>
            <span className="rw-detail__hero-tag">Rose Gold Theme</span>
          </div>
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <div className="rw-detail__story">
        <div className="rw-detail__story-header">
          <div>
            <h2 className="rw-detail__story-title">A Love Cast in<br />Sunlight and Stone</h2>
          </div>
          <div className="rw-detail__story-img">
            <img src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=300&q=80" alt="Detail 1" />
          </div>
          <div className="rw-detail__story-img">
            <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&q=80" alt="Detail 2" />
          </div>
        </div>

        <p className="rw-detail__story-text">
          hey met on a rain-soaked afternoon in London, far from the golden sands of Rajasthan where their story would find its zenith. Meera, a textile designer with a penchant for heritage weaves, and Rohan, an architect who builds modern silhouettes, found a common language in their love for intricate details.
        </p>

        <p className="rw-detail__story-quote">
          "We wanted our wedding to feel like an heirloom," Meera explains. "Not just a party, but a piece of history we were creating. The Taj Lake Palace was the only canvas that could hold our dream of 'Modern Raj'. Every corner was scented with white jasmine, every light reflected in the Pichola waters."
        </p>
      </div>

      {/* ── VISUAL DIARY / CHAPTERS ── */}
      <div className="rw-detail__diary">
        <p className="rw-detail__diary-tag">The Visual Diary</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 className="rw-detail__diary-title" style={{ marginBottom: 0 }}>Chapters of Joy</h2>
          <div className="rw-detail__diary-tabs">
            {diaryTabs.map((tab) => (
              <button
                key={tab}
                className={`rw-detail__diary-tab ${activeTab === tab ? "rw-detail__diary-tab--active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Mosaic */}
        <div className="rw-detail__gallery">
          {/* Main large cell */}
          <div className="rw-detail__gallery-main">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80" alt="The Ceremony" />
            <div className="rw-detail__gallery-main__label">
              <p>Surer Work</p>
              <h3>THE CEREMONY</h3>
            </div>
          </div>

          {/* Top right */}
          <div className="rw-detail__gallery-cell" style={{ borderRadius: "0 10px 0 0", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80" alt="Gallery 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Middle right top — with text overlay */}
          <div className="rw-detail__gallery-cell" style={{ overflow: "hidden", position: "relative", background: "#1a1a1a" }}>
            <img src="https://images.unsplash.com/photo-1594636049975-c9da48cf15c6?w=400&q=80" alt="The Ballroom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)" }}>The</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>Ballroom</p>
              </div>
            </div>
          </div>

          {/* Bottom right */}
          <div className="rw-detail__gallery-cell" style={{ borderRadius: "0 0 10px 0", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80" alt="Gallery 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* ── DREAM TEAM ── */}
      <div className="rw-detail__dream-team">
        <div className="rw-detail__dream-team-inner">
          <h2>The Dream Team</h2>
          <div className="rw-detail__team-grid">
            {dreamTeam.map((member) => (
              <div key={member.name} className="rw-detail__team-card">
                <div className="rw-detail__team-avatar">
                  <img src={member.img} alt={member.name} />
                </div>
                <div>
                  <p className="rw-detail__team-role">{member.role}</p>
                  <p className="rw-detail__team-name">{member.name}</p>
                  <p className="rw-detail__team-sub">{member.sub}</p>
                  <a href="#" className="rw-detail__team-link">{member.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MORE STORIES ── */}
      <div className="rw-detail__more">
        <div className="rw-detail__more-header">
          <h2 className="rw-detail__more-title">More Stories You'll Love</h2>
          <a href="/real-weddings" className="rw-detail__more-link">View All Stories</a>
        </div>
        <div className="rw-detail__more-grid">
          {moreStories.map((s) => (
            <div key={s.name} className="rw-detail__more-card">
              <div className="rw-detail__more-card__img">
                <img src={s.img} alt={s.name} />
                <span
                  className="rw-detail__more-card__cat"
                  style={{ background: s.catBg, color: s.catColor }}
                >
                  {s.cat}
                </span>
              </div>
              <p className="rw-detail__more-card__name">{s.name}</p>
              <p className="rw-detail__more-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="blog-footer">
        <div className="blog-footer__inner">
          <div className="blog-footer__grid">
            <div>
              <span className="blog-footer__logo">ShadiSthal</span>
              <p className="blog-footer__desc">India's premier wedding editorial platform, dedicated to preserving heritage through modern storytelling.</p>
              <div className="blog-footer__social">
                {["↗", "📷", "▶"].map((icon, i) => (
                  <button key={i} className="blog-footer__social-btn">{icon}</button>
                ))}
              </div>
            </div>
            {[
              { title: "Navigation", items: ["About Us", "Press Enquiries", "Editorial Policy"] },
              { title: "Legal", items: ["Privacy", "Terms of Service"] },
              { title: "Contact", items: ["Editorial HQ: New Delhi", "hello@shadisthal.com"] },
            ].map(({ title, items }) => (
              <div key={title} className="blog-footer__col">
                <p className="blog-footer__col-title">{title}</p>
                <ul>{items.map(i => <li key={i}><a href="#">{i}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="blog-footer__bottom">© 2024 ShadiSthal Editorial. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}