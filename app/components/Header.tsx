
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  LogOut,
  User,
  ArrowRight,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

import { logoutUser } from "@/api/auth.api";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const navLinks = [
  { label: "Venues", href: "/venues" },
  { label: "Vendors", href: "/vendors" },
  { label: "Real Weddings", href: "/real-wedding" },
  { label: "Comparison", href: "/comparison" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Gallery", href: "/gallery" },
  { label: "Planner", href: "/planner" },
];

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("user");
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setLoading(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      const res = await logoutUser();

      if (res.success) {
        localStorage.removeItem("user");
        setUser(null);
        setMobileMenuOpen(false);

        router.push("/");
        router.refresh();
      } else {
        console.error("Logout failed:", res.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-[100] h-[58px] border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-full w-full max-w-[1160px] items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-[110] no-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="font-serif text-[1.15rem] font-semibold tracking-[-0.025em] text-[#C8102E]">
              ShaadiSthal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative whitespace-nowrap py-1 text-[11px] font-medium no-underline transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-[#C8102E]"
                      : "text-zinc-600 hover:text-[#C8102E]"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-[#C8102E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            {loading ? (
              <div className="h-8 w-24 animate-pulse rounded-md bg-zinc-100" />
            ) : user ? (
              <>
                <Link
                  href="/profile"
                  className="group flex items-center gap-2 rounded-full border border-zinc-200 py-1 pl-1 pr-3 no-underline transition-colors hover:border-zinc-300"
                >
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E]/5 text-[13px] text-[#C8102E] ${greatVibes.className}`}
                  >
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <span className="max-w-[110px] truncate text-[10px] font-semibold text-zinc-700">
                    {user.name}
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  title="Logout"
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-[#C8102E]"
                >
                  <LogOut size={15} strokeWidth={1.8} />
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-[10px] font-medium text-zinc-600 no-underline transition-colors hover:text-[#C8102E]"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="rounded-md bg-[#C8102E] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-[#a80d26]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-[110] flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-300 hover:text-[#C8102E] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" strokeWidth={1.8} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-[58px] w-full border-b border-zinc-200 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="px-6 pb-7 pt-5">
            {/* Mobile Navigation */}
            <nav className="border-t border-zinc-100">
              {navLinks.map((item, index) => {
                const isActive = isActiveLink(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between border-b border-zinc-100 py-3.5 no-underline ${
                      isActive
                        ? "text-[#C8102E]"
                        : "text-zinc-700"
                    }`}
                  >
                    <span
                      className={`text-[11px] ${
                        isActive
                          ? "font-semibold"
                          : "font-medium"
                      }`}
                    >
                      <span className="mr-3 text-[8px] tracking-[0.1em] text-zinc-300">
                        0{index + 1}
                      </span>

                      {item.label}
                    </span>

                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isActive
                          ? "text-[#C8102E]"
                          : "text-zinc-300 group-hover:translate-x-1 group-hover:text-[#C8102E]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Account */}
            <div className="mt-5">
              {loading ? (
                <div className="h-11 w-full animate-pulse rounded-md bg-zinc-100" />
              ) : user ? (
                <div className="flex items-center justify-between border border-zinc-200 bg-[#faf9f7] p-2">
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-w-0 items-center gap-3 no-underline"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8102E]/5 text-[15px] text-[#C8102E] ${greatVibes.className}`}
                    >
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-semibold text-zinc-800">
                        {user.name}
                      </p>

                      <p className="mt-0.5 truncate text-[8px] text-zinc-400">
                        View profile
                      </p>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-white hover:text-[#C8102E]"
                    title="Logout"
                  >
                    <LogOut
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-10 flex-1 items-center justify-center border border-zinc-200 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-700 no-underline transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex h-10 flex-1 items-center justify-center bg-[#C8102E] text-[9px] font-semibold uppercase tracking-[0.12em] text-white no-underline transition-colors hover:bg-[#a80d26]"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Footer Detail */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C8102E]" />

              <p className="text-[7px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Plan · Connect · Celebrate
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


