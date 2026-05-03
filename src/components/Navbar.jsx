/* eslint-disable react-hooks/static-components */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

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
      } else {
        setUser(null);
      }
    };
    getSession();
  }, [pathname]);

  const handleLogout = async () => {
    await authClient.signOut();
    setUser(null);
    toast.success("Logout successful!");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: user ? "/my-profile" : "/login", label: "My Profile" },
  ];

  const ProfileAvatar = ({ size = "w-10 h-10", textSize = "text-lg" }) => (
    <div className={`${size} rounded-full border-2 border-pink-500 overflow-hidden shrink-0 cursor-pointer hover:scale-105 transition-all`}>
      {user?.image ? (
        <img
          src={user.image}
          alt={user.name || "User"}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full bg-pink-500/20 flex items-center justify-center">
          <span className={`${textSize} text-pink-500 font-bold`}>
            {user?.name?.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <nav className="w-full bg-[#0b0b30] border-b border-white/5 sticky top-0 z-50">
      <Toaster position="top-center" />
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
              className={`text-sm font-semibold transition-colors ${pathname === link.href ? "text-pink-500" : "text-white/60 hover:text-white"
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
                <ProfileAvatar />
              </Link>
              <div className="w-px h-5 bg-white/10" />
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-[#ff4d6d]/10 border border-[#ff4d6d]/30 text-pink-500 hover:bg-[#ff4d6d]/20 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white hover:border-pink-500 hover:text-pink-500 transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-[#ff4d6d] to-[#ff2952] text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d0d35] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold transition-colors ${pathname === link.href ? "text-pink-500" : "text-white/60"
                }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-white/10">
            {user ? (
              <div className="flex items-center gap-3">
                <ProfileAvatar size="w-9 h-9" textSize="text-sm" />
                <span className="text-white text-sm font-medium flex-1">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-pink-500 text-sm font-medium border border-pink-500/30 py-1 px-3 rounded-md hover:bg-pink-500/10 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium bg-linear-to-r from-[#ff4d6d] to-[#ff2952] text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;