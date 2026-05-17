"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const res = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (res.ok) {
          router.push(`/verify-otp?email=${encodeURIComponent(formData.email)}`);
        } else {
          setError(data.message || "Registration failed.");
        }
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        setError("Server returned an invalid response. Please check backend logs.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fafafa]">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C8102E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4A017]/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-6 z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-[#C8102E] to-[#E91E8C] bg-clip-text text-transparent mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Join Us
            </motion.h1>
            <p className="text-gray-500 font-medium">Create your ShaadiSthal account</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  style={{ paddingLeft: "3rem" }}
                  className="w-full pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-gray-700 placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  style={{ paddingLeft: "3rem" }}
                  className="w-full pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-gray-700 placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  style={{ paddingLeft: "3rem" }}
                  className="w-full pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-gray-700 placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  style={{ paddingLeft: "3rem" }}
                  className="w-full pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-gray-700 placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#C8102E] to-[#E91E8C] text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link 
                href="/signin" 
                className="font-bold text-[#C8102E] hover:text-[#E91E8C] transition-colors"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
}
