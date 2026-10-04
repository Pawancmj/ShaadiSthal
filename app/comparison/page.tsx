"use client";

import { ReactElement, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, X, Star, MapPin, Check } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCompare } from "../hooks/useCompare";
import { getVenues } from "@/api/venue.api";

type ComparisonVenue = {
  id: number;
  name: string;
  location: string;
  badge?: string;
  price: string;
  capacity: string;
  rating: string;
  venueType: string;
  img: string;
  amenities: {
    label: string;
    active: boolean;
  }[];
};

const rowLabels = [
  "Starting Price",
  "Guest Capacity",
  "Guest Rating",
  "Venue Type",
  "Key Amenities",
];

export default function ComparisonPage(): ReactElement {
  const router = useRouter();

  const {
    compareIds,
    clearCompare,
    toggleCompare,
    MAX_COMPARE,
  } = useCompare();

  const [venues, setVenues] = useState<ComparisonVenue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchComparisonVenues = async () => {
      if (compareIds.length === 0) {
        setVenues([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await getVenues({
          page: 1,
          limit: 100,
        });

        if (cancelled) return;

        const apiVenues = res.data ?? [];

        const selectedVenues: ComparisonVenue[] = compareIds
          .map((id) => {
            const venue = apiVenues.find(
              (item: any) => Number(item.id) === Number(id),
            );

            if (!venue) return null;

            const amenities = [
              {
                label: "Indoor",
                active: Boolean(venue.indoor),
              },
              {
                label: "Outdoor",
                active: Boolean(venue.outdoor),
              },
              {
                label: "Parking",
                active: true,
              },
              {
                label: "Pool",
                active: false,
              },
            ];

            return {
              id: venue.id,
              name: venue.name,
              location: `${venue.city}, ${venue.state}`,
              badge: venue.category,
              price: `₹${Number(
                venue.pricePerPlate,
              ).toLocaleString("en-IN")}`,
              capacity: `${Number(
                venue.minGuests,
              ).toLocaleString("en-IN")} – ${Number(
                venue.maxGuests,
              ).toLocaleString("en-IN")} Guests`,
              rating: Number(venue.rating ?? 0).toFixed(1),
              venueType: venue.category,
              img: venue.primaryImage,
              amenities,
            };
          })
          .filter(Boolean) as ComparisonVenue[];

        setVenues(selectedVenues);
      } catch (err) {
        console.error("Failed to load comparison venues:", err);

        if (!cancelled) {
          setError(
            "Unable to load your selected venues. Please try again.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchComparisonVenues();

    return () => {
      cancelled = true;
    };
  }, [compareIds]);

  const displayVenues = useMemo(() => {
    return compareIds
      .map((id) =>
        venues.find(
          (venue) => Number(venue.id) === Number(id),
        ),
      )
      .filter(Boolean) as ComparisonVenue[];
  }, [compareIds, venues]);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />

      <main className="mx-auto max-w-[1160px] px-6 py-12 md:px-8 md:py-16">
        {/* Page Header */}
        <section className="flex flex-col gap-7 border-b border-zinc-200 pb-9 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px]">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
              Curated Selection
            </p>

            <h1 className="font-serif text-[2.45rem] font-medium leading-[1.05] tracking-[-0.035em] text-zinc-900 md:text-[3.4rem]">
              Venue Comparison
            </h1>

            <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-zinc-500 md:text-[13px]">
              Side-by-side analysis of India&apos;s most prestigious
              wedding destinations. Compare your favorites and find the
              perfect setting for your celebration.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={clearCompare}
              disabled={displayVenues.length === 0}
              className="inline-flex h-9 items-center gap-1.5 border border-zinc-200 bg-white px-3.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <X className="h-3 w-3" />
              Clear All
            </button>

            <button
              type="button"
              onClick={() => router.push("/venues")}
              className="inline-flex h-9 items-center gap-1.5 bg-[#C8102E] px-3.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#a20d25]"
            >
              <Plus className="h-3 w-3" />
              Add More
            </button>
          </div>
        </section>

        {/* Loading */}
        {loading ? (
          <section className="flex min-h-[430px] items-center justify-center border-b border-zinc-200">
            <div className="text-center">
              <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-zinc-200 border-t-[#C8102E]" />

              <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Loading Comparison
              </p>
            </div>
          </section>
        ) : error ? (
          <section className="flex min-h-[430px] items-center justify-center border-b border-zinc-200 text-center">
            <div className="max-w-[420px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                Something went wrong
              </p>

              <h2 className="mt-3 font-serif text-2xl font-medium text-zinc-800">
                Unable to load venues
              </h2>

              <p className="mt-3 text-[11px] leading-5 text-zinc-500">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 inline-flex h-9 items-center gap-2 bg-[#C8102E] px-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a20d25]"
              >
                Try Again
              </button>
            </div>
          </section>
        ) : displayVenues.length === 0 ? (
          /* Empty State */
          <section className="flex min-h-[430px] items-center justify-center border-b border-zinc-200 text-center">
            <div className="max-w-[420px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Your Selection
              </p>

              <h2 className="mt-3 font-serif text-2xl font-medium tracking-[-0.02em] text-zinc-800">
                Nothing to compare yet
              </h2>

              <p className="mt-3 text-[11px] leading-5 text-zinc-500">
                Add two or more venues to see their prices, capacity,
                ratings, and amenities side by side.
              </p>

              <button
                type="button"
                onClick={() => router.push("/venues")}
                className="mt-6 inline-flex h-9 items-center gap-2 bg-[#C8102E] px-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a20d25]"
              >
                Explore Venues
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </section>
        ) : (
          <>
            {/* Comparison Table */}
            <section className="mt-9 overflow-x-auto border border-zinc-200 bg-white">
              <div
                className="grid min-w-[760px]"
                style={{
                  gridTemplateColumns: `150px repeat(${displayVenues.length}, minmax(230px, 1fr)) ${
                    displayVenues.length < MAX_COMPARE
                      ? "170px"
                      : ""
                  }`,
                }}
              >
                {/* Labels Column */}
                <div className="border-r border-zinc-200 bg-[#f8f6f2]">
                  <div className="h-[238px] border-b border-zinc-200" />

                  {rowLabels.map((label) => (
                    <div
                      key={label}
                      className="flex min-h-[104px] items-center border-b border-zinc-200 px-5 last:border-b-0"
                    >
                      <span className="text-[8px] font-semibold uppercase leading-4 tracking-[0.13em] text-zinc-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Venue Columns */}
                {displayVenues.map((venue) => (
                  <div
                    key={venue.id}
                    className="border-r border-zinc-200 last:border-r-0"
                  >
                    {/* Venue Header */}
                    <div className="border-b border-zinc-200">
                      <div className="relative h-[165px] overflow-hidden bg-zinc-100">
                        <img
                          src={venue.img}
                          alt={venue.name}
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() =>
                            toggleCompare(venue.id)
                          }
                          aria-label={`Remove ${venue.name}`}
                          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                        >
                          <X className="h-3 w-3" />
                        </button>

                        {/* Badge */}
                        {venue.badge && (
                          <span className="absolute bottom-3 left-3 bg-[#C8102E] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-white">
                            {venue.badge}
                          </span>
                        )}
                      </div>

                      <div className="px-4 py-4">
                        <h3 className="font-serif text-[18px] font-medium leading-tight tracking-[-0.02em] text-zinc-900">
                          {venue.name}
                        </h3>

                        <p className="mt-1.5 flex items-center gap-1 text-[9px] text-zinc-400">
                          <MapPin className="h-2.5 w-2.5" />
                          {venue.location}
                        </p>

                        <button
                          type="button"
                          className="mt-4 h-8 w-full border border-[#C8102E] text-[8px] font-semibold uppercase tracking-[0.14em] text-[#C8102E] transition hover:bg-[#C8102E] hover:text-white"
                        >
                          Book Tour
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex min-h-[94px] items-center border-b border-zinc-200 px-4">
                      <p className="font-serif text-[20px] font-medium text-zinc-900">
                        {venue.price}

                        <span className="ml-1 font-sans text-[9px] font-normal text-zinc-400">
                          /plate
                        </span>
                      </p>
                    </div>

                    {/* Capacity */}
                    <div className="flex min-h-[94px] items-center border-b border-zinc-200 px-4">
                      <p className="text-[11px] text-zinc-600">
                        {venue.capacity}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex min-h-[94px] items-center border-b border-zinc-200 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-semibold text-zinc-800">
                          {venue.rating}
                        </span>

                        <Star className="h-3 w-3 fill-[#C8102E] text-[#C8102E]" />
                      </div>
                    </div>

                    {/* Venue Type */}
                    <div className="flex min-h-[94px] items-center border-b border-zinc-200 px-4">
                      <span className="border border-[#C8102E]/20 bg-[#C8102E]/5 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.13em] text-[#C8102E]">
                        {venue.venueType}
                      </span>
                    </div>

                    {/* Amenities */}
                    <div className="flex min-h-[94px] items-center px-4">
                      <div className="flex flex-wrap gap-1.5">
                        {venue.amenities.map((amenity) => (
                          <div
                            key={amenity.label}
                            className={`flex items-center gap-1 border px-2 py-1.5 ${
                              amenity.active
                                ? "border-zinc-200 bg-zinc-50 text-zinc-600"
                                : "border-zinc-100 bg-zinc-50/50 text-zinc-300"
                            }`}
                          >
                            {amenity.active && (
                              <Check className="h-2.5 w-2.5 text-[#C8102E]" />
                            )}

                            <span className="text-[7px] font-medium uppercase tracking-[0.08em]">
                              {amenity.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Venue Column */}
                {displayVenues.length < MAX_COMPARE && (
                  <button
                    type="button"
                    onClick={() => router.push("/venues")}
                    className="group flex min-h-full flex-col items-center justify-center border-l border-zinc-200 bg-[#faf9f7] transition hover:bg-[#f4f0eb]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-400 transition group-hover:border-[#C8102E] group-hover:text-[#C8102E]">
                      <Plus className="h-4 w-4" />
                    </span>

                    <span className="mt-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400 transition group-hover:text-[#C8102E]">
                      Add Venue
                    </span>
                  </button>
                )}
              </div>
            </section>
          </>
        )}

        {/* Royal Difference */}
        <section className="mt-16 border-t border-zinc-200 pt-12">
          <div className="mb-7">
            <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Why ShaadiSthal
            </p>

            <h2 className="font-serif text-[1.65rem] font-medium tracking-[-0.025em] text-zinc-900">
              The Royal Difference
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="group relative h-[320px] overflow-hidden rounded-xl bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
                alt="Luxury hospitality"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  Hospitality
                </p>

                <h3 className="mt-2 font-serif text-[24px] font-medium text-white">
                  Concierge Service
                </h3>

                <p className="mt-2 max-w-[430px] text-[10px] leading-5 text-white/75">
                  Experience world-class service that treats every
                  guest like royalty from the moment of arrival.
                </p>
              </div>
            </div>

            <div className="flex min-h-[320px] flex-col justify-center rounded-xl bg-[#f2eee8] p-8 md:p-10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8102E]/20 bg-white text-[#C8102E]">
                <Check className="h-4 w-4" />
              </div>

              <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                Our Standard
              </p>

              <h3 className="mt-2 font-serif text-[25px] font-medium tracking-[-0.02em] text-zinc-900">
                Certified Luxury
              </h3>

              <p className="mt-3 max-w-[430px] text-[11px] leading-5 text-zinc-500">
                Each venue in our comparison suite has been
                personally vetted for hygiene, service,
                presentation, and guest experience.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 border-t border-zinc-200 pt-12 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            Find Your Setting
          </p>

          <h2 className="mx-auto mt-3 max-w-[600px] font-serif text-[1.65rem] leading-tight tracking-[-0.02em] text-zinc-800 md:text-[2rem]">
            The perfect celebration begins with the right place.
          </h2>

          <button
            type="button"
            onClick={() => router.push("/venues")}
            className="group mt-5 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#C8102E]"
          >
            Explore All Venues
            <ArrowRightIcon />
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}
