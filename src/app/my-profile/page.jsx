/* eslint-disable @next/next/no-img-element */
"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await authClient.getSession();
      if (!data) {
        router.push("/login");
      } else {
        setSession(data);
      }
      setLoading(false);
    };
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080818]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#ff2d6b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/50">Loading Profile...</p>
        </div>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#080818] flex items-center justify-center px-4 py-4">

      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2  rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#0B0B30] border border-white/10 rounded-2xl p-8 relative">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-5">
          My <span className="text-[#ff2d6b]">Profile</span>
        </h2>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-[#ff2d6b] shadow-[0_0_20px_rgba(255,45,107,0.3)]">
            {user?.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-[#ff2d6b]/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-[#ff2d6b]">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <h3 className="mt-3 text-xl font-bold text-white">{user?.name}</h3>
        </div>

        {/* Info Box */}
        <div className="bg-white/3 border border-white/10 rounded-xl overflow-hidden mb-6">
          <div className="px-5 py-3 flex justify-between items-center border-b border-white/10">
            <span className="text-white/40 text-sm font-medium">Full Name</span>
            <span className="text-white text-sm font-semibold">{user?.name}</span>
          </div>
          <div className="px-5 py-3 flex justify-between items-center">
            <span className="text-white/40 text-sm font-medium">Email</span>
            <span className="text-white text-sm font-semibold">{user?.email}</span>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={() => router.push("/update-profile")}
          className="w-full bg-[#ff2d6b] text-white font-bold py-3 rounded-xl hover:bg-[#e0255e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,45,107,0.4)] hover:-translate-y-0.5 mb-3"
        >
          Update Information
        </button>

        <button
          onClick={() => router.push("/")}
          className="w-full border border-white/10 text-white/60 font-bold py-3 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300"
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}