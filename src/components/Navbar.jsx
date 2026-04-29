"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  
  const user = null;

  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#0b0b30] border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">


        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-extrabold text-xl text-white tracking-tight">
            Sun<span className="text-pink-500">Cart</span>
          </span>
        </Link>


        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${pathname === "/"
              ? "text-pink-500"
                : "text-white/60 hover:text-white"
              }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`text-sm font-semibold transition-colors ${pathname === "/products"
              ? "text-pink-500"
                : "text-white/60 hover:text-white"
              }`}
          >
            Products
          </Link>

      
          {user && (
            <Link
              href="/my-profile"
              className={`text-sm font-medium transition-colors ${pathname === "/my-profile"
                ? "text-pink-500"
                  : "text-white/60 hover:text-white"
                }`}
            >
              My Profile
            </Link>
          )}
        </div>


        <div className="flex items-center gap-3">
          {user ? (

            <>
              <div className="w-9 h-9 rounded-full border-2 border-pink-500 overflow-hidden cursor-pointer">
                {user.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-[#ff4d6d] to-[#ff8c42] flex items-center justify-center text-white font-semibold text-sm">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

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

      </div>
    </nav>
  );
};

export default Navbar;