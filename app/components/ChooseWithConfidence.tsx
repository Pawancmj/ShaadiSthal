"use client";

import Link from "next/link";
import { ReactElement } from "react";
import { Sparkles } from "lucide-react";

const venueA = {
  name: "Heritage Manor",
  img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80",
  specs: [
    { label: "Capacity", value: "500-800" },
    { label: "Parking", value: "100 Cars" },
    { label: "Liquor", value: "Allowed" },
  ],
};

const venueB = {
  name: "The Oberoi Suites",
  img: "https://images.unsplash.com/photo-1558237746-860e0a5bd7ea?w=400&q=80",
  specs: [
    { label: "Capacity", value: "200-400" },
    { label: "Parking", value: "Valet Only" },
    { label: "Liquor", value: "In-house" },
  ],
};

export default function ChooseWithConfidence(): ReactElement {
  return (
    <section style={{
      background: "#EBE8E2",
      fontFamily: "'DM Sans', sans-serif",
      padding: "80px 24px",
    }}>
      <div style={{
        maxWidth: 1000, margin: "0 auto",
        display: "flex", gap: 70, alignItems: "center", flexWrap: "wrap"
      }}>
        
        {/* Left Content */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{
            fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
            color: "#C83B5E", textTransform: "uppercase", marginBottom: 12
          }}>
            Smart Tools
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.4rem", fontWeight: 700, color: "#1A1A1A",
            marginBottom: 20
          }}>
            Choose with Confidence.
          </h2>
          <p style={{
            fontSize: "0.85rem", color: "#666", lineHeight: 1.6,
            maxWidth: 400, marginBottom: 32
          }}>
            Stop jumping between tabs. Compare your top venue choices side-by-side on pricing, capacity, parking, and exclusive amenities in one sleek view.
          </p>
          <Link href="/comparison" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#1a1a1a", color: "#fff",
            padding: "14px 28px", borderRadius: 4,
            fontSize: "0.8rem", fontWeight: 600,
            textDecoration: "none"
          }}>
            Try Comparison Tool
            <Sparkles size={14} />
          </Link>
        </div>

        {/* Right Card */}
        <div style={{ flex: 1.2, minWidth: 340 }}>
          <div style={{
            background: "#fff", borderRadius: 12,
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            padding: "24px 28px",
          }}>
            
            {/* Photos & VS */}
            <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 16 }}>
              <div style={{ flex: 1, height: 160, borderRadius: 6, overflow: "hidden" }}>
                <img src={venueA.img} alt={venueA.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{
                width: 32, height: 32, flexShrink: 0,
                background: "#7E6E2D", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.65rem", fontWeight: 800, color: "#fff"
              }}>
                VS
              </div>
              <div style={{ flex: 1, height: 160, borderRadius: 6, overflow: "hidden" }}>
                <img src={venueB.img} alt={venueB.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Names */}
            <div style={{ display: "flex", gap: 52, marginBottom: 20 }}>
              <div style={{ flex: 1, textAlign: "center", fontSize: "0.8rem", fontWeight: 700, color: "#111" }}>
                {venueA.name}
              </div>
              <div style={{ flex: 1, textAlign: "center", fontSize: "0.8rem", fontWeight: 700, color: "#111" }}>
                {venueB.name}
              </div>
            </div>

            {/* Table Rows */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  display: "flex", gap: 52,
                  borderTop: "1px solid #f4f4f4",
                  padding: "14px 0",
                  fontSize: "0.75rem"
                }}>
                  <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#888" }}>{venueA.specs[i].label}</span>
                    <span style={{ color: "#333", fontWeight: 500 }}>{venueA.specs[i].value}</span>
                  </div>
                  <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "#888" }}>{venueB.specs[i].label}</span>
                    <span style={{ color: "#333", fontWeight: 500 }}>{venueB.specs[i].value}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
