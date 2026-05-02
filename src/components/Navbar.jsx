/* eslint-disable react-hooks/static-components */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const session = await authClient.getSession();
      if (session?.data?.user) {
        setUser(session.data.user);
      }
    };
    getSession();
  }, [pathname]);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    router.push("/");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: user ? "/my-profile" : "/login", label: "My Profile" },
  ];

  const ProfileAvatar = ({ size = "w-10 h-10", textSize = "text-lg" }) => (
    <div className={`${size} rounded-full border-2 border-pink-500 overflow-hidden cursor-pointer hover:scale-105 transition-all flex items-center justify-center bg-pink-500/20`}>
      {user?.image ? (
        <img
          src={user.image}
          alt={user.name || "User"}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
      ) : null}
      <span className={`${textSize} text-pink-500 font-bold`}>
        {user?.name?.charAt(0).toUpperCase()}
      </span>
    </div>
  );

  return (
    <nav className="w-full bg-[#0b0b30] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-extrabold text-xl text-white tracking-tight">
            Sun<span className="text-pink-500">Cart</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${pathname === link.href ? "text-pink-500" : "text-white/60 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link href="/my-profile">
                <ProfileAvatar />
              </Link>
              <div className="w-px h-5 bg-white/10" />
              <button onClick={handleLogout} className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 text-pink-500 hover:bg-[#ff4d6d]/20 transition-all">
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white hover:border-pink-500 hover:text-pink-500 transition-all">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-[#ff4d6d] to-[#ff2952] text-white">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d35] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`text-sm font-semibold ${pathname === link.href ? "text-pink-500" : "text-white/60"}`}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <ProfileAvatar size="w-9 h-9" textSize="text-sm" />
              <button onClick={handleLogout} className="text-pink-500 text-sm font-medium">Logout</button>
            </div>
          ) : (
            <Link href="/login" className="text-white text-sm font-medium">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;