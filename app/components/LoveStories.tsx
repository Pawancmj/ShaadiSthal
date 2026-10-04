
"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const stories = [
  {
    title: "The Udaipur Affair",
    date: "October 2024",
    location: "Udaipur, Rajasthan",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed31f2e?w=1000&q=85",
  },
  {
    title: "A Royal Delhi Soiree",
    date: "December 2024",
    location: "New Delhi, India",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1000&q=85",
  },
];

export default function LoveStories(): React.ReactElement {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center text-center"> <div className="mb-3 h-[3px] w-9 rounded-full bg-[#C8102E]" /> <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]"> From our couples </p> <h2 className="mt-1 font-serif text-[2rem] font-medium leading-tight tracking-[-0.035em] text-zinc-900 md:text-[2.35rem]"> Real Love Stories </h2> <p className="mt-2 max-w-[430px] text-[10px] leading-5 text-zinc-400 md:text-[11px]"> Beautiful celebrations, unforgettable places and the stories behind them. </p> <Link href="/real-wedding" className="group mt-4 inline-flex items-center gap-2 border-b border-zinc-300 pb-1 text-[8px] font-semibold uppercase tracking-[0.17em] text-zinc-500 transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]" > View all stories <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link> </div>

      {/* Stories */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {stories.map((story, index) => (
          <Link
            key={story.title}
            href="/real-wedding"
            className="group relative block h-[340px] overflow-hidden bg-zinc-100 sm:h-[380px]"
          >
            {/* Image */}
            <img
              src={story.img}
              alt={story.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5 transition-opacity duration-500 group-hover:from-black/80" />

            {/* Top metadata */}
            <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
              <span className="bg-white/95 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-zinc-700 backdrop-blur-sm">
                Real Wedding
              </span>

              <span className="flex h-8 w-8 items-center justify-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#C8102E]">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>

            {/* Story number */}
            <span className="absolute bottom-5 right-5 font-serif text-[3.5rem] leading-none text-white/10 transition-colors duration-500 group-hover:text-white/20">
              0{index + 1}
            </span>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="mb-2 flex items-center gap-1.5 text-[7px] font-semibold uppercase tracking-[0.14em] text-white/60">
                <MapPin className="h-2.5 w-2.5" />
                {story.location}
              </p>

              <h3 className="max-w-[360px] font-serif text-[1.65rem] font-medium leading-tight tracking-[-0.025em] text-white sm:text-[1.9rem]">
                {story.title}
              </h3>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-7 bg-[#C8102E]" />

                <p className="text-[8px] uppercase tracking-[0.14em] text-white/55">
                  {story.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom detail */}
      <div className="mt-8 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-zinc-200" />

          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Your story could be next
          </p>

          <span className="h-px w-8 bg-zinc-200" />
        </div>

        <Link
          href="/real-wedding"
          className="group mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
        >
          Explore real weddings
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

