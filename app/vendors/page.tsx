"use client";

import { ReactElement, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
Check,
ChevronLeft,
ChevronRight,
Grid2X2,
Heart,
List,
MapPin,
SlidersHorizontal,
Star,
X,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { getVendors } from "@/api/vendor.api";

interface VendorApi {
id: number;
name: string;
isVerified: boolean;
venues?: {
id: number;
name: string;
city: string;
state?: string;
pricePerPlate: number;
rating: number;
category?: {
id: number;
name: string;
};
images?: {
id: number;
imageUrl: string;
}[];
}[];
}

interface Vendor {
id: number;
category: string;
name: string;
rating: number;
price: number;
city: string;
verified: boolean;
img: string;
}

const categories = [
"Photographers",
"Makeup Artists",
"Decorators",
];

const cities = [
"All Cities",
"Udaipur",
"Delhi NCR",
"Mumbai",
"Jaipur",
];

const mapVendorToCard = (vendor: VendorApi): Vendor | null => {
const venue = vendor.venues?.[0];

if (!venue) {
return null;
}

return {
id: vendor.id,
name: vendor.name,
category: venue.category?.name ?? "Wedding Services",
rating: venue.rating ?? 0,
price: venue.pricePerPlate ?? 0,
city: venue.city,
verified: vendor.isVerified,
img:
venue.images?.[0]?.imageUrl ??
"/images/vendor-placeholder.jpg",
};
};

const formatPrice = (price: number) => {
return `₹${price.toLocaleString("en-IN")}`;
};

export default function VendorsClient(): ReactElement {
const [vendors, setVendors] = useState<Vendor[]>([]);

const [selectedCat, setSelectedCat] = useState("");
const [city, setCity] = useState("All Cities");

const [sortBy, setSortBy] = useState("Popularity");

const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(500000);

const [verifiedOnly, setVerifiedOnly] = useState(false);

const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
const [activePage, setActivePage] = useState(1);

const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const [wishlist, setWishlist] = useState<number[]>([]);

const ITEMS_PER_PAGE = 6;

useEffect(() => {
const fetchVendors = async () => {
setLoading(true);
setError("");


  try {
    const res = await getVendors();

    if (!res.success) {
      setError(res.message || "Failed to load vendors.");
      return;
    }

    const apiVendors = (res.data ?? []) as VendorApi[];

    const mappedVendors = apiVendors
      .map(mapVendorToCard)
      .filter(
        (vendor): vendor is Vendor => vendor !== null
      );

    setVendors(mappedVendors);
  } catch (err) {
    console.error("Failed to fetch vendors:", err);
    setError("Unable to connect to the server.");
  } finally {
    setLoading(false);
  }
};

fetchVendors();


}, []);

const filteredVendors = useMemo(() => {
let result = [...vendors];

if (selectedCat) {
  result = result.filter((vendor) =>
    vendor.category
      .toLowerCase()
      .includes(selectedCat.toLowerCase())
  );
}

if (city !== "All Cities") {
  result = result.filter(
    (vendor) =>
      vendor.city.toLowerCase() === city.toLowerCase()
  );
}

result = result.filter(
  (vendor) =>
    vendor.price >= minPrice &&
    vendor.price <= maxPrice
);

if (verifiedOnly) {
  result = result.filter((vendor) => vendor.verified);
}

switch (sortBy) {
  case "Price: Low to High":
    result.sort((a, b) => a.price - b.price);
    break;

  case "Price: High to Low":
    result.sort((a, b) => b.price - a.price);
    break;

  case "Rating":
    result.sort((a, b) => b.rating - a.rating);
    break;

  case "Popularity":
  default:
    result.sort((a, b) => b.rating - a.rating);
    break;
}

return result;


}, [
vendors,
selectedCat,
city,
sortBy,
minPrice,
maxPrice,
verifiedOnly,
]);

const totalPages = Math.max(
1,
Math.ceil(
filteredVendors.length / ITEMS_PER_PAGE
)
);

const paginatedVendors = filteredVendors.slice(
(activePage - 1) * ITEMS_PER_PAGE,
activePage * ITEMS_PER_PAGE
);

useEffect(() => {
setActivePage(1);
}, [
selectedCat,
city,
sortBy,
minPrice,
maxPrice,
verifiedOnly,
]);

const toggleWishlist = (vendorId: number) => {
setWishlist((current) =>
current.includes(vendorId)
? current.filter((id) => id !== vendorId)
: [...current, vendorId]
);
};

const clearFilters = () => {
setSelectedCat("");
setCity("All Cities");
setMinPrice(0);
setMaxPrice(500000);
setVerifiedOnly(false);
};

return ( <div className="min-h-screen bg-[#faf9f7] text-zinc-900"> <Header />


  <main>
    <div className="mx-auto flex max-w-[1440px] gap-10 px-6 py-10 lg:px-10">

      {/* ───────────────── Sidebar ───────────────── */}

      <aside className="hidden w-[230px] shrink-0 lg:block">
        <div className="sticky top-[74px]">

          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                Refine
              </p>

              <h2 className="mt-1 text-[15px] font-medium tracking-[-0.01em] text-zinc-900">
                Filters
              </h2>
            </div>

            <SlidersHorizontal className="h-3.5 w-3.5 text-zinc-400" />
          </div>

          {/* Category */}

          <div className="py-5">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Category
            </p>

            <div className="space-y-3">
              {categories.map((category) => {
                const active =
                  selectedCat === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCat(
                        active ? "" : category
                      )
                    }
                    className="group flex w-full items-center gap-3 text-left"
                  >
                    <span
                      className={`flex h-[15px] w-[15px] items-center justify-center border transition ${
                        active
                          ? "border-[#b11b32] bg-[#b11b32]"
                          : "border-zinc-300 bg-transparent group-hover:border-zinc-500"
                      }`}
                    >
                      {active && (
                        <Check className="h-2.5 w-2.5 text-white" />
                      )}
                    </span>

                    <span
                      className={`text-[12px] transition ${
                        active
                          ? "font-medium text-zinc-900"
                          : "text-zinc-500 group-hover:text-zinc-800"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-zinc-200" />

          {/* City */}

          <div className="py-5">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              City
            </p>

            <select
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              className="h-9 w-full border border-zinc-200 bg-transparent px-2.5 text-[12px] text-zinc-700 outline-none transition focus:border-zinc-400"
            >
              {cities.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="h-px bg-zinc-200" />

          {/* Price */}

          <div className="py-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Price Range
              </p>

              <span className="text-[9px] text-zinc-400">
                ₹0 — ₹5L+
              </span>
            </div>

            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(
                    Math.min(
                      Number(e.target.value),
                      maxPrice
                    )
                  )
                }
                className="w-full accent-[#b11b32]"
              />

              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Math.max(
                      Number(e.target.value),
                      minPrice
                    )
                  )
                }
                className="w-full accent-[#b11b32]"
              />

              <div className="flex justify-between text-[10px] text-zinc-500">
                <span>
                  {formatPrice(minPrice)}
                </span>

                <span>
                  {formatPrice(maxPrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-200" />

          {/* Features */}

          <div className="py-5">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Features
            </p>

            <button
              type="button"
              onClick={() =>
                setVerifiedOnly(!verifiedOnly)
              }
              className={`border px-3 py-1.5 text-[10px] transition ${
                verifiedOnly
                  ? "border-[#b11b32] bg-[#b11b32] text-white"
                  : "border-zinc-200 bg-transparent text-zinc-500 hover:border-zinc-400"
              }`}
            >
              Verified
            </button>
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="flex h-9 w-full items-center justify-center gap-2 border border-zinc-900 bg-zinc-900 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#b11b32] hover:border-[#b11b32]"
          >
            <X className="h-3 w-3" />
            Clear Filters
          </button>

          {/* Collection */}

          <div className="relative mt-7 h-[170px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80"
              alt="Heritage wedding collection"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-x-4 bottom-4">
              <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/70">
                Elite Curation
              </p>

              <p className="mt-1 text-[13px] font-medium tracking-tight text-white">
                Heritage Wedding Collection
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* ───────────────── Main ───────────────── */}

      <section className="min-w-0 flex-1">

        {/* Page Header */}

        <div className="mb-8">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
            Curated Wedding Professionals
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-[30px] font-medium font-serif leading-none tracking-[-0.035em] text-zinc-900 md:text-[38px]">
                Artisan Vendors
              </h1>

              <p className="mt-3 max-w-[580px] text-[12px] leading-5 text-zinc-500">
                Discover photographers, makeup artists,
                decorators and other professionals curated
                for extraordinary celebrations.
              </p>
            </div>

            <p className="text-[10px] text-zinc-400">
              {filteredVendors.length}{" "}
              {filteredVendors.length === 1
                ? "vendor"
                : "vendors"}
            </p>
          </div>
        </div>

        {/* Toolbar */}

        <div className="mb-6 flex items-center justify-between border-y border-zinc-200 py-2.5">

          <div className="flex items-center">
            <button
              type="button"
              onClick={() =>
                setViewMode("grid")
              }
              className={`flex h-8 w-8 items-center justify-center border ${
                viewMode === "grid"
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-transparent text-zinc-400 hover:text-zinc-900"
              }`}
              aria-label="Grid view"
            >
              <Grid2X2 className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setViewMode("list")
              }
              className={`flex h-8 w-8 items-center justify-center border-y border-r ${
                viewMode === "list"
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-transparent text-zinc-400 hover:text-zinc-900"
              }`}
              aria-label="List view"
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-zinc-400">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="bg-transparent text-[10px] font-medium text-zinc-800 outline-none"
            >
              <option>Popularity</option>
              <option>
                Price: Low to High
              </option>
              <option>
                Price: High to Low
              </option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Loading */}

        {loading && (
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="animate-pulse"
                >
                  <div className="h-[260px] bg-zinc-200" />

                  <div className="pt-4">
                    <div className="h-2.5 w-24 bg-zinc-200" />
                    <div className="mt-3 h-4 w-36 bg-zinc-200" />
                    <div className="mt-2 h-2.5 w-20 bg-zinc-200" />
                    <div className="mt-5 h-8 w-full bg-zinc-200" />
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="flex min-h-[360px] flex-col items-center justify-center border border-zinc-200 bg-white text-center">
            <p className="text-sm font-medium text-zinc-900">
              Unable to load vendors
            </p>

            <p className="mt-2 max-w-sm text-[12px] leading-5 text-zinc-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                window.location.reload()
              }
              className="mt-5 bg-zinc-900 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#b11b32]"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          paginatedVendors.length === 0 && (
            <div className="flex min-h-[360px] flex-col items-center justify-center border border-zinc-200 bg-white text-center">
              <MapPin className="h-5 w-5 text-zinc-300" />

              <p className="mt-4 text-sm font-medium text-zinc-900">
                No vendors found
              </p>

              <p className="mt-2 text-[12px] text-zinc-500">
                Try changing your filters or selecting
                another city.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 border border-zinc-900 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
              >
                Clear Filters
              </button>
            </div>
          )}

        {/* Vendor Grid */}

        {!loading &&
          !error &&
          paginatedVendors.length > 0 && (
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-x-5 gap-y-9 sm:grid-cols-2 xl:grid-cols-3"
                  : "space-y-6"
              }
            >
              {paginatedVendors.map(
                (vendor) => {
                  const isWishlisted =
                    wishlist.includes(
                      vendor.id
                    );

                  return (
                    <article
                      key={vendor.id}
                      className={`group ${
                        viewMode === "list"
                          ? "flex flex-col gap-5 border-b border-zinc-200 pb-6 md:flex-row"
                          : ""
                      }`}
                    >

                      {/* Image */}

                      <div
                        className={`relative overflow-hidden bg-zinc-100 ${
                          viewMode === "list"
                            ? "h-[250px] md:h-[220px] md:w-[330px] md:shrink-0"
                            : "h-[260px]"
                        }`}
                      >
                        <img
                          src={vendor.img}
                          alt={vendor.name}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                        {vendor.verified && (
                          <div className="absolute left-3 top-3 flex items-center gap-1.5 bg-white/95 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-zinc-800">
                            <Check className="h-2.5 w-2.5" />
                            Verified
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            toggleWishlist(
                              vendor.id
                            )
                          }
                          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 transition hover:bg-white"
                          aria-label={
                            isWishlisted
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        >
                          <Heart
                            className={`h-3.5 w-3.5 ${
                              isWishlisted
                                ? "fill-[#b11b32] text-[#b11b32]"
                                : "text-[#b11b32]"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Content */}

                      <div className="flex flex-1 flex-col pt-3">

                        <div className="flex items-start justify-between gap-3">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.19em] text-[#b11b32]">
                            {vendor.category}
                          </p>

                          <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                            <Star className="h-3 w-3 fill-[#d4a017] text-[#d4a017]" />
                            {vendor.rating.toFixed(1)}
                          </div>
                        </div>

                        <h2 className="mt-2 text-[17px] font-medium leading-tight tracking-[-0.015em] text-zinc-900">
                          {vendor.name}
                        </h2>

                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-zinc-400">
                          <MapPin className="h-3 w-3" />
                          {vendor.city}
                        </div>

                        <div className="mt-5 flex items-end justify-between border-t border-zinc-100 pt-4">

                          <div>
                            <p className="text-[8px] uppercase tracking-[0.15em] text-zinc-400">
                              Starting From
                            </p>

                            <p className="mt-1 text-[14px] font-medium text-zinc-900">
                              {formatPrice(
                                vendor.price
                              )}
                            </p>
                          </div>

                          <Link
                            href={`/vendors/${vendor.id}`}
                            className="border border-zinc-900 px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
                          >
                            View Portfolio
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          )}

        {/* Pagination */}

        {!loading &&
          !error &&
          filteredVendors.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-1">
              <button
                type="button"
                disabled={activePage === 1}
                onClick={() =>
                  setActivePage((page) =>
                    Math.max(
                      1,
                      page - 1
                    )
                  )
                }
                className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 transition hover:border-zinc-400 hover:text-zinc-900 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>

              {Array.from(
                {
                  length: totalPages,
                },
                (_, index) => index + 1
              )
                .slice(0, 5)
                .map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() =>
                      setActivePage(page)
                    }
                    className={`flex h-8 w-8 items-center justify-center border text-[10px] transition ${
                      activePage === page
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              <button
                type="button"
                disabled={
                  activePage === totalPages
                }
                onClick={() =>
                  setActivePage((page) =>
                    Math.min(
                      totalPages,
                      page + 1
                    )
                  )
                }
                className="flex h-8 w-8 items-center justify-center border border-zinc-200 text-zinc-400 transition hover:border-zinc-400 hover:text-zinc-900 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
      </section>
    </div>
  </main>

  <Footer />
</div>


);
}
