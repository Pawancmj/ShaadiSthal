"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
const articles = [
  {
    id: 1,
    cat: "Jewelry Guide",
    catColor: "#D4A017",
    catBg: "#fff8e1",
    title: "The Alchemy of Heritage Gold: A Temple Jewelry Guide",
    desc: "Discover the centuries-old craftsmanship behind South India's temple jewelry and how to style it for a contemporary royal wedding look.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    slug: "temple-jewelry-guide",
  },
  {
    id: 2,
    cat: "Decor Trends",
    catColor: "#fff",
    catBg: "#C8102E",
    title: "Minimalist Majesty: The New Era of Al-Fresco Celebrations",
    desc: "Why 'Less is More' is becoming the mantra for high-end heritage weddings this season, focusing on architectural light and botanical textures.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    slug: "minimalist-majesty",
  },
  {
    id: 3,
    cat: "Real Stories",
    catColor: "#fff",
    catBg: "#8B0000",
    title: "A Palace Affair: Meera & Rohan's Udaipur Union",
    desc: "From the vintage car arrival to the midnight lake-side pheras, step inside a three-day celebration of love at the City Palace.",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    slug: "palace-affair",
  },
  {
    id: 4,
    cat: "Traditions",
    catColor: "#D4A017",
    catBg: "#3a2000",
    title: "Decoding the Mehndi: Symbols and Secret Histories",
    desc: "",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    slug: "decoding-mehndi",
  },
];

const trendingStories = [
  { title: "Top 10 Royal Groom Wear Trends for 2025", read: "5 min read", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { title: "The Artisanal Mithai Renaissance", read: "4 min read", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=100&q=80" },
];

const editorPicks = [
  { cat: "Traditions", title: "The Sacred Threads: Understanding Wedding Textiles" },
  { cat: "Planning", title: "Managing Guest Lists with Royal Grace" },
];

const filterTabs = ["Traditions", "Decor Trends", "Jewelry Guide", "Real Stories", "Planning Tips"];

export default function InspirationPage() {
  const [activeTab, setActiveTab] = useState("Traditions");

  return (
    <div className="blog-page">
      <Header />

      {/* ── HERO SPLIT ── */}
      <div className="blog-hero">
        {/* Left - Featured article */}
        <div className="blog-hero__left">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Royal Journal" />
          <div className="blog-hero__overlay" />
          <div className="blog-hero__text">
            <span className="blog-hero__tag">Masterclass</span>
            <h1 className="blog-hero__title">The Royal Journal</h1>
            <p className="blog-hero__subtitle">"Curating the timeless aesthetics of heritage weddings for the modern visionary."</p>
            <Link href="/inspiration/temple-jewelry-guide" className="blog-hero__cta">
              Explore Featured Masterclass →
            </Link>
          </div>
        </div>

        {/* Right - Editorial note */}
        <div className="blog-hero__right">
          <h2 className="blog-hero__editorial-title">Editorial Note</h2>
          <p className="blog-hero__editorial-text">
            In this edition, we delve into the intricate weave of Banarasi silks and the modern evolution of the 'Muhurtham' ceremony.
          </p>
          <div className="blog-hero__editor">
            <img src="https://i.pravatar.cc/40?img=47" alt="Editor" className="blog-hero__editor-avatar" />
            <div>
              <p className="blog-hero__editor-name">Amara Singh</p>
              <p className="blog-hero__editor-role">Editor-in-Chief</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="blog-filters">
        <div className="blog-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`blog-filter-tab ${activeTab === tab ? "blog-filter-tab--active" : "blog-filter-tab--inactive"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="blog-search">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}>
            <circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
          <input type="text" placeholder="Search the Journal" />
        </div>
      </div>

      {/* ── BODY: ARTICLES + SIDEBAR ── */}
      <div className="blog-body">
        {/* Article grid */}
        <div className="blog-grid">
          {articles.map((a) => (
            <div key={a.id} className="article-card">
              <div className="article-card__img">
                <img src={a.img} alt={a.title} />
                <span className="article-card__cat" style={{ color: a.catColor, background: a.catBg }}>
                  {a.cat}
                </span>
              </div>
              <h3 className="article-card__title">{a.title}</h3>
              {a.desc && <p className="article-card__desc">{a.desc}</p>}
              <Link href={`/inspiration/${a.slug}`} className="article-card__read">
                READ MORE ›
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Trending Stories */}
          <div className="blog-sidebar__section">
            <p className="blog-sidebar__title">Trending Stories</p>
            {trendingStories.map((s) => (
              <div key={s.title} className="trending-item">
                <div className="trending-item__img">
                  <img src={s.img} alt={s.title} />
                </div>
                <div>
                  <p className="trending-item__title">{s.title}</p>
                  <p className="trending-item__read">{s.read}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe box */}
          <div className="blog-sidebar__section">
            <div className="subscribe-box">
              <h3 className="subscribe-box__title">Subscribe to The Digital Heirloom</h3>
              <p className="subscribe-box__desc">Weekly curations of wedding opulence, tradition, and exclusive vendor interviews delivered to your inbox.</p>
              <input type="email" placeholder="Email Address" className="subscribe-box__input" />
              <button className="subscribe-box__btn">SUBSCRIBE NOW</button>
            </div>
          </div>

          {/* Editor's Picks */}
          <div className="blog-sidebar__section">
            <p className="blog-sidebar__title">Editor's Picks</p>
            {editorPicks.map((p) => (
              <div key={p.title} className="editor-pick">
                <p className="editor-pick__cat">{p.cat}</p>
                <p className="editor-pick__title">{p.title}</p>
              </div>
            ))}
          </div>
        </aside>
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