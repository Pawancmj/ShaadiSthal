
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";

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

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

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
  }, [pathname]);

  const handleLogout = async () => {
    try {
      const res = await logoutUser();

      if (res.success) {
        localStorage.removeItem("user");
        setUser(null);

        router.push("/");
        router.refresh();
      } else {
        console.error("Logout failed:", res.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-[100] flex h-[54px] items-center border-b border-zinc-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1160px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="no-underline">
          <span
            className="text-[1.15rem] font-bold text-[#C8102E]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            ShaadiSthal
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap text-[0.78rem] no-underline transition-colors ${
                  isActive
                    ? "border-b-2 border-[#C8102E] pb-[2px] font-semibold text-[#C8102E]"
                    : "font-medium text-zinc-600 hover:text-[#C8102E]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-3">
          {loading ? (
            <div className="h-7 w-24 animate-pulse rounded-md bg-zinc-100" />
          ) : user ? (
            <>
              {/* User */}
              <Link
                href="/profile"
                className="flex items-center gap-2 no-underline"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8102E]/10 text-[#C8102E]">
                  {user.name.split(" ").map(n => n[0])}
                </div>

                <span className="max-w-[120px] truncate text-[0.78rem] font-semibold text-zinc-700">
                  {user.name}
                </span>
              
              </Link>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                title="Logout"
                className="flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-[#C8102E]"
              >
                <LogOut size={16} strokeWidth={2} />
              </button>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Link
                href="/signin"
                className="text-[0.78rem] font-medium text-zinc-600 no-underline transition-colors hover:text-[#C8102E]"
              >
                Sign In
              </Link>

              {/* Sign Up */}
              <Link href="/signup" className="no-underline">
                <button
                  type="button"
                  className="cursor-pointer rounded-md border-0 bg-[#C8102E] px-4 py-1.5 text-[0.78rem] font-semibold text-white transition-colors hover:bg-[#a80d26]"
                >
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}


