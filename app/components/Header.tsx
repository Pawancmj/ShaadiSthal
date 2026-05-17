"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Venues", href: "/venues" },
  { label: "Vendors", href: "/vendors" },
  { label: "Real Weddings", href: "/real-wedding" },
  { label: "Comparison", href: "/comparison" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Gallery", href: "/gallery" },
  { label: "Planner", href: "/planner" },
];

export default function Header(): React.ReactElement {
  const pathname = usePathname();

  return (
    <header
      className="site-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        height: 54,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="site-header__inner"
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            className="site-header__brand"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#C8102E",
            }}
          >
            ShaadiSthal
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="site-header__nav" style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#C8102E" : "#555",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #C8102E" : "none",
                  paddingBottom: isActive ? 2 : 0,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="site-header__actions" style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <Link
            href="/signin"
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "#555",
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>
          <Link href="/signup">
            <button
              className="site-header__button"
              style={{
                background: "#C8102E",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "6px 16px",
                fontSize: "0.78rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
