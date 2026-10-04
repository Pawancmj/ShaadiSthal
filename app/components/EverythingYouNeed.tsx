
"use client";

import React from "react";
import {
  Camera,
  ChefHat,
  Gem,
  Landmark,
  Palette,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    label: "Venues",
    description: "Find your perfect setting",
    icon: Landmark,
  },
  {
    label: "Photographers",
    description: "Capture every moment",
    icon: Camera,
  },
  {
    label: "Makeup",
    description: "Look your absolute best",
    icon: Sparkles,
  },
  {
    label: "Catering",
    description: "Curated culinary experiences",
    icon: ChefHat,
  },
  {
    label: "Decor",
    description: "Bring your vision to life",
    icon: Palette,
  },
  {
    label: "Jewelry",
    description: "Complete your celebration",
    icon: Gem,
  },
];

export default function EverythingYouNeed(): React.ReactElement {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      {/* Header */}
      <div className="mb-9 flex flex-col items-center text-center">
        <div className="mb-3 h-[3px] w-9 rounded-full bg-[#C8102E]" />

        <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]">
          Plan every detail
        </p>

        <h2 className="mt-2 font-serif text-[2rem] font-medium leading-tight tracking-[-0.035em] text-zinc-900 md:text-[2.35rem]">
          Everything You Need
        </h2>

        <p className="mt-3 max-w-[440px] text-[11px] leading-5 text-zinc-400">
          From finding the perfect venue to the finishing touches,
          discover everything you need to bring your celebration together.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-2 border-t border-l border-zinc-200 sm:grid-cols-3 lg:grid-cols-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <a
              key={service.label}
              href="#"
              className="group relative border-b border-r border-zinc-200 bg-white px-4 py-7 text-center transition-all duration-300 hover:bg-[#f8f5f0]"
            >
              {/* Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-300 group-hover:border-[#C8102E]/20 group-hover:bg-[#C8102E]/5 group-hover:text-[#C8102E]">
                <Icon className="h-5 w-5 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Label */}
              <h3 className="mt-4 font-serif text-[15px] font-medium text-zinc-800 transition-colors duration-300 group-hover:text-[#C8102E]">
                {service.label}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-[8px] leading-4 text-zinc-400">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex justify-center">
                <span className="flex h-5 w-5 items-center justify-center text-zinc-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#C8102E]">
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Bottom link */}
      <div className="mt-7 flex justify-center">
        <a
          href="#"
          className="group inline-flex items-center gap-2 border-b border-zinc-300 pb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]"
        >
          Explore all wedding services
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}

