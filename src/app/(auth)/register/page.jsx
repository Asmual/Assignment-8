"use client";

import Link from "next/link";
import { useState } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      toast.success("Registration successful! Please login.");
    } catch {
      toast.error("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    toast.success("Google login coming soon!");
  };

  return (
    <div className="min-h-screen bg-[#080818] flex items-center justify-center px-4 py-12">
      <Toaster position="top-center" />

      <div className="w-full max-w-md bg-[#0f0f28] border border-white/8 rounded-2xl px-8 py-10">
        <div className="flex justify-center mb-8">
          <span className="text-white font-extrabold text-3xl">
            Sun<span className="text-[#ff4d6d]">Cart</span>
          </span>
        </div>

        <h1 className="text-white text-2xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-white/40 text-sm text-center mb-8">
          Join SunCart and shop the summer
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg" />
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-[#ff4d6d]"
            />
          </div>

          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg" />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-[#ff4d6d]"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Create a Password"
              className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-[#ff4d6d]"
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg" />
            <input
              type={showRepeatPass ? "text" : "password"}
              name="repeatPassword"
              required
              value={form.repeatPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 outline-none focus:border-[#ff4d6d]"
            />

            <button
              type="button"
              onClick={() => setShowRepeatPass(!showRepeatPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
            >
              {showRepeatPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff4d6d] hover:bg-[#ff2952] text-white font-bold py-3 rounded-xl transition-all"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-white/25 text-xs">or continue with</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <button
          onClick={handleGoogle}
          className="w-full border border-white/10 rounded-xl py-3 text-white/70 hover:bg-white/5"
        >
          Continue with Google
        </button>

        <p className="text-center text-white/35 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-[#ff4d6d]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
