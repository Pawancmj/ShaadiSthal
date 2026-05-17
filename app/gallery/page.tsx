"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { ReactElement } from "react";
import Footer from "../components/Footer";

const filterTabs = ["All", "Decor", "Outfits", "Jewelry", "Venues", "Photography", "Mehndi"];

// Gallery images with varied heights for masonry effect
const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80", alt: "Jaipur Palace sunset", tall: true, col: 1 },
  { id: 2, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80", alt: "Wedding decor", tall: false, col: 2 },
  { id: 3, src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80", alt: "Bridal mehndi", tall: false, col: 3 },
  { id: 4, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", alt: "Royal couple", tall: true, col: 3 },
  { id: 5, src: "https://images.unsplash.com/photo-1614886137799-1bee2c31de25?w=600&q=80", alt: "Lehenga detail", tall: true, col: 1 },
  { id: 6, src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80", alt: "Heritage jewelry", tall: true, col: 2 },
  { id: 7, src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80", alt: "Wedding venue chandelier", tall: true, col: 3 },
];

export default function GalleryPage(): ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <div className="gallery-page">
      <Header />

      {/* ── HERO ── */}
      <div className="gallery-hero">
        <p className="gallery-hero__tag">The Digital Heirloom</p>
        <h1 className="gallery-hero__title">Curated Splendor for Your Forever</h1>
        <p className="gallery-hero__desc">
          Discover a world of regal aesthetics and timeless craftsmanship. From palatial decor to artisanal jewelry, every detail is handpicked for the modern Indian wedding.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="gallery-filters">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab;
          let cls = "gallery-filter-tab";
          if (isActive && tab === "All") cls += " gallery-filter-tab--active-red";
          else if (isActive && tab === "Decor") cls += " gallery-filter-tab--active-gold";
          else if (!isActive) cls += "";
          return (
            <button key={tab} className={cls} onClick={() => setActiveFilter(tab)}>
              {tab}
            </button>
          );
        })}
      </div>

      {/* ── MASONRY GALLERY ── */}
      <div className="gallery-grid-wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto",
          gap: 10,
        }}>
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="gallery-item" style={{ height: 360 }}>
              <img src={galleryItems[0].src} alt={galleryItems[0].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
            <div className="gallery-item" style={{ height: 320 }}>
              <img src={galleryItems[4].src} alt={galleryItems[4].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="gallery-item" style={{ height: 260 }}>
              <img src={galleryItems[1].src} alt={galleryItems[1].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
            <div className="gallery-item" style={{ height: 420 }}>
              <img src={galleryItems[5].src} alt={galleryItems[5].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
          </div>

          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="gallery-item" style={{ height: 200 }}>
              <img src={galleryItems[2].src} alt={galleryItems[2].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
            <div className="gallery-item" style={{ height: 260 }}>
              <img src={galleryItems[3].src} alt={galleryItems[3].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
            <div className="gallery-item" style={{ height: 220 }}>
              <img src={galleryItems[6].src} alt={galleryItems[6].alt} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── DISCOVER MORE ── */}
      <div className="gallery-discover">
        <p className="gallery-discover__text">Discover More Treasures</p>
      </div>
      <Footer />
    </div>
  );
}
