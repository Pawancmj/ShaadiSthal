"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ReactElement, ReactNode } from "react";

import {
  Check,
  ChevronDown,
  Heart,
  ListFilter,
  MapPin,
  MessageCircle,
  Star,
  X,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { cities } from "../data/cities";
import { cityAliases } from "../data/venues";
import type { Venue } from "../data/venues";

import { useCompare } from "../hooks/useCompare";
import { getVenues } from "@/api/venue.api";

const capacities = [
  "100-300",
  "300-600",
  "600-1000",
  "1000+",
];

const cityFilterOptions = [
  "All Cities",
  ...cities.map((city) => city.name),
];

export default function VenuesClient(): ReactElement {
  const router = useRouter();
  const searchParams = useSearchParams();

  const cityFromUrl = searchParams.get("city")?.trim();
  const selectedCity = cityFromUrl || "All Cities";

  const [capacity, setCapacity] = useState("300-600");
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    compareIds,
    toggleCompare,
    clearCompare,
    MAX_COMPARE,
  } = useCompare();

  /*
   * --------------------------------------------------------------------------
   * Fetch venues from backend
   * --------------------------------------------------------------------------
   */

  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await getVenues();

        console.log("Venues API:", res);

        if (res.success && res.data) {
          const mappedVenues: Venue[] = res.data.map(
            (venue: any, index: number) => ({
              /*
               * Backend fields
               */
              id: venue.id,
              name: venue.name,
              description: venue.description,

              /*
               * Backend primaryImage -> existing UI img
               */
              img: venue.primaryImage,

              /*
               * Backend city/state -> existing UI location
               */
              location: `${venue.city}, ${venue.state}`,

              /*
               * Backend pricePerPlate -> existing UI price
               */
              price: `₹${Number(
                venue.pricePerPlate,
              ).toLocaleString("en-IN")}`,

              /*
               * Rating
               */
              rating: venue.rating ?? 0,

              /*
               * Verification
               */
              verified: venue.verified ?? false,

              /*
               * Backend category -> existing UI tag
               */
              tag: venue.category,
              tagBg: "#fff0f0",
              tagColor: "#C8102E",

              /*
               * Backend currently doesn't have layout.
               * Keep existing UI layout by alternating cards.
               */
              layout: index % 2 === 0 ? "tall" : "wide",

              /*
               * Keep complete backend data available to UI.
               */
              gallery: venue.gallery ?? [],

              city: venue.city,
              state: venue.state,
              country: venue.country,

              minGuests: Number(venue.minGuests),
              maxGuests: Number(venue.maxGuests),

              pricePerPlate: Number(venue.pricePerPlate),

              indoor: venue.indoor ?? true,
              outdoor: venue.outdoor ?? false,

              category: venue.category,

              featured: venue.featured ?? false,
            }),
          );

          setVenues(mappedVenues);
        } else {
          setVenues([]);
          setError(res.message || "Failed to load venues.");
        }
      } catch (error) {
        console.error("Failed to fetch venues:", error);

        setVenues([]);
        setError("Failed to connect to the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  /*
   * --------------------------------------------------------------------------
   * Filter venues by city
   * --------------------------------------------------------------------------
   */

  const filteredVenues = useMemo(() => {
    return venues.filter((venue) =>
      venueMatchesCity(
        venue.city ?? "",
        selectedCity,
      ),
    );
  }, [venues, selectedCity]);

  /*
   * --------------------------------------------------------------------------
   * Filter venues by capacity
   * --------------------------------------------------------------------------
   */

  const capacityFilteredVenues = useMemo(() => {
    return filteredVenues.filter((venue) => {
      if (!capacity) {
        return true;
      }

      const [min, max] = capacity.split("-");

      /*
       * 1000+ guests
       */
      if (capacity === "1000+") {
        return (venue.maxGuests ?? 0) >= 1000;
      }

      /*
       * Check whether venue capacity overlaps
       * with selected capacity range.
       *
       * Example:
       * Selected: 300-600
       * Venue:    100-800
       *
       * Result: included
       */
      return (
        (venue.maxGuests ?? 0) >= Number(min) &&
        (venue.minGuests ?? 0) <= Number(max)
      );
    });
  }, [filteredVenues, capacity]);

  /*
   * --------------------------------------------------------------------------
   * Compare venues
   * --------------------------------------------------------------------------
   */

  const selectedCompareVenues = compareIds
    .map((id) =>
      venues.find((venue) => venue.id === id),
    )
    .filter(Boolean) as Venue[];

  const selectedCount = selectedCompareVenues.length;

  /*
   * --------------------------------------------------------------------------
   * Change city
   * --------------------------------------------------------------------------
   */

  const handleCityChange = (city: string) => {
    const href =
      city === "All Cities"
        ? "/venues"
        : `/venues?city=${encodeURIComponent(city)}`;

    router.replace(href, {
      scroll: false,
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Header />

      <main className="mx-auto w-full max-w-[1160px] px-6 py-12">
        {/* ------------------------------------------------------------------
            Page Header
        ------------------------------------------------------------------ */}

        <div className="mb-10">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
            Curated Experiences
          </p>

          <h1 className="max-w-3xl text-3xl font-serif font-medium tracking-[-0.03em] text-zinc-900 md:text-4xl">
            Discover the Grandest Venues in{" "}
            {selectedCity}
          </h1>

          <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-zinc-400">
            {loading
              ? "LOADING VENUES..."
              : `${capacityFilteredVenues.length.toLocaleString()} RESULTS FOUND`}

            {!loading &&
              capacityFilteredVenues.length > 0 && (
                <>
                  <span className="mx-2">|</span>
                  SORTED BY: POPULARITY
                </>
              )}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          {/* ----------------------------------------------------------------
              Sidebar
          ---------------------------------------------------------------- */}

          <aside className="hidden lg:block">
            <FilterGroup title="Location (City)">
              <div className="space-y-1">
                {cityFilterOptions.map((city) => {
                  const active =
                    selectedCity === city;

                  return (
                    <button
                      key={city}
                      type="button"
                      onClick={() =>
                        handleCityChange(city)
                      }
                      className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-zinc-50"
                    >
                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border ${active
                            ? "border-[#C8102E] bg-[#C8102E]"
                            : "border-zinc-300 bg-white"
                          }`}
                      >
                        {active && (
                          <Check
                            size={10}
                            strokeWidth={3}
                            className="text-white"
                          />
                        )}
                      </span>

                      <span
                        className={`text-xs ${active
                            ? "font-semibold text-zinc-900"
                            : "text-zinc-500"
                          }`}
                      >
                        {city}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FilterGroup>

            <div className="my-7 h-px bg-zinc-100" />

            <FilterGroup title="Price Range (INR)">
              <div className="px-1">
                <div className="relative h-1 rounded-full bg-zinc-200">
                  <div className="absolute left-0 top-0 h-1 w-[70%] rounded-full bg-[#C8102E]" />

                  <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[#C8102E] bg-white" />

                  <span className="absolute left-[70%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#C8102E] bg-white" />
                </div>

                <div className="mt-4 flex items-center justify-between text-[0.68rem]">
                  <span className="text-zinc-400">
                    Rs. 50K
                  </span>

                  <span className="font-semibold text-[#C8102E]">
                    Rs. 15L+
                  </span>

                  <span className="text-zinc-400">
                    Rs. 50L+
                  </span>
                </div>
              </div>
            </FilterGroup>

            <div className="my-7 h-px bg-zinc-100" />

            <FilterGroup title="Guest Capacity">
              <div className="grid grid-cols-2 gap-2">
                {capacities.map((cap) => {
                  const active = capacity === cap;

                  return (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => setCapacity(cap)}
                      className={`rounded-md border px-2 py-2 text-[0.68rem] font-medium transition-all ${active
                          ? "border-[#C8102E] bg-[#C8102E] text-white"
                          : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
                        }`}
                    >
                      {cap}
                    </button>
                  );
                })}
              </div>
            </FilterGroup>

            <div className="my-7 h-px bg-zinc-100" />

            <FilterGroup title="Minimum Rating">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}

                <Star
                  size={16}
                  className="text-zinc-200"
                />

                <span className="ml-1 text-xs text-zinc-500">
                  4.0+
                </span>
              </div>
            </FilterGroup>
          </aside>

          {/* ----------------------------------------------------------------
              Results
          ---------------------------------------------------------------- */}

          <section>
            {loading ? (
              <VenueLoadingState />
            ) : error ? (
              <VenueErrorState
                message={error}
                onRetry={() =>
                  window.location.reload()
                }
              />
            ) : capacityFilteredVenues.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50/50 px-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-400 shadow-sm">
                  <ListFilter size={20} />
                </div>

                <p className="text-sm font-medium text-zinc-700">
                  No venues found for{" "}
                  {selectedCity}.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setCapacity("300-600");
                    handleCityChange("All Cities");
                  }}
                  className="mt-4 text-xs font-semibold text-[#C8102E] transition-colors hover:text-[#a80d26]"
                >
                  View all venues
                </button>
              </div>
            ) : (
              <>
                {/* ----------------------------------------------------------
                    Tall cards
                ---------------------------------------------------------- */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {capacityFilteredVenues
                    .filter(
                      (venue) =>
                        venue.layout === "tall",
                    )
                    .map((venue) => (
                      <VenueCard
                        key={venue.id}
                        venue={venue}
                        isCompared={compareIds.includes(
                          venue.id,
                        )}
                        onCompareToggle={() =>
                          toggleCompare(venue.id)
                        }
                      />
                    ))}
                </div>

                {/* ----------------------------------------------------------
                    Wide cards
                ---------------------------------------------------------- */}

                <div className="mt-6 space-y-6">
                  {capacityFilteredVenues
                    .filter(
                      (venue) =>
                        venue.layout === "wide",
                    )
                    .map((venue) => (
                      <VenueCard
                        key={venue.id}
                        venue={venue}
                        wide
                        isCompared={compareIds.includes(
                          venue.id,
                        )}
                        onCompareToggle={() =>
                          toggleCompare(venue.id)
                        }
                      />
                    ))}
                </div>
              </>
            )}
          </section>
        </div>
      </main>

      <CompareBar
        selectedVenues={selectedCompareVenues}
        selectedCount={selectedCount}
        onClear={clearCompare}
        max={MAX_COMPARE}
      />

      <Footer />
    </div>
  );
}

/* ==========================================================================
   Helpers
   ========================================================================== */

function venueMatchesCity(
  venueCity: string,
  selectedCity: string,
): boolean {
  if (selectedCity === "All Cities") {
    return true;
  }

  const normalizedVenueCity =
    venueCity.toLowerCase().trim();

  const matchCities =
    cityAliases[selectedCity] ?? [selectedCity];

  return matchCities.some(
    (city) =>
      city.toLowerCase().trim() ===
      normalizedVenueCity,
  );
}

/* ==========================================================================
   Filter Group
   ========================================================================== */

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactElement {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-zinc-700">
        <span>{title}</span>

        <ChevronDown
          size={13}
          className="text-zinc-400"
        />
      </div>

      {children}
    </div>
  );
}

/* ==========================================================================
   Venue Card
   ========================================================================== */

function VenueCard({
  venue,
  wide = false,
  isCompared = false,
  onCompareToggle,
}: {
  venue: Venue;
  wide?: boolean;
  isCompared?: boolean;
  onCompareToggle?: () => void;
}): ReactElement {
  return (
    <article
      className={`group overflow-hidden rounded-lg border border-zinc-100 bg-white transition-shadow hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)] ${wide
          ? "md:grid md:grid-cols-[42%_58%]"
          : ""
        }`}
    >
      {/* --------------------------------------------------------------------
          Image
      -------------------------------------------------------------------- */}

      <div
        className={`relative overflow-hidden bg-zinc-100 ${wide
            ? "h-[260px] md:h-full"
            : "h-[260px]"
          }`}
      >
        <img
          src={venue.img}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />

        {/* Tag */}

        {venue.tag && (
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.06em]"
            style={{
              backgroundColor:
                venue.tagBg ?? "#fff0f0",
              color:
                venue.tagColor ?? "#C8102E",
            }}
          >
            {venue.tag}
          </span>
        )}

        {/* Verified */}

        {venue.verified && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 text-[0.6rem] font-semibold text-white backdrop-blur-sm">
            <Check
              size={10}
              strokeWidth={3}
            />
            Verified
          </span>
        )}

        {/* Actions */}

        {!wide && (
          <div className="absolute right-4 top-4 flex gap-2">
            <button
              type="button"
              aria-label={`Save ${venue.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#C8102E] shadow-sm backdrop-blur transition-transform hover:scale-105"
            >
              <Heart
                size={14}
                strokeWidth={2}
              />
            </button>

            <button
              type="button"
              aria-label={`Compare ${venue.name}`}
              onClick={onCompareToggle}
              className={`flex h-8 w-8 items-center justify-center rounded-full shadow-sm backdrop-blur transition-transform hover:scale-105 ${isCompared
                  ? "bg-[#C8102E] text-white"
                  : "bg-white/95 text-zinc-600"
                }`}
            >
              <ListFilter
                size={14}
                strokeWidth={2}
              />
            </button>
          </div>
        )}
      </div>

      {/* --------------------------------------------------------------------
          Information
      -------------------------------------------------------------------- */}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-base font-semibold tracking-[-0.015em] text-zinc-900">
            {venue.name}
          </h2>

          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-zinc-700">
            <Star
              size={12}
              fill="currentColor"
              className="text-amber-400"
            />

            {venue.rating}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-xs text-zinc-400">
          <MapPin size={12} />

          {venue.location}
        </p>

        {wide && venue.description && (
          <p className="mt-4 line-clamp-2 text-xs leading-5 text-zinc-500">
            {venue.description}
          </p>
        )}

        <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-zinc-400">
          Starting From
        </p>

        <div className="mt-1 flex items-end justify-between gap-4">
          <span className="text-lg font-semibold tracking-[-0.02em] text-zinc-900">
            {venue.price}

            <span className="ml-1 text-xs font-normal text-zinc-400">
              / plate
            </span>
          </span>

          <div className="flex items-center gap-2">
            {wide ? (
              <button
                type="button"
                className="rounded-md border border-zinc-200 bg-white px-3.5 py-2 text-[0.68rem] font-semibold text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
              >
                WhatsApp
              </button>
            ) : (
              <button
                type="button"
                aria-label={`Chat with ${venue.name}`}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:text-zinc-900"
              >
                <MessageCircle size={14} />
              </button>
            )}

            <Link
              href={`/venues/${venue.id}`}
              className="rounded-md bg-[#C8102E] px-4 py-2 text-[0.68rem] font-semibold text-white no-underline transition-colors hover:bg-[#a80d26]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ==========================================================================
   Loading
   ========================================================================== */

function VenueLoadingState(): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-lg border border-zinc-100 bg-white"
        >
          <div className="h-[260px] animate-pulse bg-zinc-100" />

          <div className="space-y-3 p-5">
            <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-100" />

            <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-100" />

            <div className="mt-6 h-3 w-1/4 animate-pulse rounded bg-zinc-100" />

            <div className="h-6 w-1/2 animate-pulse rounded bg-zinc-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ==========================================================================
   Error
   ========================================================================== */

function VenueErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}): ReactElement {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-red-100 bg-red-50/40 px-6 text-center">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C8102E] shadow-sm">
        <X size={18} />
      </div>

      <p className="text-sm font-medium text-zinc-800">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-md bg-[#C8102E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#a80d26]"
      >
        Try Again
      </button>
    </div>
  );
}

/* ==========================================================================
   Compare Bar
   ========================================================================== */

function CompareBar({
  selectedVenues,
  selectedCount,
  onClear,
  max,
}: {
  selectedVenues: Venue[];
  selectedCount: number;
  onClear: () => void;
  max: number;
}): ReactElement | null {
  if (selectedCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-[90] flex w-[calc(100%-32px)] max-w-[720px] -translate-x-1/2 items-center gap-4 rounded-xl border border-zinc-200 bg-white/95 px-4 py-3 shadow-[0_15px_50px_rgba(0,0,0,0.15)] backdrop-blur-md">
      {/* --------------------------------------------------------------------
          Thumbnails
      -------------------------------------------------------------------- */}

      <div className="flex shrink-0 items-center">
        {selectedVenues.map(
          (venue, index) => (
            <div
              key={venue.id}
              className={`h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm ${index > 0 ? "-ml-2" : ""
                }`}
            >
              <img
                src={venue.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ),
        )}

        {selectedCount < max && (
          <Link
            href="/comparison"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-zinc-300 text-lg text-zinc-400 no-underline hover:border-[#C8102E] hover:text-[#C8102E]"
          >
            +
          </Link>
        )}
      </div>

      {/* --------------------------------------------------------------------
          Label
      -------------------------------------------------------------------- */}

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-zinc-800">
          Compare Venues
        </p>

        <p className="mt-0.5 text-[0.65rem] text-zinc-400">
          {selectedCount} item
          {selectedCount !== 1 ? "s" : ""}{" "}
          selected · max {max}
        </p>
      </div>

      {/* --------------------------------------------------------------------
          Actions
      -------------------------------------------------------------------- */}

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onClear}
          className="hidden text-[0.68rem] font-medium text-zinc-400 transition-colors hover:text-zinc-700 sm:block"
        >
          Clear All
        </button>

        <Link
          href="/comparison"
          className="rounded-md bg-[#C8102E] px-4 py-2 text-[0.68rem] font-semibold text-white no-underline transition-colors hover:bg-[#a80d26]"
        >
          Compare Now
        </Link>
      </div>
    </div>
  );
}
