"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#060018] font-[var(--font-plus-jakarta)]">
      {/* LEFT LIGHT BEAM */}
      <div
        className="pointer-events-none absolute left-[-220px] top-[-120px] h-[720px] w-[520px]
        bg-gradient-to-br from-[#e6e3ff]/40 via-[#8a7bff]/25 to-transparent
        blur-[90px] rotate-12"
      />

      {/* RIGHT LIGHT BEAM */}
      <div
        className="pointer-events-none absolute right-[-180px] top-[-80px] h-[600px] w-[440px]
        bg-gradient-to-bl from-[#c4b5ff]/30 via-[#7c6bff]/20 to-transparent
        blur-[100px] -rotate-12"
      />

      {/* bottom glow */}
      <div
        className="pointer-events-none absolute bottom-[-220px] left-1/2 -translate-x-1/2 h-[300px] w-[900px]
        bg-[#6b5cff]/25 blur-[140px]"
      />

      {/* NAV */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-6 pt-6"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
          <div className="flex items-center justify-between px-8 py-3">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="inline-block mr-2 -mt-1"
            />
            <nav className="hidden md:flex items-center gap-10 text-[13px] text-white/70">
              {["About", "Features", "Pricing", "Blog", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="transition-all hover:text-white"
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl cursor-pointer border border-white/15 bg-white/[0.05] px-5 py-2 text-[13px] text-white/90 backdrop-blur-sm transition hover:bg-white/[0.08]"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-0">
        {/* pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-white">
            V2.0 Release
          </span>
          <span>Integration with ChatGPT</span>
          <motion.span
            whileHover={{ x: 4 }}
            className="ml-1 text-white/60 cursor-pointer"
          >
            →
          </motion.span>
        </motion.div>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-5xl text-5xl md:text-7xl lg:text-[78px] font-semibold leading-[1.05] tracking-tight mb-14"
        >
          <span className="text-white">Revolutionize Your</span>
          <br />
          <span className="inline-flex items-center gap-4 flex-wrap justify-center">
            <span className="text-[#cfc9ff]">Content Creation</span>
            <span className="text-white">Process</span>
          </span>
        </motion.h1>

        {/* dashboard image with floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* LEFT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: "easeOut" }}
            className="absolute -left-44 top-1/2 -translate-y-1/2 z-20 w-[200px] rounded-2xl border border-white/[0.15] bg-white/[0.04] backdrop-blur-md shadow-[0_8px_40px_rgba(100,80,255,0.25)] overflow-hidden"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <Image
              src="/left.png"
              alt="Left panel"
              width={200}
              height={260}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* RIGHT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: "easeOut" }}
            className="absolute -right-44 top-1/2 -translate-y-1/2 z-20 w-[200px] rounded-2xl border border-white/[0.15] bg-white/[0.04] backdrop-blur-md shadow-[0_8px_40px_rgba(100,80,255,0.25)] overflow-hidden"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <Image
              src="/right.png"
              alt="Right panel"
              width={200}
              height={260}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* MAIN DASHBOARD IMAGE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.02] backdrop-blur shadow-[0_40px_120px_rgba(120,90,255,0.25),0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Image
              src="/hero.png"
              alt="Dashboard preview"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
