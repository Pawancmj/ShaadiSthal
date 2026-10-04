
import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { trendingCities } from "../data/cities";

export default function TrendingCities(): ReactElement {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      {/* Header */}

      <div className="mb-9 flex flex-col items-center text-center">
        <div className="mb-3 h-[3px] w-9 rounded-full bg-[#C8102E]" />

        <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]">
        Discover your destination
        </p>

        <h2 className="mt-2 font-serif text-[2rem] font-medium leading-tight tracking-[-0.035em] text-zinc-900 md:text-[2.35rem]">
        Trending Cities
        </h2>

        <p className="mt-3 max-w-[440px] text-[11px] leading-5 text-zinc-400">
        Explore beautiful wedding destinations loved by couples
        planning their perfect celebration.
        </p>
      </div>

     

      {/* Cities */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        {trendingCities.map((city) => (
          <Link
            key={city.name}
            href={`/venues?city=${encodeURIComponent(city.name)}`}
            className="group relative overflow-hidden bg-zinc-100"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Top badge */}
              <div className="absolute left-3 top-3 flex items-center gap-1.5 bg-white/90 px-2.5 py-1.5 backdrop-blur-sm">
                <MapPin className="h-2.5 w-2.5 text-[#C8102E]" />

                <span className="text-[7px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                  Destination
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-[19px] font-medium tracking-[-0.02em] text-white">
                      {city.name}
                    </h3>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-white/65">
                      {city.venues}
                    </p>
                  </div>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#C8102E]">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom detail */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-zinc-200" />

        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Find your perfect wedding destination
        </p>

        <span className="h-px w-8 bg-zinc-200" />
      </div>
    </section>
  );
}

