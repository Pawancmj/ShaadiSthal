
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import { getVenues } from "@/api/venue.api";

type FeaturedVenue = {
  id: number;
  name: string;
  city: string;
  state: string;
  pricePerPlate: number;
  minGuests: number;
  maxGuests: number;
  rating: number;
  primaryImage: string;
  category: string;
};

export default function FeaturedVenues(): React.ReactElement {
  const [venues, setVenues] = useState<FeaturedVenue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedVenues = async () => {
      try {
        const res = await getVenues({
          page: 1,
          limit: 3,
        });

        setVenues(res.data ?? []);
      } catch (error) {
        console.error("Failed to load featured venues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedVenues();
  }, []);

  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      {/* Header */}
      <div className="mb-9 flex flex-col items-center text-center">
        <div className="mb-3 h-[3px] w-9 rounded-full bg-[#C8102E]" />

        <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]">
        Our curated collection
        </p>

        <h2 className="mt-2 font-serif text-[2rem] font-medium leading-tight tracking-[-0.035em] text-zinc-900 md:text-[2.35rem]">
        Featured Venues
        </h2>

        <p className="mt-3 max-w-[440px] text-[11px] leading-5 text-zinc-400">
        Discover exceptional spaces chosen for unforgettable
        celebrations, from grand palaces to intimate retreats.
        </p>
      </div>
      

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden border border-zinc-200 bg-white"
            >
              <div className="h-[270px] animate-pulse bg-zinc-100" />

              <div className="space-y-4 p-5">
                <div className="h-3 w-20 animate-pulse rounded bg-zinc-100" />
                <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-100" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-zinc-100" />

                <div className="flex justify-between pt-3">
                  <div className="h-5 w-24 animate-pulse rounded bg-zinc-100" />
                  <div className="h-7 w-20 animate-pulse rounded bg-zinc-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && venues.length === 0 && (
        <div className="border border-dashed border-zinc-200 bg-[#faf9f7] px-6 py-16 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
            Featured Collection
          </p>

          <h3 className="mt-2 font-serif text-2xl text-zinc-800">
            No featured venues yet.
          </h3>

          <p className="mx-auto mt-2 max-w-[350px] text-[10px] leading-5 text-zinc-400">
            Explore our complete collection of wedding venues and
            discover a place made for your celebration.
          </p>

          <Link
            href="/venues"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#C8102E]/40 pb-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
          >
            Explore venues
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      )}

      {/* Venue Grid */}
      {!loading && venues.length > 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {venues.map((venue) => (
            <Link
              key={venue.id}
              href={`/venues/${venue.id}`}
              className="group overflow-hidden border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Image */}
              <div className="relative h-[270px] overflow-hidden bg-zinc-100">
                <img
                  src={venue.primaryImage}
                  alt={venue.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />

                {/* Category */}
                <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-zinc-700 backdrop-blur-sm">
                  {venue.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 bg-white/95 px-2.5 py-1.5 backdrop-blur-sm">
                  <Star className="h-2.5 w-2.5 fill-[#C8102E] text-[#C8102E]" />

                  <span className="text-[9px] font-semibold text-zinc-700">
                    {Number(venue.rating ?? 0).toFixed(1)}
                  </span>
                </div>

                {/* Image Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="mb-1 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.12em] text-white/70">
                        <MapPin className="h-2.5 w-2.5" />
                        {venue.city}, {venue.state}
                      </p>

                      <h3 className="font-serif text-[21px] font-medium leading-tight tracking-[-0.025em] text-white">
                        {venue.name}
                      </h3>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#C8102E]">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  {/* Price */}
                  <div>
                    <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                      Starting from
                    </p>

                    <div className="mt-1">
                      <span className="text-[16px] font-semibold text-[#C8102E]">
                        ₹
                        {Number(
                          venue.pricePerPlate,
                        ).toLocaleString("en-IN")}
                      </span>

                      <span className="ml-1 text-[9px] text-zinc-400">
                        /plate
                      </span>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="text-right">
                    <p className="flex items-center justify-end gap-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                      <Users className="h-2.5 w-2.5" />
                      Capacity
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-zinc-700">
                      {Number(venue.minGuests).toLocaleString("en-IN")}
                      {" – "}
                      {Number(venue.maxGuests).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-zinc-100 transition-colors duration-300 group-hover:bg-[#C8102E]/20" />

                  <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-zinc-300 transition-colors duration-300 group-hover:text-[#C8102E]">
                    View venue
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      {!loading && venues.length > 0 && (
        <div className="mt-9 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-200" />

            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              More beautiful places await
            </p>

            <span className="h-px w-8 bg-zinc-200" />
          </div>

          <Link
            href="/venues"
            className="group mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
          >
            Discover all venues
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </section>
  );
}

