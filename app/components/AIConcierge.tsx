
"use client";

import React, { useEffect, useState } from "react";
import {
  CheckSquare,
  Sparkles,
  WalletCards,
} from "lucide-react";

const timelineCards = [
  {
    title: "Next Task",
    text: "Confirm Floral Theme for Reception",
    icon: CheckSquare,
  },
  {
    title: "Budget Status",
    text: "65% of ₹50L Allocated",
    icon: WalletCards,
  },
];

const weddingDate = new Date("2026-11-24T00:00:00");

function getCountdown() {
  const now = new Date().getTime();
  const target = weddingDate.getTime();

  const difference = Math.max(target - now, 0);

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24),
    ),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),
    seconds: Math.floor(
      (difference / 1000) % 60,
    ),
  };
}

export default function AIConcierge(): React.ReactElement {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    {
      number: countdown.days,
      label: "Days",
    },
    {
      number: countdown.hours,
      label: "Hours",
    },
    {
      number: countdown.minutes,
      label: "Mins",
    },
    {
      number: countdown.seconds,
      label: "Secs",
    },
  ];

  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-5">
        {/* Main Concierge Panel */}
        <div className="relative min-h-[360px] overflow-hidden bg-[#111111] px-6 py-8 sm:px-8 sm:py-9 md:min-h-[340px] md:px-10 lg:min-h-[320px] lg:px-11">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-12 h-52 w-52 rounded-full border border-[#C8102E]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-4 h-36 w-36 rounded-full border border-[#C8102E]/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 text-[#C8102E]/20"
          >
            <Sparkles className="h-16 w-16" strokeWidth={0.8} />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-7 bg-[#C8102E]" />

              <p className="text-[7px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]">
                Intelligent wedding planning
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-[560px] font-serif text-[2rem] font-medium leading-[1.08] tracking-[-0.035em] text-white sm:text-[2.35rem] md:text-[2.55rem]">
              Your AI Wedding
              <br />
              <span className="text-white/65">Concierge.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[520px] text-[10px] leading-5 text-zinc-400 sm:text-[11px] md:text-[12px] md:leading-6">
              Let our intelligent assistant handle timelines, vendor
              follow-ups and guest lists while you focus on the magic.
            </p>

            {/* Task Cards */}
            <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {timelineCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="group border border-white/10 bg-white/[0.055] px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-white/[0.08]"
                  >
                    <div className="mb-2 flex h-6 w-6 items-center justify-center border border-white/10 text-[#C8102E]">
                      <Icon
                        className="h-3.5 w-3.5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="text-[9px] font-semibold text-white">
                      {card.title}
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-zinc-500">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Countdown Panel */}
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden border border-zinc-200 bg-[#f3f0ea] px-5 py-8 sm:min-h-[270px] sm:px-7 lg:min-h-[320px]">
          {/* Decorative circle */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#C8102E]/10"
          />

          <div className="relative z-10 w-full max-w-[310px] text-center">
            <div className="mb-5 flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[#C8102E]/40" />

              <p className="text-[7px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                The Big Day
              </p>

              <span className="h-px w-6 bg-[#C8102E]/40" />
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start">
              {countdownItems.map((time, index) => (
                <React.Fragment key={time.label}>
                  <div className="min-w-0">
                    <p
                      key={`${time.label}-${time.number}`}
                      className="font-serif text-[1.65rem] font-medium leading-none tracking-[-0.05em] text-zinc-900 transition-all duration-500 sm:text-[2rem] md:text-[2.15rem]"
                    >
                      {String(time.number).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-[6px] font-semibold uppercase tracking-[0.16em] text-zinc-400 sm:text-[7px]">
                      {time.label}
                    </p>
                  </div>

                  {index < 3 && (
                    <span className="px-1 pt-0.5 font-serif text-base text-zinc-300 sm:text-lg">
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Couple */}
            <div className="mt-7">
              <p className="font-serif text-[1.05rem] font-medium tracking-[-0.02em] text-zinc-900">
                Simran &amp; Arjun
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.15em] text-zinc-400">
                November 24th, 2026
              </p>
            </div>

            <button
              type="button"
              className="mt-5 border-b border-[#C8102E]/30 pb-1 text-[7px] font-semibold uppercase tracking-[0.15em] text-[#C8102E] transition-colors duration-300 hover:border-[#C8102E] hover:text-[#a80d27]"
            >
              Customize my countdown
            </button>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-zinc-200" />

        <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Your celebration, thoughtfully managed
        </p>

        <span className="h-px w-8 bg-zinc-200" />
      </div>
    </section>
  );
}

