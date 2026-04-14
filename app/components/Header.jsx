"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Venues", href: "/venues" },
  { label: "Vendors", href: "/vendors" },
  { label: "Planning", href: "/planning-tools" }, // or whatever your route is
  { label: "Inspiration", href: "/real-weddings" }, // adjust as needed
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "#fff",
      boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        maxWidth: 1160, margin: "0 auto",
        padding: "0 32px", height: 52,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        <Link href="/" style={{ textDecoration: "none" }}>
  <span
    style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.15rem",
      fontWeight: 700,
      color: "#C8102E",
    }}
  >
    ShaadiSthal   {/* ✅ Correct brand name */}
  </span>
</Link>

        {/* Desktop Nav Links */}
        <nav style={{ display: "flex", gap: 28 }}>
          {navLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link key={item.label} href={item.href} style={{
                fontSize: "0.8rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#C8102E" : "#444",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #C8102E" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s",
              }}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button style={{
            background: "none", border: "none",
            cursor: "pointer", color: "#555", padding: 4,
          }}>
            <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button style={{
            background: "#C8102E", color: "#fff",
            border: "none", cursor: "pointer",
            padding: "6px 18px", borderRadius: 4,
            fontSize: "0.78rem", fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Sign In
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none", border: "none",
              cursor: "pointer", color: "#444", padding: 4,
              display: "none",
            }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{
          background: "#fff",
          borderTop: "1px solid #f0f0f0",
          padding: "12px 32px 16px",
          display: "flex", flexDirection: "column", gap: 12,
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "0.85rem", fontWeight: 500,
                color: pathname === item.href ? "#C8102E" : "#444",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <button style={{
            background: "#C8102E", color: "#fff",
            border: "none", cursor: "pointer",
            padding: "8px 18px", borderRadius: 4,
            fontSize: "0.78rem", fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            alignSelf: "flex-start", marginTop: 4,
          }}>
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}