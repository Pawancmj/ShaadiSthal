
"use client";

import { ReactElement, useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Clock3 } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const articles = [
  {
    id: 1,
    cat: "Jewelry Guide",
    title: "The Alchemy of Heritage Gold: A Temple Jewelry Guide",
    desc: "Discover the centuries-old craftsmanship behind South India's temple jewelry and how to style it for a contemporary royal wedding look.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=85",
    slug: "temple-jewelry-guide",
  },
  {
    id: 2,
    cat: "Decor Trends",
    title: "Minimalist Majesty: The New Era of Al-Fresco Celebrations",
    desc: "Why 'Less is More' is becoming the mantra for high-end heritage weddings this season, focusing on architectural light and botanical textures.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=85",
    slug: "minimalist-majesty",
  },
  {
    id: 3,
    cat: "Real Stories",
    title: "A Palace Affair: Meera & Rohan's Udaipur Union",
    desc: "From the vintage car arrival to the midnight lake-side pheras, step inside a three-day celebration of love at the City Palace.",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85",
    slug: "palace-affair",
  },
  {
    id: 4,
    cat: "Traditions",
    title: "Decoding the Mehndi: Symbols and Secret Histories",
    desc: "Explore the symbols, stories and centuries-old traditions hidden within the intricate art of mehndi.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&q=85",
    slug: "decoding-mehndi",
  },
];

const trendingStories = [
  {
    title: "Top 10 Royal Groom Wear Trends for 2025",
    read: "5 min read",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    title: "The Artisanal Mithai Renaissance",
    read: "4 min read",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&q=80",
  },
];

const editorPicks = [
  {
    cat: "Traditions",
    title: "The Sacred Threads: Understanding Wedding Textiles",
  },
  {
    cat: "Planning",
    title: "Managing Guest Lists with Royal Grace",
  },
];

const filterTabs = [
  "All",
  "Traditions",
  "Decor Trends",
  "Jewelry Guide",
  "Real Stories",
  "Planning Tips",
];

export default function InspirationPage(): ReactElement {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeTab === "All" ||
        article.cat === activeTab ||
        (activeTab === "Planning Tips" &&
          article.cat === "Planning");

      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.desc.toLowerCase().includes(query) ||
        article.cat.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />

      {/* Editorial Header */}
      <section className="mx-auto max-w-[1160px] px-6 pb-10 pt-14 md:px-8 md:pt-16">
        <div className="max-w-[760px]">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
            The Digital Heirloom
          </p>

          <h1 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-[-0.035em] text-zinc-900 md:text-[3.6rem]">
            The ShaadiSthal
            <br />
            <span className="italic text-zinc-500">
              Journal.
            </span>
          </h1>

          <p className="mt-5 max-w-[620px] text-[12px] leading-6 text-zinc-500 md:text-[13px]">
            Stories, traditions and thoughtful inspiration for
            celebrations that deserve to be remembered.
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="border-y border-zinc-200">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex overflow-x-auto">
            {filterTabs.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative shrink-0 px-3 py-3 text-[9px] font-semibold uppercase tracking-[0.13em] transition ${
                    active
                      ? "text-[#C8102E]"
                      : "text-zinc-400 hover:text-zinc-800"
                  }`}
                >
                  {tab}

                  {active && (
                    <span className="absolute inset-x-3 bottom-0 h-[2px] bg-[#C8102E]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex h-9 w-full items-center border border-zinc-200 bg-white px-3 md:w-[210px]">
            <Search className="h-3.5 w-3.5 shrink-0 text-zinc-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search the Journal"
              className="ml-2 w-full bg-transparent text-[10px] text-zinc-700 outline-none placeholder:text-zinc-400"
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto grid max-w-[1160px] gap-12 px-6 py-12 md:px-8 lg:grid-cols-[1fr_280px]">
        {/* Articles */}
        <section>
          {filteredArticles.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group"
                >
                  <Link
                    href={`/inspiration/${article.slug}`}
                    className="block"
                  >
                    <div className="relative h-[260px] overflow-hidden rounded-xl bg-zinc-100">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="absolute left-4 top-4 bg-white/95 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#C8102E]">
                        {article.cat}
                      </span>
                    </div>

                    <div className="pt-4">
                      <h2 className="font-serif text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-zinc-900 transition-colors group-hover:text-[#C8102E]">
                        {article.title}
                      </h2>

                      <p className="mt-3 text-[11px] leading-5 text-zinc-500">
                        {article.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]">
                        Read More
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center border border-zinc-200 text-center">
              <div>
                <p className="font-serif text-xl text-zinc-800">
                  No stories found
                </p>

                <p className="mt-2 text-[11px] text-zinc-400">
                  Try another category or search term.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("All");
                    setSearch("");
                  }}
                  className="mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]"
                >
                  Reset Journal
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Sidebar */}
        <aside className="space-y-10 lg:border-l lg:border-zinc-200 lg:pl-8">
          {/* Trending */}
          <section>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Trending Stories
            </p>

            <div className="space-y-5">
              {trendingStories.map((story) => (
                <Link
                  key={story.title}
                  href="/inspiration"
                  className="group flex gap-3"
                >
                  <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-md bg-zinc-100">
                    <img
                      src={story.img}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium leading-4 text-zinc-800 transition-colors group-hover:text-[#C8102E]">
                      {story.title}
                    </p>

                    <p className="mt-2 flex items-center gap-1 text-[8px] uppercase tracking-[0.1em] text-zinc-400">
                      <Clock3 className="h-2.5 w-2.5" />
                      {story.read}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Subscribe */}
          <section className="bg-[#f2eee8] p-6">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
              The Digital Heirloom
            </p>

            <h3 className="mt-3 font-serif text-[19px] font-medium leading-tight text-zinc-900">
              Stories worth keeping.
            </h3>

            <p className="mt-3 text-[10px] leading-5 text-zinc-500">
              Weekly curations of wedding opulence, tradition
              and thoughtful planning delivered to your inbox.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="mt-5 h-9 w-full border border-zinc-200 bg-white px-3 text-[10px] text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-zinc-400"
            />

            <button
              type="button"
              className="mt-2 h-9 w-full bg-[#C8102E] text-[8px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a20d25]"
            >
              Subscribe Now
            </button>
          </section>

          {/* Editor's Picks */}
          <section>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Editor's Picks
            </p>

            <div className="space-y-5">
              {editorPicks.map((pick) => (
                <Link
                  key={pick.title}
                  href="/inspiration"
                  className="group block border-b border-zinc-200 pb-5 last:border-0"
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#C8102E]">
                    {pick.cat}
                  </p>

                  <p className="mt-2 font-serif text-[14px] leading-5 text-zinc-800 transition-colors group-hover:text-[#C8102E]">
                    {pick.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

