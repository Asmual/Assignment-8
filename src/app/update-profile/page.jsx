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
      <div className="min-h-screen flex items-center justify-center bg-[#0f0a1e]">
        <p className="text-pink-600 text-xl font-semibold animate-pulse">Loading Profile...</p>
      </div>
    );
  }


  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#0f0a1e" }}>
      <div className="w-full max-w-md rounded-2xl p-8" style={{ background: "#1a1035", border: "1px solid #2e1f5e" }}>

        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Update <span style={{ color: "#ec4899" }}>Information</span>
        </h2>

        {/* Name Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2" style={{ color: "#a78bfa" }}>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-pink-500"
            style={{ background: "#0f0a1e", border: "1px solid #2e1f5e" }}
          />
        </div>

        {/* Photo URL Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2" style={{ color: "#a78bfa" }}>
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none focus:ring-2 focus:ring-pink-500"
            style={{ background: "#0f0a1e", border: "1px solid #2e1f5e" }}
          />
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="w-full text-white font-bold py-3 rounded-xl transition duration-200 hover:opacity-90 mb-3 disabled:bg-gray-600"
          style={{ background: "#ec4899" }}
        >
          {loading ? "Updating..." : "Update Information"}
        </button>

        <button
          onClick={() => router.push("/my-profile")}
          className="w-full font-bold py-3 rounded-xl transition duration-200 hover:opacity-80"
          style={{ background: "transparent", border: "1px solid #2e1f5e", color: "#a78bfa" }}
        >
          ← Back to Profile
        </button>
      </div>
    </div>
  );
}