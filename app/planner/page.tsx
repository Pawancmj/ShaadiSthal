
"use client";

import { ReactElement, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardList,
  Heart,
  MapPin,
  MessageSquareText,
  RefreshCw,
  Save,
  Send,
  Share2,
  Sparkles,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const itinerary = [
  {
    day: "Day 1",
    title: "The Welcome & Mehndi",
    events: [
      ["10:00 AM", "Guest arrival and check-in at Heritage Suites"],
      ["04:00 PM", "Sun-kissed Mehndi Ceremony at Zenana Courtyard"],
      ["08:00 PM", "Intimate Welcome Dinner (Rajputana Theme)"],
    ],
  },
  {
    day: "Day 2",
    title: "Sangeet & Pheras",
    events: [
      ["11:00 AM", "Haldi Ritual & Traditional Folk Performances"],
      ["06:00 PM", "The Vows: Royal Pheras at the Central Gazebo"],
      ["10:00 PM", "Musical Gala & Celebration Dinner"],
    ],
  },
  {
    day: "Day 3",
    title: "The Grand Farewell",
    events: [
      ["09:00 AM", "Continental Farewell Brunch by the Lake"],
      ["12:00 PM", "Check-out & Gift Distribution"],
    ],
  },
];

const artisans = [
  {
    name: "The Heritage Frames",
    type: "Capturing timeless digital heirlooms with a cinematic royal touch.",
    meta: ["Jaipur Based", "₹2L/Day"],
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=85",
    slug: "heritage-frames",
  },
  {
    name: "Golden Petals",
    type: "Master decorators specializing in heritage palace transformations.",
    meta: ["Theme Expert", "Custom Pricing"],
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=700&q=85",
    slug: "golden-petals",
  },
  {
    name: "Royal Glow Studio",
    type: "Premium bridal artistry for the modern maharani.",
    meta: ["Airbrush Expert", "₹75K/Event"],
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=85",
    slug: "royal-glow-studio",
  },
];

const checklistItems = [
  "Secure City Palace Booking",
  "Draft Guest List (200)",
  "Schedule Tasting Session",
  "Finalize Royal Stationery",
];

export default function PlannerPage(): ReactElement {
  const [activeTab, setActiveTab] = useState<"chat" | "form">("chat");
  const [message, setMessage] = useState("");

  const [budget, setBudget] = useState("30-50");

  const [checkedItems, setCheckedItems] = useState<string[]>([
    "Draft Guest List (200)",
  ]);

  const toggleChecklist = (item: string) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    );
  };

  const handleSend = () => {
    if (!message.trim()) return;

    // AI integration can be connected here later.
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-zinc-900">
      <Header />

      {/* Hero */}
      <section className="mx-auto max-w-[1160px] px-6 pt-5 md:px-8 md:pt-7">
        <div className="relative min-h-[560px] overflow-hidden rounded-xl bg-zinc-900 md:min-h-[590px]">
          <img
            src="https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1600&q=85"
            alt="Golden wedding decor"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

          <div className="relative flex min-h-[560px] items-center px-7 py-16 md:min-h-[590px] md:px-14">
            <div className="max-w-[650px] text-white">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#f0c8c8]" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/70">
                  The ShaadiSthal Planner
                </p>
              </div>

              <h1 className="font-serif text-[2.7rem] font-medium leading-[1.02] tracking-[-0.035em] md:text-[4.4rem]">
                Plan Your Dream
                <br />
                Wedding with AI
              </h1>

              <p className="mt-6 max-w-[550px] text-[12px] leading-6 text-white/75 md:text-[13px]">
                Experience effortless planning with your personal wedding
                concierge. From palaces to photographers, curate every detail
                of your celebration in one place.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#planner-chat"
                  className="group inline-flex h-10 items-center gap-2 bg-white px-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-zinc-900 transition hover:bg-[#f4f0eb]"
                >
                  Start Planning
                  <Sparkles className="h-3 w-3 transition-transform duration-300 group-hover:rotate-12" />
                </a>

                <a
                  href="#planner-showcase"
                  className="inline-flex h-10 items-center border border-white/30 px-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  View Showcases
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Planner Console */}
      <section
        id="planner-chat"
        className="mx-auto max-w-[1160px] px-6 py-14 md:px-8 md:py-16"
      >
        <div className="mb-7">
          <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
            Your Personal Concierge
          </p>

          <h2 className="font-serif text-[1.8rem] font-medium tracking-[-0.025em] text-zinc-900 md:text-[2.15rem]">
            Build your wedding blueprint
          </h2>

          <p className="mt-2 max-w-[560px] text-[11px] leading-5 text-zinc-500">
            Tell us what you imagine. Your planner can turn those ideas into
            venues, vendors, budgets and a celebration timeline.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
          {/* Tabs */}
          <div className="flex border-b border-zinc-200">
            <button
              type="button"
              onClick={() => setActiveTab("chat")}
              className={`flex items-center gap-2 border-r border-zinc-200 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.14em] transition ${
                activeTab === "chat"
                  ? "bg-[#faf9f7] text-[#C8102E]"
                  : "text-zinc-400 hover:text-zinc-800"
              }`}
            >
              <MessageSquareText className="h-3.5 w-3.5" />
              Chat with AI
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("form")}
              className={`flex items-center gap-2 px-5 py-4 text-[8px] font-semibold uppercase tracking-[0.14em] transition ${
                activeTab === "form"
                  ? "bg-[#faf9f7] text-[#C8102E]"
                  : "text-zinc-400 hover:text-zinc-800"
              }`}
            >
              <ClipboardList className="h-3.5 w-3.5" />
              Quick Form
            </button>
          </div>

          <div className="grid lg:grid-cols-[1fr_330px]">
            {/* Chat */}
            <div className="flex min-h-[500px] flex-col border-b border-zinc-200 lg:border-b-0 lg:border-r">
              {activeTab === "chat" ? (
                <>
                  <div className="flex-1 space-y-6 p-6 md:p-8">
                    <div className="flex max-w-[560px] gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10 text-[8px] font-semibold text-[#C8102E]">
                        AI
                      </div>

                      <div className="rounded-r-xl rounded-bl-xl bg-[#f5f1ec] px-4 py-3">
                        <p className="text-[11px] leading-5 text-zinc-600">
                          Namaste! I am your Royal Wedding Concierge. Tell me
                          about your dream wedding vision or provide some
                          details to get started.
                        </p>
                      </div>
                    </div>

                    <div className="ml-auto flex max-w-[560px] justify-end gap-3">
                      <div className="rounded-l-xl rounded-br-xl bg-zinc-900 px-4 py-3">
                        <p className="text-[11px] leading-5 text-white/85">
                          I&apos;m looking for a royal heritage wedding in
                          Jaipur for 200 guests. Budget is approximately 50
                          Lakhs.
                        </p>
                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[8px] font-semibold text-zinc-500">
                        U
                      </div>
                    </div>

                    <div className="flex max-w-[560px] gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
                        <Sparkles className="h-3 w-3" />
                      </div>

                      <div className="rounded-r-xl rounded-bl-xl bg-[#f5f1ec] px-4 py-3">
                        <p className="text-[11px] leading-5 text-zinc-600">
                          Beautiful choice. I&apos;d recommend a heritage venue
                          with an outdoor mandap, approximately 350 guest
                          capacity, and a budget split that prioritizes venue,
                          stay and catering.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="border-t border-zinc-200 p-4">
                    <div className="flex h-11 items-center border border-zinc-200 bg-[#faf9f7] px-3 transition focus-within:border-zinc-400">
                      <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSend();
                        }}
                        placeholder="Ask anything about your royal wedding..."
                        className="w-full bg-transparent text-[10px] text-zinc-700 outline-none placeholder:text-zinc-400"
                      />

                      <button
                        type="button"
                        onClick={handleSend}
                        aria-label="Send planner message"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E] text-white transition hover:bg-[#a20d25]"
                      >
                        <Send className="h-3 w-3" />
                      </button>
                    </div>

                    <p className="mt-2 text-[8px] text-zinc-400">
                      AI planning will connect to your venue and vendor data
                      once the planner backend is enabled.
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                    Quick Setup
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-medium">
                    Tell us the essentials.
                  </h3>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-400">
                        Location
                      </label>
                      <input
                        defaultValue="Jaipur, Rajasthan"
                        className="h-10 w-full border border-zinc-200 px-3 text-[10px] outline-none focus:border-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-400">
                        Guests
                      </label>
                      <input
                        defaultValue="200"
                        type="number"
                        className="h-10 w-full border border-zinc-200 px-3 text-[10px] outline-none focus:border-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-400">
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        className="h-10 w-full border border-zinc-200 px-3 text-[10px] text-zinc-600 outline-none focus:border-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.13em] text-zinc-400">
                        Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="h-10 w-full border border-zinc-200 bg-white px-3 text-[10px] outline-none focus:border-zinc-400"
                      >
                        <option value="30-50">₹30L - ₹50L</option>
                        <option value="50-75">₹50L - ₹75L</option>
                        <option value="75+">₹75L+</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-6 inline-flex h-10 w-fit items-center gap-2 bg-[#C8102E] px-5 text-[8px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#a20d25]"
                  >
                    Generate Blueprint
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Blueprint */}
            <aside className="bg-[#faf9f7] p-6 md:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#C8102E]">
                    AI Generated
                  </p>

                  <h2 className="mt-1 font-serif text-[20px] font-medium">
                    Wedding Blueprint
                  </h2>
                </div>

                <Sparkles className="h-4 w-4 text-[#C8102E]" />
              </div>

              <div className="mt-7">
                <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Location & Date
                </label>

                <div className="grid grid-cols-[1fr_100px] gap-2">
                  <input
                    value="Jaipur, Rajasthan"
                    readOnly
                    className="h-9 border border-zinc-200 bg-white px-2.5 text-[9px] text-zinc-600 outline-none"
                  />

                  <input
                    value="Nov 2026"
                    readOnly
                    className="h-9 border border-zinc-200 bg-white px-2.5 text-[9px] text-zinc-600 outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Budget Range
                </label>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="h-9 w-full border border-zinc-200 bg-white px-2.5 text-[9px] text-zinc-600 outline-none"
                >
                  <option value="30-50">₹30L - ₹50L</option>
                  <option value="50-75">₹50L - ₹75L</option>
                  <option value="75+">₹75L+</option>
                </select>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Theme
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["Royal Heritage", "Classic Gold", "Outdoor"].map(
                    (theme) => (
                      <span
                        key={theme}
                        className="border border-[#C8102E]/15 bg-[#C8102E]/5 px-2.5 py-1.5 text-[8px] font-medium text-[#C8102E]"
                      >
                        {theme}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Functions
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["Mehndi", "Sangeet", "Haldi", "Reception"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-2 text-[9px] text-zinc-600"
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          className="accent-[#C8102E]"
                        />
                        {item}
                      </label>
                    )
                  )}
                </div>
              </div>

              <button
                type="button"
                className="mt-7 h-9 w-full bg-zinc-900 text-[8px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-zinc-800"
              >
                Update Plan
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* Proposal */}
      <section
        id="planner-showcase"
        className="border-y border-zinc-200 bg-white"
      >
        <div className="mx-auto max-w-[1160px] px-6 py-14 md:px-8 md:py-16">
          <div className="flex flex-col gap-5 border-b border-zinc-200 pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                Your Curated Experience
              </p>

              <h2 className="font-serif text-[1.8rem] font-medium tracking-[-0.025em] md:text-[2.15rem]">
                The Royal Rajasthan Proposal
              </h2>
            </div>

            <div className="flex items-center gap-1">
              {[RefreshCw, Save, Share2].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={
                    index === 0
                      ? "Refresh proposal"
                      : index === 1
                        ? "Save proposal"
                        : "Share proposal"
                  }
                  className="flex h-9 w-9 items-center justify-center border border-zinc-200 text-zinc-400 transition hover:border-zinc-300 hover:text-zinc-900"
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_290px]">
            <div className="space-y-5">
              {/* Venue Recommendation */}
              <article className="overflow-hidden rounded-xl border border-zinc-200">
                <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700">
                      Primary Venue Recommendation
                    </h3>

                    <p className="mt-1 flex items-center gap-1 text-[8px] text-zinc-400">
                      <MapPin className="h-2.5 w-2.5" />
                      Jaipur, Rajasthan
                    </p>
                  </div>

                  <span className="border border-[#C8102E]/15 bg-[#C8102E]/5 px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#C8102E]">
                    98% Match
                  </span>
                </div>

                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="h-[230px] md:h-full">
                    <img
                      src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=85"
                      alt="City Palace Heritage Wings"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-[22px] font-medium tracking-[-0.02em]">
                      The City Palace Heritage Wings
                    </h4>

                    <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-zinc-500">
                      Exclusive heritage access with sunset views of the
                      Aravallis. Accommodates up to 350 guests comfortably.
                    </p>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2 text-[9px] text-zinc-600">
                        <Check className="h-3 w-3 text-[#C8102E]" />
                        Traditional Shahi Swagat Entry
                      </li>

                      <li className="flex items-center gap-2 text-[9px] text-zinc-600">
                        <Check className="h-3 w-3 text-[#C8102E]" />
                        Outdoor Mandap Availability
                      </li>
                    </ul>

                    <Link
                      href="/venues/raj-palace"
                      className="group mt-5 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#C8102E]"
                    >
                      Explore Venue Details
                      <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>

              {/* Moodboard */}
              <div className="grid gap-3 md:grid-cols-[1fr_150px]">
                <div className="relative h-[300px] overflow-hidden rounded-xl bg-zinc-100">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85"
                    alt="Floral wedding decor"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-white">
                    Theme: Filigree & Florals
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-1 flex-col justify-center rounded-xl bg-[#f2eee8] p-5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C8102E]">
                      Royal Palette
                    </p>

                    <div className="mt-4 flex gap-1.5">
                      <span className="h-7 w-7 rounded-full bg-[#cf005a]" />
                      <span className="h-7 w-7 rounded-full bg-[#f2cf64]" />
                      <span className="h-7 w-7 rounded-full bg-[#ead8d8]" />
                    </div>
                  </div>

                  <div className="h-[145px] overflow-hidden rounded-xl bg-zinc-100">
                    <img
                      src="https://images.unsplash.com/photo-1595349603091-a15d03875865?w=600&q=85"
                      alt="Bridal lehenga"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              {/* Budget */}
              <div className="rounded-xl border border-zinc-200 bg-[#faf9f7] p-5">
                <h3 className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  Budget Breakdown
                </h3>

                <div className="mx-auto mt-6 flex h-36 w-36 items-center justify-center rounded-full border-[15px] border-[#C8102E]/15">
                  <div className="text-center">
                    <span className="block text-[7px] uppercase tracking-[0.15em] text-zinc-400">
                      Total
                    </span>

                    <strong className="mt-1 block font-serif text-[22px] font-medium text-zinc-900">
                      ₹50L
                    </strong>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center justify-between text-[9px] text-zinc-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
                      Venue & Stay
                    </span>
                    <strong className="font-medium text-zinc-700">
                      ₹20L
                    </strong>
                  </li>

                  <li className="flex items-center justify-between text-[9px] text-zinc-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#d98a9b]" />
                      Catering
                    </span>
                    <strong className="font-medium text-zinc-700">
                      ₹15L
                    </strong>
                  </li>

                  <li className="flex items-center justify-between text-[9px] text-zinc-500">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#e8cfd3]" />
                      Other Services
                    </span>
                    <strong className="font-medium text-zinc-700">
                      ₹15L
                    </strong>
                  </li>
                </ul>
              </div>

              {/* Checklist */}
              <div className="rounded-xl border border-zinc-200 bg-white p-5">
                <h3 className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                  Immediate Checklist
                </h3>

                <div className="mt-5 space-y-3">
                  {checklistItems.map((item) => {
                    const checked = checkedItems.includes(item);

                    return (
                      <label
                        key={item}
                        className="flex cursor-pointer items-start gap-2.5"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleChecklist(item)}
                          className="mt-0.5 accent-[#C8102E]"
                        />

                        <span
                          className={`text-[9px] leading-4 ${
                            checked
                              ? "text-zinc-400 line-through"
                              : "text-zinc-600"
                          }`}
                        >
                          {item}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8 md:py-16">
        <div className="mb-7">
          <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Your Celebration
          </p>

          <h2 className="font-serif text-[1.8rem] font-medium tracking-[-0.025em]">
            Wedding Itinerary
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {itinerary.map((day) => (
            <article
              key={day.day}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300"
            >
              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#C8102E]">
                {day.day}
              </span>

              <h3 className="mt-2 font-serif text-[19px] font-medium leading-tight">
                {day.title}
              </h3>

              <div className="mt-6 space-y-4">
                {day.events.map(([time, item]) => (
                  <div
                    key={`${day.day}-${time}`}
                    className="border-l border-zinc-200 pl-3"
                  >
                    <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-zinc-400">
                      {time}
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-zinc-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Recommended Artisans */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-[1160px] px-6 py-14 md:px-8 md:py-16">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#C8102E]">
                Handpicked For You
              </p>

              <h2 className="font-serif text-[1.8rem] font-medium tracking-[-0.025em]">
                Recommended Artisans
              </h2>
            </div>

            <Link
              href="/vendors"
              className="hidden items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#C8102E] sm:flex"
            >
              View All
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {artisans.map((artisan) => (
              <article
                key={artisan.name}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-[#faf9f7]"
              >
                <Link href={`/vendors/${artisan.slug}`} className="block">
                  <div className="relative h-[230px] overflow-hidden bg-zinc-100">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    <button
                      type="button"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`Save ${artisan.name}`}
                      className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#C8102E]"
                    >
                      <Heart className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-serif text-[19px] font-medium leading-tight">
                        {artisan.name}
                      </h3>

                      <span className="text-[9px] tracking-[0.08em] text-zinc-300">
                        ★★★★★
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] leading-5 text-zinc-500">
                      {artisan.type}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {artisan.meta.map((item) => (
                        <span
                          key={item}
                          className="border border-zinc-200 bg-white px-2 py-1.5 text-[7px] font-semibold uppercase tracking-[0.1em] text-zinc-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#C8102E]">
                        View Details
                      </span>

                      <ArrowRight className="h-3 w-3 text-[#C8102E] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[1160px] px-6 py-14 md:px-8 md:py-16">
        <div className="border-t border-zinc-200 pt-12 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-zinc-400">
            One celebration. Every detail.
          </p>

          <h2 className="mx-auto mt-3 max-w-[620px] font-serif text-[1.7rem] leading-tight tracking-[-0.025em] text-zinc-800 md:text-[2.15rem]">
            Your dream wedding deserves a plan as beautiful as the day itself.
          </h2>

          <a
            href="#planner-chat"
            className="group mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#C8102E]"
          >
            Continue Planning
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

