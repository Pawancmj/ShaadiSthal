
"use client";

import { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const filterTabs = [
  "All",
  "Decor",
  "Outfits",
  "Jewelry",
  "Venues",
  "Photography",
  "Mehndi",
];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=85",
    alt: "Jaipur Palace sunset",
    category: "Venues",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=85",
    alt: "Wedding decor",
    category: "Decor",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=85",
    alt: "Bridal mehndi",
    category: "Mehndi",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85",
    alt: "Royal couple",
    category: "Photography",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1614886137799-1bee2c31de25?w=800&q=85",
    alt: "Lehenga detail",
    category: "Outfits",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85",
    alt: "Heritage jewelry",
    category: "Jewelry",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=85",
    alt: "Wedding venue chandelier",
    category: "Venues",
  },
];

export default function GalleryPage(): ReactElement {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const columns = [
    filteredItems.filter((_, index) => index % 3 === 0),
    filteredItems.filter((_, index) => index % 3 === 1),
    filteredItems.filter((_, index) => index % 3 === 2),
  ];

  const heights = [
    ["h-[360px]", "h-[320px]", "h-[260px]"],
    ["h-[260px]", "h-[420px]", "h-[300px]"],
    ["h-[200px]", "h-[260px]", "h-[220px]"],
  ];

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1160px] px-6 pb-12 pt-16 md:px-8 md:pt-20">
        <div className="max-w-[760px]">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
            The Digital Heirloom
          </p>

          <h1 className="font-serif text-[2.35rem] font-medium leading-[1.08] tracking-[-0.035em] text-zinc-900 md:text-[3.4rem]">
            Curated Splendor
            <br />
            <span className="italic text-zinc-600">
              for Your Forever.
            </span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-zinc-500 md:text-[13px]">
            Discover a world of regal aesthetics and timeless
            craftsmanship. From palatial decor to artisanal
            jewelry, every detail is handpicked for the modern
            Indian wedding.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-zinc-200">
        <div className="mx-auto flex max-w-[1160px] items-center gap-1 overflow-x-auto px-6 md:px-8">
          {filterTabs.map((tab) => {
            const active = activeFilter === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`relative shrink-0 px-4 py-4 text-[9px] font-semibold uppercase tracking-[0.14em] transition ${
                  active
                    ? "text-[#C8102E]"
                    : "text-zinc-400 hover:text-zinc-800"
                }`}
              >
                {tab}

                {active && (
                  <span className="absolute inset-x-4 bottom-0 h-[2px] bg-[#C8102E]" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery */}
      <main className="mx-auto max-w-[1160px] px-6 py-10 md:px-8 md:py-14">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-3"
              >
                {column.map((item, itemIndex) => (
                  <Link
                    key={item.id}
                    href="/gallery"
                    className={`group relative block overflow-hidden rounded-xl bg-zinc-100 ${
                      heights[columnIndex][itemIndex] ??
                      "h-[300px]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Content */}
                    <div className="absolute inset-x-5 bottom-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        {item.category}
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        {item.alt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] items-center justify-center border border-zinc-200">
            <div className="text-center">
              <p className="font-serif text-xl text-zinc-800">
                Nothing curated yet
              </p>

              <p className="mt-2 text-[11px] text-zinc-400">
                More inspiration is coming soon.
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter("All")}
                className="mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
              >
                View Everything
              </button>
            </div>
          </div>
        )}

        {/* Discover */}
        <div className="mt-16 flex flex-col items-center border-t border-zinc-200 pt-12 text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Discover More Treasures
          </p>

          <p className="mt-3 max-w-md font-serif text-xl leading-snug text-zinc-800 md:text-2xl">
            Every celebration has a story waiting to be discovered.
          </p>

          <Link
            href="/inspiration"
            className="group mt-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C8102E]"
          >
            Explore Inspiration
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

