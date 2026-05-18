import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ClipboardList,
  MapPin,
  MessageSquareText,
  RefreshCw,
  Save,
  Send,
  Share2,
} from "lucide-react";

const itinerary = [
  {
    day: "Day 1",
    title: "The Welcome & Mehndi",
    events: [
      ["10:00 AM", "Guest arrival and check-in at Heritage Suites"],
      ["04:00 PM", "Sun-kissed Mehndi Ceremony at Zenana Courtyard"],
      ["08:00 PM", "Intimate Welcome Dinner (Rajputana Theme)"],
    ],
  },
  {
    day: "Day 2",
    title: "Sangeet & Pheras",
    events: [
      ["11:00 AM", "Haldi Ritual & Traditional Folk Performances"],
      ["06:00 PM", "The Vows: Royal Pheras at the Central Gazebo"],
      ["10:00 PM", "Musical Gala & Celebration Dinner"],
    ],
  },
  {
    day: "Day 3",
    title: "The Grand Farewell",
    events: [
      ["09:00 AM", "Continental Farewell Brunch by the Lake"],
      ["12:00 PM", "Check-out & Gift Distribution"],
    ],
  },
];

const artisans = [
  {
    name: "The Heritage Frames",
    type: "Capturing timeless digital heirlooms with a cinematic royal touch.",
    meta: ["Jaipur Based", "₹2L/Day"],
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80",
  },
  {
    name: "Golden Petals",
    type: "Master decorators specializing in heritage palace transformations.",
    meta: ["Theme Expert", "Custom Pricing"],
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=700&q=80",
  },
  {
    name: "Royal Glow Studio",
    type: "Premium bridal artistry for the modern maharani.",
    meta: ["Airbrush Expert", "₹75K/Event"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80",
  },
];

export default function PlannerPage(): React.ReactElement {
  return (
    <main className="planner-page">
      <Header />

      <section className="planner-hero">
        <div className="planner-hero__media">
          <img
            src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1600&q=85"
            alt="Golden wedding decor"
          />
          <div className="planner-hero__veil" />
          <div className="planner-hero__content">
            <h1>Plan Your Dream Wedding with AI <span>💍</span></h1>
            <p>
              Experience the magic of effortless planning with our royal AI
              concierge. From palaces to photographers, we curate every detail
              of your digital heirloom.
            </p>
            <div className="planner-hero__actions">
              <a href="#planner-chat">Start Planning <span>✧</span></a>
              <a href="#planner-showcase">View Showcases</a>
            </div>
          </div>
        </div>
      </section>

      <section id="planner-chat" className="planner-console">
        <div className="planner-console__tabs">
          <button className="planner-console__tab planner-console__tab--active" type="button">
            <MessageSquareText aria-hidden="true" size={18} strokeWidth={2.2} />
            Chat with AI
          </button>
          <button className="planner-console__tab" type="button">
            <ClipboardList aria-hidden="true" size={18} strokeWidth={2.2} />
            Quick Form
          </button>
        </div>

        <div className="planner-console__body">
          <div className="planner-chat">
            <div className="planner-message planner-message--ai">
              <span>AI</span>
              <p>
                Namaste! I am your Royal Wedding Concierge. Tell me about your
                dream wedding vision or provide some details to get started.
              </p>
            </div>
            <div className="planner-message planner-message--user">
              <p>
                I&apos;m looking for a royal heritage wedding in Jaipur for 200
                guests. Budget is approximately 50 Lakhs.
              </p>
              <span>U</span>
            </div>
            <div className="planner-chat__input">
              <input placeholder="Ask anything about your royal wedding..." />
              <button type="button" aria-label="Send planner message">
                <Send aria-hidden="true" size={14} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <aside className="planner-blueprint">
            <h2>Wedding Blueprint</h2>
            <label>Location & Date</label>
            <div className="planner-blueprint__row">
              <input value="Jaipur, Rajasthan" readOnly />
              <input value="Nov 2024" readOnly />
            </div>
            <label>Budget Range</label>
            <select defaultValue="30-50">
              <option value="30-50">₹30L - ₹50L</option>
              <option value="50-75">₹50L - ₹75L</option>
              <option value="75+">₹75L+</option>
            </select>
            <label>Theme</label>
            <div className="planner-pills">
              <span>Royal Heritage</span>
              <span>Classic Gold</span>
              <span>Outdoor</span>
            </div>
            <label>Functions</label>
            <div className="planner-check-grid">
              {["Mehndi", "Sangeet", "Haldi", "Reception"].map((item) => (
                <label key={item}>
                  <input type="checkbox" defaultChecked />
                  {item}
                </label>
              ))}
            </div>
            <button type="button">Update Plan</button>
          </aside>
        </div>
      </section>

      <section id="planner-showcase" className="planner-proposal">
        <div className="planner-proposal__header">
          <div className="planner-section-heading">
            <p>Your Curated Experience</p>
            <h2>The Royal Rajasthan Proposal</h2>
          </div>
          <div className="planner-proposal__actions" aria-label="Proposal actions">
            <button type="button" aria-label="Refresh proposal">
              <RefreshCw aria-hidden="true" size={18} strokeWidth={2.2} />
            </button>
            <button type="button" aria-label="Save proposal">
              <Save aria-hidden="true" size={18} strokeWidth={2.2} />
            </button>
            <button type="button" aria-label="Share proposal">
              <Share2 aria-hidden="true" size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="planner-dashboard">
          <div className="planner-dashboard__main">
            <article className="planner-venue-card">
              <div className="planner-card-heading">
                <div>
                  <h3>Primary Venue Recommendation</h3>
                  <p><MapPin aria-hidden="true" size={12} strokeWidth={2} /> Jaipur, Rajasthan</p>
                </div>
                <span>98% Match</span>
              </div>
              <div className="planner-venue-card__body">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=80"
                  alt="City Palace Heritage Wings"
                />
                <div>
                  <h4>The City Palace Heritage Wings</h4>
                  <p>
                    Exclusive heritage access with sunset views of the Aravallis.
                    Accommodates up to 350 guests comfortably.
                  </p>
                  <ul>
                    <li>Traditional Shahi Swagat Entry</li>
                    <li>Outdoor Mandap Availability</li>
                  </ul>
                  <a href="/venues/raj-palace">Explore Venue Details →</a>
                </div>
              </div>
            </article>

            <div className="planner-moodboard">
              <div className="planner-moodboard__large">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                  alt="Floral wedding decor"
                />
                <span>Theme: Filigree & Florals</span>
              </div>
              <div className="planner-palette">
                <div>
                  <span style={{ background: "#cf005a" }} />
                  <span style={{ background: "#f2cf64" }} />
                  <span style={{ background: "#ead8d8" }} />
                </div>
                <p>Royal Palette</p>
              </div>
              <div className="planner-moodboard__small">
                <img
                  src="https://images.unsplash.com/photo-1595349603091-a15d03875865?w=600&q=80"
                  alt="Bridal lehenga"
                />
              </div>
            </div>
          </div>

          <aside className="planner-dashboard__side">
            <div className="planner-side-card">
              <h3>Budget Breakdown</h3>
              <div className="planner-donut">
                <div>
                  <span>Total</span>
                  <strong>₹50L</strong>
                </div>
              </div>
              <ul className="planner-budget-list">
                <li><span />Venue & Stay <strong>₹20L (40%)</strong></li>
                <li><span />Catering <strong>₹15L (30%)</strong></li>
                <li><span />Other Services <strong>₹15L (30%)</strong></li>
              </ul>
            </div>
            <div className="planner-side-card">
              <h3>Immediate Checklist</h3>
              {[
                ["Secure City Palace Booking", false],
                ["Draft Guest List (200)", true],
                ["Schedule Tasting Session", false],
                ["Finalize Royal Stationery", false],
              ].map(([item, checked]) => (
                <label className="planner-check-item" key={String(item)}>
                  <input type="checkbox" defaultChecked={Boolean(checked)} />
                  {item}
                </label>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="planner-itinerary">
        <h2>Wedding Itinerary</h2>
        <div className="planner-itinerary__grid">
          {itinerary.map((day) => (
            <article key={day.day} className="planner-itinerary-card">
              <span>{day.day}</span>
              <h3>{day.title}</h3>
              {day.events.map(([time, item]) => (
                <p key={`${day.day}-${time}`}>
                  <strong>{time}</strong>
                  {item}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="planner-artisans">
        <h2>Recommended Artisans</h2>
        <div className="planner-artisans__grid">
          {artisans.map((artisan) => (
            <article className="planner-artisan-card" key={artisan.name}>
              <img src={artisan.image} alt={artisan.name} />
              <div>
                <div className="planner-artisan-card__title">
                  <h3>{artisan.name}</h3>
                  <span>☆☆☆☆☆</span>
                </div>
                <p>{artisan.type}</p>
                <div className="planner-artisan-card__meta">
                  {artisan.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="planner-artisan-card__actions">
                  <a href="/vendors/heritage-frames">View Details</a>
                  <a href="/vendors/heritage-frames">Book Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
