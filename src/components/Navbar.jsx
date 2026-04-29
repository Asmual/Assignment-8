"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const user = null;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: user ? "/my-profile" : "/login", label: "My Profile" },
  ];

  return (
    <nav className="w-full bg-[#0b0b30] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-extrabold text-xl text-white tracking-tight">
            Sun<span className="text-pink-500">Cart</span>
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${pathname === link.href
                  ? "text-pink-500"
                  : "text-white/60 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>


        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link href="/my-profile">
                <div className="w-10 h-10 rounded-full border-2 border-pink-500 overflow-hidden cursor-pointer hover:scale-105 transition-all">
                  <Image
                    src={user.image || "/images/my-profile.PNG"}
                    alt={user.name || "Profile"}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="w-px h-5 bg-white/10" />
              <button className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 text-pink-500 hover:bg-[#ff4d6d]/20 transition-all">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white hover:border-pink-500 hover:text-pink-500 transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-[#ff4d6d] to-[#ff2952] text-white shadow-[0_4px_14px_rgba(255,77,109,0.35)] hover:shadow-[0_6px_18px_rgba(255,77,109,0.5)]"
              >
                Register
              </Link>
            </>
          )}
        </div>


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-all"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-[#0d0d35] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold transition-colors ${pathname === link.href
                  ? "text-pink-500"
                  : "text-white/60 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border-2 border-pink-500 overflow-hidden">
                    <Image
                      src={user.image || "/images/my-profile.PNG"}
                      alt={user.name || "Profile"}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-white text-sm font-medium">{user.name}</span>
                </div>
                <button className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 text-pink-500 hover:bg-[#ff4d6d]/20 transition-all text-left">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white text-center hover:border-pink-500 hover:text-pink-500 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-[#ff4d6d] to-[#ff2952] text-white text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;