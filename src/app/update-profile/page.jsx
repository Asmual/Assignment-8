"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await authClient.getSession();
      if (!data) {
        router.push("/login");
      } else {
        setUser(data.user);
        setName(data.user.name || "");
        setPhotoURL(data.user.image || "");
      }
      setPageLoading(false);
    };
    fetchUser();
  }, [router]);

  const handleUpdate = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await fetch("/api/update-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          name,
          image: photoURL
        }),
      });

      if (res.ok) {
        alert("Profile updated successfully!");
        router.push("/my-profile");
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error("Update Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#080818]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#ff2d6b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/50">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#080818] flex items-center justify-center px-4 py-12">

      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2  rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#0B0B30] border border-white/10 rounded-2xl p-8 relative">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Update <span className="text-[#ff2d6b]">Information</span>
        </h2>

        {/* Name Input */}
        <div className="mb-5">
          <label className="block text-white/40 text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/20 outline-none focus:border-[#ff2d6b] focus:bg-[#ff2d6b]/5 transition-all"
          />
        </div>

        {/* Photo URL Input */}
        <div className="mb-8">
          <label className="block text-white/40 text-sm font-medium mb-2">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/20 outline-none focus:border-[#ff2d6b] focus:bg-[#ff2d6b]/5 transition-all"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full bg-[#ff2d6b] text-white font-bold py-3 rounded-xl hover:bg-[#e0255e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,45,107,0.4)] hover:-translate-y-0.5 mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>

        <button
          onClick={() => router.push("/my-profile")}
          className="w-full border border-white/10 text-white/60 font-bold py-3 rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300"
        >
          ← Back to Profile
        </button>

      </div>
    </div>
  );
}