"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { ReactElement } from "react";

interface Vendor {
  id: number;
  category: string;
  name: string;
  rating: number;
  quote: string;
  price: string;
  badge: string | null;
  badgeColor?: string;
  img: string;
}

const vendorData: Vendor[] = [
  {
    id: 1,
    category: "Fine Art Photography",
    name: "Royal Frames Studio",
    rating: 4.9,
    quote: '"Capturing the soul of heritage weddings through a timeless cinematic lens."',
    price: "₹2,50,000",
    badge: "Verified Professional",
    badgeColor: "#D4A017",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
  },
  {
    id: 2,
    category: "Traditional & Documentary",
    name: "Heritage Hues",
    rating: 4.7,
    quote: '"Honoring ancestral traditions through vivid storytelling and organic moments."',
    price: "₹1,80,000",
    badge: null,
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
  },
  {
    id: 3,
    category: "Editorial & Modern",
    name: "Vogue Wedding Co.",
    rating: 5.0,
    quote: '"For the modern couple seeking a high-fashion aesthetic and minimalist grace."',
    price: "₹4,20,000",
    badge: null,
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  },
  {
    id: 4,
    category: "Candid & Artistic",
    name: "The Bloom Studio",
    rating: 4.8,
    quote: '"Focusing on the quiet emotions and delicate details that make your day unique."',
    price: "₹1,50,000",
    badge: null,
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
  },
];

const categories = ["Photographers", "Makeup Artists", "Decorators"];

export default function VendorsPage(): ReactElement {
  const [selectedCat, setSelectedCat] = useState<string>("Photographers");
  const [city, setCity] = useState<string>("Udaipur");
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <div className="vendors-page">
      {/* Global Header */}
      <Header />

      {/* Main Body */}
      <div className="vendors-page__body">
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <p className="filter-sidebar__title">Filters</p>

          {/* Category */}
          <div className="filter-group">
            <p className="filter-group__label">Category</p>
            {categories.map((cat) => (
              <div key={cat} className="filter-checkbox" onClick={() => setSelectedCat(cat)}>
                <div
                  className={`filter-checkbox__box ${
                    selectedCat === cat
                      ? "filter-checkbox__box--checked"
                      : "filter-checkbox__box--unchecked"
                  }`}
                >
                  {selectedCat === cat && (
                    <svg width="9" height="9" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="filter-checkbox__text">{cat}</span>
              </div>
            ))}
          </div>

          <hr className="filter-divider" />

          {/* City */}
          <div className="filter-group">
            <p className="filter-group__label">City</p>
            <select className="filter-select" value={city} onChange={(e) => setCity(e.target.value)}>
              <option>Udaipur</option>
              <option>Delhi NCR</option>
              <option>Mumbai</option>
              <option>Jaipur</option>
            </select>
          </div>

          <hr className="filter-divider" />

          {/* Price Range */}
          <div className="filter-group">
            <p className="filter-group__label">Price Range</p>
            <div className="price-track">
              <div className="price-track__fill" />
              <div className="price-track__thumb" style={{ left: 0 }} />
              <div className="price-track__thumb" style={{ left: "70%" }} />
            </div>
            <div className="price-labels">
              <span>₹50K</span>
              <span className="active">₹5L+</span>
            </div>
          </div>

          <hr className="filter-divider" />

          {/* Features */}
          <div className="filter-group">
            <p className="filter-group__label">Features</p>
            <div className="feature-tags">
              <span className="feature-tag feature-tag--active">WhatsApp</span>
              <span className="feature-tag feature-tag--active">Verified</span>
            </div>
          </div>

          <button className="apply-filters-btn">Apply Filters</button>

          {/* Collection card */}
          <div className="collection-card">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80"
              alt="Collection"
            />
            <div className="collection-card__overlay">
              <p className="collection-card__label">Elite Curation</p>
              <p className="collection-card__title">Heritage Venues Collection</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="vendors-main">
          <div className="vendors-header">
            <h1 className="vendors-header__title">Artisan Photographers</h1>
            <p className="vendors-header__sub">Discover 128 curated storytellers for your royal union.</p>
          </div>

          {/* Toolbar */}
          <div className="vendors-header__toolbar">
            <div className="view-toggle">
              <button className="view-toggle__btn view-toggle__btn--active">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
                </svg>
              </button>
              <button className="view-toggle__btn">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </button>
            </div>
            <div className="sort-dropdown">
              <span>SORT BY:</span>
              <select className="sort-select">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* Vendor Cards Grid */}
          <div className="vendors-grid">
            {vendorData.map((v) => (
              <div key={v.id} className="vendor-card">
                <div className="vendor-card__img">
                  <img src={v.img} alt={v.name} />
                  {v.badge && (
                    <div className="vendor-card__badge">
                      <span className="vendor-card__badge-text" style={{ color: v.badgeColor || "#fff" }}>
                        ✓ {v.badge}
                      </span>
                    </div>
                  )}
                  <button className="vendor-card__wishlist">
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth={2}>
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
                <div className="vendor-card__body">
                  <p className="vendor-card__category">{v.category}</p>
                  <div className="vendor-card__name-row">
                    <h3 className="vendor-card__name">{v.name}</h3>
                    <span className="vendor-card__rating">★ {v.rating}</span>
                  </div>
                  <p className="vendor-card__quote">{v.quote}</p>
                  <div className="vendor-card__footer">
                    <div>
                      <p className="vendor-card__starting-label">Starting From</p>
                      <p className="vendor-card__price">{v.price}</p>
                    </div>
                    <div className="vendor-card__footer-btns">
                      <label className="vendor-card__compare">
                        <input type="checkbox" /> Compare
                      </label>
                      <Link href="/vendors/heritage-frames" className="btn-primary">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination__btn">‹</button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`pagination__btn ${activePage === p ? "pagination__btn--active" : ""}`}
                onClick={() => setActivePage(p)}
              >
                {p}
              </button>
            ))}
            <span className="pagination__dots">...</span>
            <button className="pagination__btn">12</button>
            <button className="pagination__btn">›</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__grid">
            <div>
              <span className="footer__brand-name">ShaadiSthal</span>
              <p className="footer__brand-tagline">
                "Curating elegance, documenting heritage, and celebrating the union of souls in regal splendor."
              </p>
            </div>
            {[
              { title: "Company", items: ["About Us", "Careers", "Privacy Policy", "Terms of Service"] },
              { title: "Support", items: ["Vendor Help Desk", "User Guidelines", "Contact Support", "FAQs"] },
              { title: "Connect", items: ["Instagram", "Pinterest", "Newsletter"] },
            ].map(({ title, items }) => (
              <div key={title} className="footer__col">
                <p className="footer__col-title">{title}</p>
                <ul>
                  {items.map((i) => (
                    <li key={i}>
                      <a href="#">{i}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__bottom">
            © 2024 ShaadiSthal Heritage Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}