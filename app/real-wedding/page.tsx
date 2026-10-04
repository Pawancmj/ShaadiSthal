
"use client";

import { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart, MapPin } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface Wedding {
  id: number;
  names: string;
  style: string;
  location: string;
  quote: string;
  img: string;
  imgHeight: string;
  slug: string;
  budget: string;
}

const weddings: Wedding[] = [
  {
    id: 1,
    names: "Anjali & Rohit",
    style: "Traditional Palace Wedding",
    location: "Udaipur, Rajasthan",
    quote:
      '"A three-day royal celebration that perfectly blended the architectural heritage of Mewar with contemporary luxury..."',
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85",
    imgHeight: "h-[320px]",
    slug: "anjali-rohit",
    budget: "₹75L+",
  },
  {
    id: 2,
    names: "Sara & Arjun",
    style: "Bohemian Beachside",
    location: "South Goa",
    quote:
      '"From the sunset vows on the shore to the barefoot reception party, this story captures the wild spirit of love."',
    img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=85",
    imgHeight: "h-[250px]",
    slug: "sara-arjun",
    budget: "₹25L – ₹75L",
  },
  {
    id: 3,
    names: "Meera & Kabir",
    style: "Modern Heritage Fusion",
    location: "Jaipur, Rajasthan",
    quote:
      '"Focusing on artisanal details and a palette of ivory and gold, Meera\'s wedding was a masterclass in modern minimalism."',
    img: "https://images.unsplash.com/photo-1614886137799-1bee2c31de25?w=900&q=85",
    imgHeight: "h-[380px]",
    slug: "meera-kabir",
    budget: "₹25L – ₹75L",
  },
  {
    id: 4,
    names: "Priya & Sid",
    style: "Colonial Garden Soirée",
    location: "Lutyens' Delhi",
    quote:
      '"An intimate garden wedding celebrating heritage through vintage decor and a curated organic menu."',
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=900&q=85",
    imgHeight: "h-[270px]",
    slug: "priya-sid",
    budget: "Under ₹25L",
  },
];

const locations = [
  "All Locations",
  "Delhi NCR",
  "Udaipur",
  "Mumbai",
  "Jaipur",
  "South Goa",
];

const styles = [
  "Any Style",
  "Traditional",
  "Modern Heritage",
  "Destination",
  "Intimate",
];

const budgets = [
  "All Budgets",
  "Under ₹25L",
  "₹25L – ₹75L",
  "₹75L+",
];

export default function RealWeddingsPage(): ReactElement {
  const [location, setLocation] = useState("All Locations");
  const [style, setStyle] = useState("Any Style");
  const [budget, setBudget] = useState("All Budgets");

  const filteredWeddings = useMemo(() => {
    return weddings.filter((wedding) => {
      const locationMatch =
        location === "All Locations" ||
        wedding.location.includes(location);

      const styleMatch =
        style === "Any Style" ||
        wedding.style.toLowerCase().includes(style.toLowerCase());

      const budgetMatch =
        budget === "All Budgets" || wedding.budget === budget;

      return locationMatch && styleMatch && budgetMatch;
    });
  }, [location, style, budget]);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1160px] px-6 pb-11 pt-16 md:px-8 md:pt-20">
        <div className="max-w-[760px]">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
            The Digital Heirloom
          </p>

          <h1 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-[-0.035em] text-zinc-900 md:text-[3.6rem]">
            Real Wedding Stories
          </h1>

          <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-zinc-500 md:text-[13px]">
            Step into the curated journeys of couples who celebrated their
            love through the lens of heritage, modernity, and pure elegance.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-zinc-200">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-6 py-4 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Location */}
            <div className="min-w-[150px]">
              <label
                htmlFor="wedding-location"
                className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
              >
                City
              </label>

              <select
                id="wedding-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-9 w-full border border-zinc-200 bg-white px-3 text-[10px] text-zinc-700 outline-none transition focus:border-zinc-400"
              >
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Style */}
            <div className="min-w-[150px]">
              <label
                htmlFor="wedding-style"
                className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
              >
                Wedding Style
              </label>

              <select
                id="wedding-style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="h-9 w-full border border-zinc-200 bg-white px-3 text-[10px] text-zinc-700 outline-none transition focus:border-zinc-400"
              >
                {styles.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="min-w-[150px]">
              <label
                htmlFor="wedding-budget"
                className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
              >
                Budget
              </label>

              <select
                id="wedding-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="h-9 w-full border border-zinc-200 bg-white px-3 text-[10px] text-zinc-700 outline-none transition focus:border-zinc-400"
              >
                {budgets.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <Link
            href="/real-wedding/submit"
            className="group inline-flex h-9 shrink-0 items-center justify-center gap-2 bg-[#C8102E] px-4 text-[8px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#a20d25]"
          >
            Submit Your Story
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Wedding Stories */}
      <main className="mx-auto max-w-[1160px] px-6 py-11 md:px-8 md:py-14">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Curated Celebrations
            </p>

            <h2 className="font-serif text-[1.55rem] font-medium tracking-[-0.02em] text-zinc-900">
              Stories of Forever
            </h2>
          </div>

          <p className="text-[9px] text-zinc-400">
            {filteredWeddings.length}{" "}
            {filteredWeddings.length === 1 ? "story" : "stories"}
          </p>
        </div>

        {filteredWeddings.length > 0 ? (
          <div className="grid gap-x-5 gap-y-10 md:grid-cols-2">
            {filteredWeddings.map((wedding) => (
              <Link
                key={wedding.id}
                href={`/real-wedding/${wedding.slug}`}
                className="group block"
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-xl bg-zinc-100 ${wedding.imgHeight}`}
                >
                  <img
                    src={wedding.img}
                    alt={wedding.names}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Save ${wedding.names}`}
                    onClick={(e) => e.preventDefault()}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#C8102E] shadow-sm transition-transform duration-300 hover:scale-105"
                  >
                    <Heart className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </button>

                  {/* Image label */}
                  <div className="absolute bottom-4 left-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Real Wedding
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      {wedding.names}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <h3 className="font-serif text-[21px] font-medium leading-tight tracking-[-0.02em] text-zinc-900 transition-colors duration-300 group-hover:text-[#C8102E]">
                    {wedding.names}
                  </h3>

                  <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500">
                    {wedding.style}
                  </p>

                  <p className="mt-2 flex items-center gap-1.5 text-[9px] text-zinc-400">
                    <MapPin className="h-3 w-3" strokeWidth={1.8} />
                    {wedding.location}
                  </p>

                  <p className="mt-3 max-w-[520px] font-serif text-[13px] italic leading-5 text-zinc-500">
                    {wedding.quote}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]">
                    Read Their Story
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] items-center justify-center border border-zinc-200 text-center">
            <div>
              <p className="font-serif text-xl text-zinc-800">
                No stories found
              </p>

              <p className="mt-2 text-[11px] text-zinc-400">
                Try adjusting your filters to discover more celebrations.
              </p>

              <button
                type="button"
                onClick={() => {
                  setLocation("All Locations");
                  setStyle("Any Style");
                  setBudget("All Budgets");
                }}
                className="mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Monthly Spotlight */}
        <section className="mt-16 grid overflow-hidden rounded-xl bg-[#f2eee8] md:grid-cols-[0.95fr_1.05fr]">
          <div className="h-[280px] md:h-[360px]">
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=85"
              alt="Mehndi hands"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
              Monthly Spotlight
            </p>

            <h2 className="mt-3 max-w-[500px] font-serif text-[1.8rem] font-medium leading-[1.08] tracking-[-0.025em] text-zinc-900 md:text-[2.25rem]">
              Beyond the Frames:
              <br />
              <span className="italic text-zinc-600">
                The Curated Collective
              </span>
            </h2>

            <p className="mt-4 max-w-[480px] text-[11px] leading-5 text-zinc-500">
              Each wedding story on ShaadiSthal is more than a gallery—it&apos;s
              an editorial archive of emotions, vendors, and styling secrets
              that can inspire your own legacy.
            </p>

            <Link
              href="/inspiration"
              className="group mt-6 inline-flex w-fit items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#C8102E]"
            >
              Explore the Editorials
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Closing editorial */}
        <section className="mt-16 border-t border-zinc-200 pt-12 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Your celebration could be next
          </p>

          <h2 className="mx-auto mt-3 max-w-[600px] font-serif text-[1.6rem] leading-tight tracking-[-0.02em] text-zinc-800 md:text-[2rem]">
            Every wedding leaves behind a story worth remembering.
          </h2>

          <Link
            href="/real-wedding/submit"
            className="group mt-5 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#C8102E]"
          >
            Share Your Story
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

