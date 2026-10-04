
"use client";

import React from "react";
import {
  ArrowUpRight,
  Heart,
  MapPin,
  Smartphone,
  Star,
} from "lucide-react";

export default function MobileApp(): React.ReactElement {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      <div className="relative overflow-hidden border border-zinc-200 bg-[#f3f0ea]">
        {/* Decorative elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C8102E]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C8102E]/10"
        />

        <div className="relative grid items-center gap-12 px-7 py-10 md:px-12 md:py-12 lg:grid-cols-[1fr_430px] lg:gap-10">
          {/* Left Content */}
          <div className="max-w-[590px]">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8102E]/20 bg-white text-[#C8102E]">
                <Smartphone className="h-3.5 w-3.5" />
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]">
                ShaadiSthal Mobile
              </span>
            </div>

            <h2 className="max-w-[540px] font-serif text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-zinc-900 md:text-[2.8rem]">
              Your wedding,
              <br />
              <span className="text-[#C8102E]">
                wherever you are.
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-[11px] leading-6 text-zinc-500 md:text-[12px]">
              Keep your celebration moving from anywhere. Track RSVPs,
              coordinate with vendors, manage your checklist and stay
              connected to every detail of your wedding.
            </p>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="group inline-flex items-center gap-3 bg-zinc-900 px-5 py-3 text-left text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C8102E] hover:shadow-[0_8px_22px_rgba(200,16,46,0.18)]"
              >
                <span className="flex h-7 w-7 items-center justify-center border border-white/20">
                  <span className="text-[8px] font-bold tracking-[0.04em]">
                    iOS
                  </span>
                </span>

                <span>
                  <span className="block text-[7px] uppercase tracking-[0.14em] text-white/50">
                    Download on the
                  </span>

                  <span className="mt-0.5 block text-[11px] font-semibold">
                    App Store
                  </span>
                </span>

                <ArrowUpRight className="ml-1 h-3 w-3 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </button>

              <button
                type="button"
                className="group inline-flex items-center gap-3 bg-zinc-900 px-5 py-3 text-left text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C8102E] hover:shadow-[0_8px_22px_rgba(200,16,46,0.18)]"
              >
                <span className="flex h-7 w-7 items-center justify-center border border-white/20">
                  <svg
                    width="11"
                    height="13"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 1.5L10.5 7L1.5 12.5V1.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>
                  <span className="block text-[7px] uppercase tracking-[0.14em] text-white/50">
                    Get it on
                  </span>

                  <span className="mt-0.5 block text-[11px] font-semibold">
                    Google Play
                  </span>
                </span>

                <ArrowUpRight className="ml-1 h-3 w-3 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </button>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-zinc-300" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Plan · Connect · Celebrate
              </p>
            </div>
          </div>

          {/* Phones */}
          <div className="relative flex h-[530px] items-end justify-center lg:justify-end">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 right-12 h-64 w-64 rounded-full bg-[#C8102E]/[0.045] blur-3xl"
            />

            {/* Android phone */}
            <div className="absolute bottom-3 right-2 z-10 hidden rotate-[-6deg] transition-transform duration-500 hover:rotate-[-2deg] sm:block">
              <div className="relative h-[455px] w-[225px] rounded-[30px] border-[6px] border-zinc-800 bg-zinc-800 p-[3px] shadow-[0_25px_55px_rgba(0,0,0,0.18)]">
                {/* Side buttons */}
                <div className="absolute -left-[9px] top-24 h-10 w-[3px] rounded-l-full bg-zinc-700" />
                <div className="absolute -left-[9px] top-36 h-14 w-[3px] rounded-l-full bg-zinc-700" />

                <div className="relative h-full w-full overflow-hidden rounded-[23px] bg-[#faf9f7]">
                  {/* Android camera */}
                  <div className="absolute left-1/2 top-2 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                  </div>

                  {/* Header */}
                  <div className="px-4 pb-3 pt-9">
                    <p className="text-[6px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Your wedding
                    </p>

                    <div className="mt-1 flex items-center justify-between">
                      <h3 className="font-serif text-[16px] text-zinc-900">
                        ShaadiSthal
                      </h3>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E]/10">
                        <Heart className="h-3 w-3 text-[#C8102E]" />
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mx-3 overflow-hidden rounded-[15px]">
                    <div className="relative h-[155px]">
                      <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=85"
                        alt="Wedding venue"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-3">
                        <p className="flex items-center gap-1 text-[6px] uppercase tracking-[0.1em] text-white/70">
                          <MapPin className="h-2 w-2" />
                          Udaipur
                        </p>

                        <p className="mt-1 font-serif text-[14px] text-white">
                          The Lake Palace
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="px-3 pt-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[6px] uppercase tracking-[0.12em] text-zinc-400">
                          Starting from
                        </p>

                        <p className="mt-1 text-[11px] font-semibold text-[#C8102E]">
                          ₹7,500
                          <span className="ml-1 text-[6px] font-normal text-zinc-400">
                            /plate
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <Star className="h-2.5 w-2.5 fill-[#C8102E] text-[#C8102E]" />
                        <span className="text-[7px] font-semibold">
                          4.9
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-zinc-200 pt-3">
                      <div className="flex justify-between">
                        <p className="text-[6px] uppercase tracking-[0.12em] text-zinc-400">
                          Planning progress
                        </p>

                        <span className="text-[6px] font-semibold text-[#C8102E]">
                          68%
                        </span>
                      </div>

                      <div className="mt-2 h-1 rounded-full bg-zinc-200">
                        <div className="h-full w-[68%] rounded-full bg-[#C8102E]" />
                      </div>
                    </div>
                  </div>

                  {/* Android nav */}
                  <div className="absolute inset-x-0 bottom-0 border-t border-zinc-200 bg-white px-3 py-3">
                    <div className="flex justify-around">
                      {["Home", "Venues", "Tasks", "Profile"].map(
                        (item, index) => (
                          <span
                            key={item}
                            className={`text-[6px] ${
                              index === 0
                                ? "font-semibold text-[#C8102E]"
                                : "text-zinc-400"
                            }`}
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* iPhone */}
            <div className="relative z-20 rotate-[4deg] transition-transform duration-500 hover:rotate-0">
              <div className="relative h-[500px] w-[250px] rounded-[38px] border-[7px] border-zinc-900 bg-zinc-900 p-[3px] shadow-[0_30px_65px_rgba(0,0,0,0.22)]">
                {/* Side button */}
                <div className="absolute -right-[10px] top-28 h-12 w-[4px] rounded-r-full bg-zinc-800" />

                <div className="relative h-full w-full overflow-hidden rounded-[31px] bg-[#faf9f7]">
                  {/* Dynamic island */}
                  <div className="absolute left-1/2 top-2 z-20 h-5 w-15 -translate-x-1/2 rounded-full bg-black" />

                  {/* Header */}
                  <div className="px-5 pb-4 pt-10">
                    <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Good morning
                    </p>

                    <div className="mt-1 flex items-center justify-between">
                      <h3 className="font-serif text-[19px] leading-tight text-zinc-900">
                        Your Celebration
                      </h3>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8102E]/10">
                        <Heart className="h-3.5 w-3.5 text-[#C8102E]" />
                      </div>
                    </div>
                  </div>

                  {/* Featured image */}
                  <div className="mx-4 overflow-hidden rounded-[18px]">
                    <div className="relative h-[175px]">
                      <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=85"
                        alt="Wedding venue"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <span className="absolute left-3 top-3 bg-white/95 px-2 py-1 text-[6px] font-semibold uppercase tracking-[0.12em] text-zinc-700">
                        Featured
                      </span>

                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="flex items-center gap-1 text-[6px] uppercase tracking-[0.1em] text-white/70">
                          <MapPin className="h-2 w-2" />
                          Udaipur, Rajasthan
                        </p>

                        <p className="mt-1 font-serif text-[15px] text-white">
                          The Lake Palace
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Venue details */}
                  <div className="px-4 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[6px] uppercase tracking-[0.12em] text-zinc-400">
                          Starting from
                        </p>

                        <p className="mt-1 text-[12px] font-semibold text-[#C8102E]">
                          ₹7,500
                          <span className="ml-1 text-[7px] font-normal text-zinc-400">
                            /plate
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <Star className="h-2.5 w-2.5 fill-[#C8102E] text-[#C8102E]" />
                        <span className="text-[8px] font-semibold text-zinc-700">
                          4.9
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-5 border-t border-zinc-200 pt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[7px] font-semibold uppercase tracking-[0.13em] text-zinc-400">
                          Planning progress
                        </p>

                        <span className="text-[7px] font-semibold text-[#C8102E]">
                          68%
                        </span>
                      </div>

                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-zinc-200">
                        <div className="h-full w-[68%] rounded-full bg-[#C8102E]" />
                      </div>
                    </div>
                  </div>

                  {/* iPhone nav */}
                  <div className="absolute inset-x-0 bottom-0 border-t border-zinc-200 bg-white/95 px-4 py-3">
                    <div className="flex items-center justify-between">
                      {[
                        { label: "Home", active: true },
                        { label: "Venues", active: false },
                        { label: "Tasks", active: false },
                        { label: "Profile", active: false },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col items-center gap-1"
                        >
                          <span
                            className={`h-1 w-1 rounded-full ${
                              item.active
                                ? "bg-[#C8102E]"
                                : "bg-transparent"
                            }`}
                          />

                          <span
                            className={`text-[6px] font-medium ${
                              item.active
                                ? "text-[#C8102E]"
                                : "text-zinc-400"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Coming soon badge */}
              <div className="absolute -bottom-3 -left-5 hidden bg-[#C8102E] px-3 py-2 shadow-lg sm:block">
                <p className="text-[7px] font-semibold uppercase tracking-[0.16em] text-white">
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col gap-3 border-t border-zinc-200 bg-[#ebe7df] px-7 py-4 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Your wedding, always within reach
          </p>

          <div className="flex items-center gap-4 text-[8px] uppercase tracking-[0.12em] text-zinc-400">
            <span>Guests</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span>Vendors</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span>Checklist</span>
          </div>
        </div>
      </div>
    </section>
  );
}


