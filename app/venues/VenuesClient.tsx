"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { CSSProperties, ReactElement, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cities } from "../data/cities";
import { DEFAULT_CITY, cityAliases, venues } from "../data/venues";
import type { Venue } from "../data/venues";

const capacities = ["100-300", "300-600", "600-1000", "1000+"];
const cityFilterOptions = [DEFAULT_CITY, ...cities.map((city) => city.name)];

export default function VenuesClient(): ReactElement {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get("city")?.trim();
  const selectedCity = cityFromUrl || DEFAULT_CITY;
  const [capacity, setCapacity] = useState<string>("300-600");

  const filteredVenues = useMemo(
    () => venues.filter((venue) => venueMatchesCity(venue.city, selectedCity)),
    [selectedCity],
  );

  const selectedCompareVenue = filteredVenues[0] ?? venues[0];
  const selectedCount = filteredVenues.length > 0 ? 1 : 0;

  const handleCityChange = (city: string) => {
    const href = city === DEFAULT_CITY ? "/venues" : `/venues?city=${encodeURIComponent(city)}`;
    router.replace(href, { scroll: false });
  };

  return (
    <div className="venues-page" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      <div className="venues-page__body">
        <div className="venues-page__header">
          <p className="venues-page__tag">Curated Experiences</p>
          <h1 className="venues-page__title">Discover the Grandest Venues in {selectedCity}</h1>
          <p className="venues-page__meta">
            {filteredVenues.length.toLocaleString()} RESULTS FOUND &nbsp;|&nbsp; SORTED BY: POPULARITY
          </p>
        </div>

        <div className="venues-layout">
          <aside className="filter-sidebar">
            <FilterGroup title="Location (City)">
              {cityFilterOptions.map((city) => (
                <button
                  className="venue-city-filter"
                  key={city}
                  type="button"
                  onClick={() => handleCityChange(city)}
                >
                  <span
                    className={`filter-checkbox__box ${
                      selectedCity === city ? "filter-checkbox__box--checked" : "filter-checkbox__box--unchecked"
                    }`}
                  >
                    {selectedCity === city && (
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span className="filter-checkbox__text">{city}</span>
                </button>
              ))}
            </FilterGroup>

            <hr className="filter-divider" />

            <FilterGroup title="Price Range (INR)">
              <div className="price-track">
                <div className="price-track__fill" />
                <div className="price-track__thumb" style={{ left: "0%" }} />
                <div className="price-track__thumb" style={{ left: "70%" }} />
              </div>
              <div className="price-labels">
                <span>Rs. 50K</span>
                <span className="active">Rs. 15L+</span>
                <span>Rs. 50L+</span>
              </div>
            </FilterGroup>

            <hr className="filter-divider" />

            <FilterGroup title="Guest Capacity">
              <div className="capacity-grid">
                {capacities.map((cap) => (
                  <button
                    className={`capacity-btn ${capacity === cap ? "capacity-btn--active" : ""}`}
                    key={cap}
                    type="button"
                    onClick={() => setCapacity(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </FilterGroup>

            <hr className="filter-divider" />

            <FilterGroup title="Minimum Rating">
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} style={{ color: "#f5a623", fontSize: "1.1rem" }}>
                    &#9733;
                  </span>
                ))}
                <span style={{ color: "#ddd", fontSize: "1.1rem" }}>&#9733;</span>
                <span style={{ fontSize: "0.78rem", color: "#555", marginLeft: 4 }}>4.0+</span>
              </div>
            </FilterGroup>
          </aside>

          <div className="venues-grid-area">
            {filteredVenues.length === 0 ? (
              <div className="venues-empty">
                <p>No venues found for {selectedCity} yet.</p>
                <button type="button" onClick={() => handleCityChange(DEFAULT_CITY)}>
                  View Delhi NCR venues
                </button>
              </div>
            ) : (
              <>
                <div className="venues-row-2">
                  {filteredVenues
                    .filter((venue) => venue.layout === "tall")
                    .map((venue) => (
                      <VenueCard key={venue.id} venue={venue} />
                    ))}
                </div>

                {filteredVenues
                  .filter((venue) => venue.layout === "wide")
                  .map((venue) => (
                    <VenueCard key={venue.id} venue={venue} wide />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>

      <CompareBar venue={selectedCompareVenue} selectedCount={selectedCount} />
      <Footer />
    </div>
  );
}

function venueMatchesCity(venueCity: string, selectedCity: string): boolean {
  const normalizedVenueCity = venueCity.toLowerCase();
  const matchCities = cityAliases[selectedCity] ?? [selectedCity];

  return matchCities.some((city) => city.toLowerCase() === normalizedVenueCity);
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }): ReactElement {
  return (
    <div className="filter-group">
      <div className="filter-group__label">
        <span>{title}</span>
        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2.5}>
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {children}
    </div>
  );
}

function VenueCard({ venue, wide = false }: { venue: Venue; wide?: boolean }): ReactElement {
  return (
    <article className={`venue-card ${wide ? "venue-card--wide" : ""}`}>
      <div className="venue-card__img">
        <img src={venue.img} alt={venue.name} />
        {venue.tag && (
          <span
            className="venue-card__badge"
            style={{ background: venue.tagBg ?? "#fff0f0", color: venue.tagColor ?? "#C8102E" }}
          >
            {venue.tag}
          </span>
        )}
        {!wide && (
          <div className="venue-card__actions">
            <button className="venue-card__icon-btn" type="button" aria-label={`Save ${venue.name}`}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#C8102E" strokeWidth={2}>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
            <button className="venue-card__icon-btn venue-card__icon-btn--pink" type="button" aria-label={`Compare ${venue.name}`}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                <path strokeLinecap="round" d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="venue-card__info">
        <div className="venue-card__name-row">
          <h2 className="venue-card__name">{venue.name}</h2>
          <span className="venue-card__rating">&#9733; {venue.rating}</span>
        </div>
        <p className="venue-card__location">
          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {venue.location}
        </p>
        {wide && venue.description && <p className="venue-card__desc">{venue.description}</p>}
        <p className="venue-card__starting">Starting From</p>
        <div className="venue-card__footer">
          <span className="venue-card__price">
            {venue.price}
            <span> /day</span>
          </span>
          <div className="venue-card__footer-btns">
            {wide ? (
              <button style={whatsAppBtnStyle} type="button">WhatsApp</button>
            ) : (
              <button className="venue-card__chat-btn" type="button" aria-label={`Chat with ${venue.name}`}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#555" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            )}
            <Link href="/venues/raj-palace" className="btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function CompareBar({ venue, selectedCount }: { venue: Venue; selectedCount: number }): ReactElement {
  return (
    <div className="compare-bar">
      <div className="compare-bar__thumbs">
        <div className="compare-bar__thumb">
          <img src={venue.img} alt="" />
        </div>
        <div className="compare-bar__add">+</div>
      </div>
      <div>
        <p className="compare-bar__label">Compare Venues</p>
        <p className="compare-bar__sub">{selectedCount} item selected (max 3)</p>
      </div>
      <div className="compare-bar__actions">
        <button className="compare-bar__clear" type="button">Clear All</button>
        <button className="btn-gold" type="button">Compare Now</button>
      </div>
    </div>
  );
}

const whatsAppBtnStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 6,
  color: "#444",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  padding: "7px 14px",
};
