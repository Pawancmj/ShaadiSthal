
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85",
    alt: "Wedding jewelry",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85",
    alt: "Wedding couple",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=900&q=85",
    alt: "Wedding cake",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85",
    alt: "Wedding celebration",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85",
    alt: "Wedding venue",
    tall: false,
  },
];

export default function HeirloomGallery(): React.ReactElement {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center text-center"> <div className="mb-3 h-[3px] w-9 rounded-full bg-[#C8102E]" /> <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#C8102E]"> Moments worth keeping </p> <h2 className="mt-1 font-serif text-[2rem] font-medium leading-tight tracking-[-0.035em] text-zinc-900 md:text-[2.35rem]"> The Heirloom Gallery </h2> <p className="mt-2 max-w-[430px] text-[10px] leading-5 text-zinc-400 md:text-[11px]"> Beautiful memories, celebrations and inspirations captured in frame. </p> <Link href="/gallery" className="group mt-4 inline-flex items-center gap-2 border-b border-zinc-300 pb-1 text-[8px] font-semibold uppercase tracking-[0.17em] text-zinc-500 transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]" > View all <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> </Link> </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:grid-rows-[180px_180px] md:gap-3 md:grid-rows-[205px_205px]">
        {images.map((img, index) => (
          <Link
            key={img.src}
            href="/gallery"
            className={`group relative overflow-hidden bg-zinc-100 ${
              img.tall
                ? "row-span-2"
                : ""
            } ${
              index === 3
                ? "col-span-1"
                : ""
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Image number */}
            <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center border border-white/30 bg-black/10 text-[7px] font-medium text-white backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Hover label */}
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white">
                {img.alt}
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="mt-7 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-zinc-200" />

          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Inspiration for your celebration
          </p>

          <span className="h-px w-8 bg-zinc-200" />
        </div>

        <Link
          href="/gallery"
          className="group mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
        >
          Explore the gallery
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

