"use client";
import Header from "../components/Header";
import Link from "next/link";
import { ReactElement } from "react";
import Footer from "../components/Footer";

interface Wedding {
  id: number;
  names: string;
  style: string;
  location: string;
  quote: string;
  img: string;
  imgHeight: number;
  slug: string;
}

const weddings: Wedding[] = [
  {
    id: 1,
    names: "Anjali & Rohit",
    style: "Traditional Palace Wedding",
    location: "Udaipur, Rajasthan",
    quote: '"A three-day royal celebration that perfectly blended the architectural heritage of Mewar with contemporary luxury..."',
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80",
    imgHeight: 280,
    slug: "anjali-rohit",
  },
  {
    id: 2,
    names: "Sara & Arjun",
    style: "Bohemian Beachside",
    location: "South Goa",
    quote: '"From the sunset vows on the shore to the barefoot reception party, this story captures the wild spirit of love."',
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=80",
    imgHeight: 200,
    slug: "sara-arjun",
  },
  {
    id: 3,
    names: "Meera & Kabir",
    style: "Modern Heritage Fusion",
    location: "Jaipur, Rajasthan",
    quote: '"Focusing on artisanal details and a palette of ivory and gold, Meera\'s wedding was a masterclass in modern minimalism."',
    img: "https://images.unsplash.com/photo-1614886137799-1bee2c31de25?w=700&q=80",
    imgHeight: 340,
    slug: "meera-kabir",
  },
  {
    id: 4,
    names: "Priya & Sid",
    style: "Colonial Garden Soirée",
    location: "Lutyens' Delhi",
    quote: '"An intimate garden wedding celebrating heritage through vintage decor and a curated organic menu."',
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=700&q=80",
    imgHeight: 220,
    slug: "priya-sid",
  },
];

export default function RealWeddingsPage(): ReactElement {
  return (
    <div className="real-weddings-page">
      <Header />

      {/* Hero */}
      <div className="rw-hero">
        <p className="rw-hero__tag">The Digital Heirloom</p>
        <h1 className="rw-hero__title">Real Wedding Stories</h1>
        <p className="rw-hero__desc">
          Step into the curated journeys of couples who celebrated their love through the lens of heritage, modernity, and pure elegance.
        </p>
      </div>

      {/* Filters */}
      <div className="rw-filters">
        <div className="rw-filters__left">
          <div className="rw-filter-group">
            <span className="rw-filter-select__label">City</span>
            <select className="rw-filter-select">
              <option>All Locations</option>
              <option>Delhi NCR</option>
              <option>Udaipur</option>
              <option>Mumbai</option>
              <option>Jaipur</option>
            </select>
          </div>
          <div className="rw-filter-group">
            <span className="rw-filter-select__label">Wedding Style</span>
            <select className="rw-filter-select">
              <option>Any Style</option>
              <option>Traditional</option>
              <option>Modern Heritage</option>
              <option>Destination</option>
              <option>Intimate</option>
            </select>
          </div>
          <div className="rw-filter-group">
            <span className="rw-filter-select__label">Budget</span>
            <select className="rw-filter-select">
              <option>All Budgets</option>
              <option>Under ₹25L</option>
              <option>₹25L – ₹75L</option>
              <option>₹75L+</option>
            </select>
          </div>
        </div>
        <button className="rw-submit-btn">
          Submit Your Story
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Wedding Cards Grid */}
      <div className="rw-grid">
        {weddings.map((w) => (
          <Link key={w.id} href={`/real-wedding/${w.slug}`} style={{ textDecoration: "none" }}>
            <div className="rw-card">
              <div className="rw-card__img" style={{ height: w.imgHeight }}>
                <img src={w.img} alt={w.names} style={{ height: w.imgHeight }} />
                <button className="rw-card__wishlist" onClick={e => e.preventDefault()}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth={2}>
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="rw-card__body">
                <h3 className="rw-card__name">{w.names}</h3>
                <p className="rw-card__style">{w.style}</p>
                <p className="rw-card__location">
                  <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {w.location}
                </p>
                <p className="rw-card__quote">{w.quote}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Feature spotlight */}
      <div className="rw-feature">
        <div className="rw-feature__img">
          <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=700&q=80" alt="Mehndi hands" />
        </div>
        <div className="rw-feature__content">
          <p className="rw-feature__tag">Monthly Spotlight</p>
          <h2 className="rw-feature__title">Beyond the Frames: The Curated Collective</h2>
          <p className="rw-feature__desc">
            Each wedding story on ShadiSthal is more than a gallery—it's an editorial archive of emotions, vendors, and styling secrets that can inspire your own legacy.
          </p>
          <a href="#" className="rw-feature__link">Explore the Editorials</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
