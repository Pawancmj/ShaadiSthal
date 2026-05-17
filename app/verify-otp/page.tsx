"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Loader2, RefreshCw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../components/Footer";

function OTPContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!email) {
      router.push("/signup");
    }
  }, [email, router]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const res = await fetch(`${apiUrl}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Email verified successfully! Redirecting to login...");
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-[#C8102E]" />
            </div>
            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Verify Email
            </motion.h1>
            <p className="text-gray-500 text-sm">
              We've sent a 6-digit code to <br />
              <span className="font-bold text-gray-700">{email}</span>
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-3 rounded-xl bg-green-50 border border-green-100 text-green-600 text-sm font-medium"
              >
                {success}
              </motion.div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                maxLength={6}
                required
                placeholder="000000"
                className="w-full text-center text-3xl tracking-[1em] font-bold py-4 bg-gray-50/50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E] transition-all text-gray-700 placeholder:text-gray-300"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading || success !== ""}
              className="w-full py-4 bg-gradient-to-r from-[#C8102E] to-[#E91E8C] text-white rounded-2xl font-bold text-lg shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Verify Account <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-gray-500 hover:text-[#C8102E] transition-colors">
              <RefreshCw className="w-4 h-4" /> Resend Code
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#fafafa]"><Loader2 className="w-10 h-10 animate-spin text-[#C8102E]" /></div>}>
      <OTPContent />
    </Suspense>
    <Footer />
    </>
  );
}
