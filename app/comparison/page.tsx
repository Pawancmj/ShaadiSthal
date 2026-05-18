"use client";
import Header from "../components/Header";
import Link from "next/link";
import { ReactElement } from "react";
import Footer from "../components/Footer";
import { useCompare } from "../hooks/useCompare";
import { venues as allVenues } from "../data/venues";
import { useRouter } from "next/navigation";

function getComparisonVenue(id: number) {
  const v = allVenues.find((v) => v.id === id);
  if (!v) return null;

  return {
    id: v.id,
    name: v.name,
    nameDark: false,
    location: v.location,
    badge: v.tag,
    badgeType: "red",
    bookBtn: "outline",
    price: v.price,
    capacity: "200 – 600 Guests",
    rating: String(v.rating),
    venueType: "Premium",
    venueTypeStyle: "pink",
    amenities: [
      { icon: "❄️", label: "AC", active: true },
      { icon: "🏊", label: "Pool", active: Math.random() > 0.5 },
      { icon: "🅿️", label: "Parking", active: true },
      { icon: "🍷", label: "Alcohol", active: Math.random() > 0.5 },
    ],
    img: v.img,
    highlighted: false,
  };
}

const rowLabels = ["Starting Price", "Guest Capacity", "Guest Rating", "Venue Type", "Key Amenities"];

export default function ComparisonPage(): ReactElement {
  const router = useRouter();
  const { compareIds, clearCompare, toggleCompare, MAX_COMPARE } = useCompare();
  
  const displayVenues = compareIds.map(getComparisonVenue).filter(Boolean) as NonNullable<ReturnType<typeof getComparisonVenue>>[];

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
            <button className="comp-btn-clear" onClick={clearCompare}>✕ Clear All</button>
            <button className="comp-btn-add" onClick={() => router.push('/venues')}>+ Add More</button>
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
          {displayVenues.map((v) => (
            <div key={v.id} className={`comp-col comp-venue ${v.highlighted ? "comp-venue--highlighted" : ""}`}>
              {/* Image */}
              <div className="comp-venue__img" style={{ position: 'relative' }}>
                <button 
                  onClick={() => toggleCompare(v.id)}
                  style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title="Remove from comparison"
                >✕</button>
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
          {displayVenues.length < MAX_COMPARE && (
            <div className="comp-col comp-add-col" onClick={() => router.push('/venues')} style={{ cursor: 'pointer' }}>
              <button className="comp-add-btn">+</button>
              <p className="comp-add-label">Add Venue</p>
            </div>
          )}
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
      <Footer />
    </div>
  );
}
