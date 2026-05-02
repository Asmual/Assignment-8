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
      <div className="min-h-screen flex items-center justify-center bg-[#0f0a1e]">
        <p className="text-pink-500 text-lg font-semibold animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  const user = session?.user;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0f0a1e" }}>
      <div
        className="w-full max-w-md rounded-2xl p-8"
        style={{ background: "#1a1035", border: "1px solid #2e1f5e" }}
      >

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My <span style={{ color: "#ec4899" }}>Profile</span>
        </h2>

        {/* Profile Image / Avatar Section */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg overflow-hidden"
            style={{
              background: "#0f0a1e",
              border: "3px solid #ec4899",
              color: "#ec4899"
            }}
          >
            {user?.image ? (
              <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              user?.name?.charAt(0).toUpperCase()
            )}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{user?.name}</h3>
          <p className="text-sm" style={{ color: "#a78bfa" }}>{user?.email}</p>
        </div>

        {/* Info Container */}
        <div
          className="rounded-xl mb-8 overflow-hidden"
          style={{ background: "#0f0a1e", border: "1px solid #2e1f5e" }}
        >
          <div className="px-5 py-4 flex justify-between border-b border-[#2e1f5e]">
            <span style={{ color: "#a78bfa" }} className="text-sm font-medium">Full Name</span>
            <span className="text-white text-sm font-semibold">{user?.name}</span>
          </div>
          <div className="px-5 py-4 flex justify-between">
            <span style={{ color: "#a78bfa" }} className="text-sm font-medium">Email</span>
            <span className="text-white text-sm font-semibold">{user?.email}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => router.push("/update-profile")}
          className="w-full text-white font-bold py-3 rounded-xl transition duration-300 hover:opacity-90 shadow-lg"
          style={{
            background: "#ec4899",
            boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.3)"
          }}
        >
          Update Information
        </button>

        <button
          onClick={() => router.push("/")}
          className="w-full mt-4 font-bold py-3 rounded-xl transition duration-200 hover:bg-white/5"
          style={{
            background: "transparent",
            border: "1px solid #2e1f5e",
            color: "#a78bfa"
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}