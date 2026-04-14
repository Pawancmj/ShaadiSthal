"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Venues", href: "/venues" },
  { label: "Vendors", href: "/vendors" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Gallery", href: "/gallery" },
  { label: "Planning", href: "/planning" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
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
        {/* Logo – always redirects to home */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
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
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {navLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: isActive ? "#C8102E" : "#555",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #C8102E" : "none",
                  paddingBottom: isActive ? 2 : 0,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side – Sign In button (optional) */}
        <div>
          <button
            style={{
              background: "#C8102E",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "6px 16px",
              fontSize: "0.78rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}