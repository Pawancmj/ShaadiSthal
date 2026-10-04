
"use client";

import React from "react";
import { Landmark, MapPin, ArrowRight } from "lucide-react";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-[560px] overflow-hidden md:min-h-[600px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&q=85"
          alt="Elegant wedding celebration"
          className="h-full w-full object-cover object-center"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/65" />

        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-[#3a2018]/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1160px] flex-col items-center justify-center px-6 py-20 text-center md:min-h-[600px] md:px-8">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-white/50" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/80">
            The art of celebrating
          </span>

          <span className="h-px w-8 bg-white/50" />
        </div>

        {/* Heading */}
        <h1 className="max-w-[780px] font-serif text-[2.8rem] font-medium leading-[1.03] tracking-[-0.04em] text-white drop-shadow-[0_3px_20px_rgba(0,0,0,0.25)] sm:text-[3.8rem] md:text-[4.5rem]">
          Grandeur Meets
          <br />
          <span className="italic text-white/95">Precision.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-[500px] text-[11px] leading-5 text-white/75 md:text-[12px]">
          Discover extraordinary venues and trusted wedding professionals,
          thoughtfully brought together for your perfect celebration.
        </p>

        {/* Search */}
        <div className="mt-9 w-full max-w-[680px]">
          <div className="flex flex-col overflow-hidden border border-white/20 bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-md md:flex-row">
            {/* City */}
            <div className="flex min-h-[58px] flex-1 items-center gap-3 border-b border-zinc-200 px-5 text-left md:border-b-0 md:border-r">
              <MapPin className="h-4 w-4 shrink-0 text-[#C8102E]" />

              <div className="min-w-0 flex-1">
                <label className="block text-[7px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Destination
                </label>

                <input
                  type="text"
                  placeholder="Where are you celebrating?"
                  className="mt-1 w-full border-0 bg-transparent p-0 text-[11px] text-zinc-800 outline-none placeholder:text-zinc-400 focus:ring-0"
                />
              </div>
            </div>

            {/* Venue */}
            <div className="flex min-h-[58px] flex-1 items-center gap-3 border-b border-zinc-200 px-5 text-left md:border-b-0">
              <Landmark className="h-4 w-4 shrink-0 text-[#C8102E]" />

              <div className="min-w-0 flex-1">
                <label className="block text-[7px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Venue
                </label>

                <input
                  type="text"
                  placeholder="Palace, resort, garden..."
                  className="mt-1 w-full border-0 bg-transparent p-0 text-[11px] text-zinc-800 outline-none placeholder:text-zinc-400 focus:ring-0"
                />
              </div>
            </div>

            {/* Search */}
            <button
              type="button"
              className="group flex min-h-[58px] items-center justify-center gap-2 bg-[#C8102E] px-7 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#a90d27] md:min-w-[145px]"
            >
              Start Planning

              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Trust / Quick links */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[8px] uppercase tracking-[0.13em] text-white/55">
          <span>Curated Venues</span>

          <span className="h-1 w-1 rounded-full bg-white/40" />

          <span>Verified Vendors</span>

          <span className="h-1 w-1 rounded-full bg-white/40" />

          <span>Thoughtful Planning</span>
        </div>
      </div>

     
    </section>
  );
}

