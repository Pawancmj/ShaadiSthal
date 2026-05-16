"use client";
import Header from "../components/Header";
import Link from "next/link";
import { ReactElement } from "react";

const venues = [
  {
    id: 1,
    name: "Taj Lake Palace",
    nameDark: false,
    location: "Udaipur, Rajasthan",
    badge: "Editor's Choice",
    badgeType: "red",
    bookBtn: "red",
    price: "₹4,500",
    capacity: "300 – 800 Guests",
    rating: "4.9",
    venueType: "Heritage",
    venueTypeStyle: "pink",
    amenities: [
      { icon: "❄️", label: "AC", active: true },
      { icon: "🏊", label: "Pool", active: true },
      { icon: "🅿️", label: "Parking", active: true },
      { icon: "🍷", label: "Alcohol", active: true },
    ],
    img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=500&q=80",
    highlighted: true,
  },
  {
    id: 2,
    name: "The Oberoi Udaivilas",
    nameDark: true,
    location: "Udaipur, Rajasthan",
    badge: null,
    bookBtn: "outline",
    price: "₹5,200",
    capacity: "500 – 1200 Guests",
    rating: "5.0",
    venueType: "Resort",
    venueTypeStyle: "gray",
    amenities: [
      { icon: "❄️", label: "AC", active: true },
      { icon: "🏊", label: "Pool", active: true },
      { icon: "🅿️", label: "Parking", active: true },
      { icon: "🍷", label: "Alcohol", active: false },
    ],
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80",
    highlighted: false,
  },
  {
    id: 3,
    name: "Rambagh Palace",
    nameDark: true,
    location: "Jaipur, Rajasthan",
    badge: "Best Value",
    badgeType: "gold",
    bookBtn: "outline",
    price: "₹3,800",
    capacity: "100 – 600 Guests",
    rating: "4.8",
    venueType: "Palace",
    venueTypeStyle: "gray",
    amenities: [
      { icon: "❄️", label: "AC", active: true },
      { icon: "🏊", label: "Pool", active: false },
      { icon: "🅿️", label: "Parking", active: true },
      { icon: "🍷", label: "Alcohol", active: true },
    ],
    img: "https://images.unsplash.com/photo-1561908818-8a37f16ef3c2?w=500&q=80",
    highlighted: false,
  },
];

const rowLabels = ["Starting Price", "Guest Capacity", "Guest Rating", "Venue Type", "Key Amenities"];

export default function ComparisonPage(): ReactElement {
  return (
    <div className="comparison-page">
      <Header />

      <div className="comparison-page__body">
        {/* Page Header */}
        <div className="comparison-page__header">
          <div>
            <p className="comparison-page__tag">Curated Selection</p>
            <h1 className="comparison-page__title">Venue Comparison</h1>
            <p className="comparison-page__desc">
              Side-by-side analysis of India's most prestigious wedding destinations. Select your favorites to find the perfect setting for your digital heirloom.
            </p>
          </div>
          <div className="comparison-page__actions">
            <button className="comp-btn-clear">✕ Clear All</button>
            <button className="comp-btn-add">+ Add More</button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comp-table">

          {/* Labels Column */}
          <div className="comp-col comp-labels">
            {rowLabels.map((label) => (
              <div key={label} className="comp-label-row">{label}</div>
            ))}
          </div>

          {/* Venue Columns */}
          {venues.map((v) => (
            <div key={v.id} className={`comp-col comp-venue ${v.highlighted ? "comp-venue--highlighted" : ""}`}>
              {/* Image */}
              <div className="comp-venue__img">
                <img src={v.img} alt={v.name} />
                {v.badge && (
                  <span className={`comp-venue__badge comp-venue__badge--${v.badgeType}`}>
                    {v.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="comp-venue__info">
                <h3 className={`comp-venue__name ${v.nameDark ? "comp-venue__name--dark" : ""}`}>{v.name}</h3>
                <p className="comp-venue__location">{v.location}</p>
              </div>

              <button className={`comp-venue__book-btn comp-venue__book-btn--${v.bookBtn}`}>
                Book Tour
              </button>

              {/* Price */}
              <div className="comp-data-row">
                <div>
                  <p className="comp-data-row__price">{v.price}<span>/plate</span></p>
                </div>
              </div>

              {/* Capacity */}
              <div className="comp-data-row">
                <p className="comp-data-row__capacity">{v.capacity}</p>
              </div>

              {/* Rating */}
              <div className="comp-data-row">
                <p className="comp-data-row__rating">
                  {v.rating} <span className="comp-data-row__star">★</span>
                </p>
              </div>

              {/* Venue Type */}
              <div className="comp-data-row">
                <span className={`comp-venue-type-badge comp-venue-type-badge--${v.venueTypeStyle}`}>
                  {v.venueType}
                </span>
              </div>

              {/* Amenities */}
              <div className="comp-data-row">
                <div className="comp-amenities">
                  {v.amenities.map((a) => (
                    <div key={a.label} className={`comp-amenity ${!a.active ? "comp-amenity--faded" : ""}`}>
                      <span style={{ fontSize: "0.9rem" }}>{a.icon}</span>
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Add Venue Column */}
          <div className="comp-col comp-add-col">
            <button className="comp-add-btn">+</button>
            <p className="comp-add-label">Add Venue</p>
          </div>
        </div>

        {/* Royal Difference */}
        <div className="royal-difference">
          <h2 className="royal-difference__title">The Royal Difference</h2>
          <div className="royal-difference__grid">
            {/* Image card */}
            <div className="royal-diff-card">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Concierge" />
              <div className="royal-diff-card__overlay" />
              <div className="royal-diff-card__text">
                <p className="royal-diff-card__tag">Hospitality</p>
                <h3 className="royal-diff-card__title">Concierge Service</h3>
                <p className="royal-diff-card__desc">Experience world-class service that treats every guest like royalty from the moment of arrival.</p>
              </div>
            </div>

            {/* Gold card */}
            <div className="royal-diff-card--gold">
              <p className="royal-diff-card__icon">✓</p>
              <h3 className="royal-diff-card__title">Certified Luxury</h3>
              <p className="royal-diff-card__desc">Each venue in our comparison suite has been personally vetted for 5-star hygiene, service, and safety standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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