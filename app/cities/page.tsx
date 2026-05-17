import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cities } from "../data/cities";

export default function CitiesPage(): React.ReactElement {
  return (
    <main className="cities-page">
      <Header />

      <section className="cities-hero">
        <p className="cities-hero__eyebrow">Explore Destinations</p>
        <div className="cities-hero__content">
          <h1>Discover Wedding Cities</h1>
          <p>
            Explore India's most luxurious wedding destinations and discover
            curated venues crafted for unforgettable celebrations.
          </p>
        </div>
      </section>

      <section className="cities-grid-wrap" aria-label="Wedding cities">
        <div className="cities-grid">
          {cities.map((city) => (
            <Link
              className="city-card"
              key={city.name}
              href={`/venues?city=${encodeURIComponent(city.name)}`}
            >
              <div className="city-card__image">
                <img src={city.image} alt={`${city.name} wedding venues`} />
                <div className="city-card__overlay" />
                <span className="city-card__region">{city.region}</span>
              </div>
              <div className="city-card__body">
                <div>
                  <h2>{city.name}</h2>
                  <p>{city.description}</p>
                </div>
                <span>{city.venues}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
