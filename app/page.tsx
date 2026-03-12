"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#060018] font-[var(--font-plus-jakarta)]">
      {/* LEFT LIGHT BEAM */}
      <div className="pointer-events-none absolute left-[-30px] top-[-20px] z-0 h-[900px] w-[420px] -rotate-[32deg] mix-blend-screen opacity-85">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c6bff]/20 to-transparent blur-[100px]" />
        <div className="absolute inset-0 left-[35%] w-[160px] h-full bg-gradient-to-b from-[#c4b5ff]/35 via-[#8a7bff]/20 to-transparent blur-[55px]" />
        <div className="absolute inset-0 left-[44%] w-[90px] h-[55%] bg-gradient-to-b from-white/65 via-white/25 to-transparent blur-[22px]" />
      </div>

      {/* RIGHT LIGHT BEAM */}
      <div className="pointer-events-none absolute right-[-100px] top-[-150px] z-0 h-[900px] w-[250px] -rotate-[30deg] mix-blend-screen opacity-80">
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#7c6bff]/15 to-transparent blur-[90px]" />
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[80px] h-full bg-gradient-to-b from-transparent via-[#c4b5ff]/30 to-transparent blur-[40px]" />
        <div className="absolute inset-0 top-[15%] left-1/2 -translate-x-1/2 w-[18px] h-[50%] bg-gradient-to-b from-transparent via-white/75 to-transparent blur-[10px]" />
      </div>

      {/* BACKGROUND CENTER GLOW */}
      <div
        className="pointer-events-none absolute bottom-[10%] left-1/2 -translate-x-1/2 h-[400px] w-[1000px]
        bg-[#6b5cff]/20 blur-[160px]"
      />

      {/* NAV */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-6 pt-6"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
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
              className="rounded-xl cursor-pointer border border-white/20 bg-white/[0.08] px-5 py-2 text-[13px] text-white/90 backdrop-blur-sm transition hover:bg-white/[0.12] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40 pb-20">
        {/* pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/80 backdrop-blur-sm hover:bg-white/[0.06] transition-colors cursor-pointer"
        >
          <span className="rounded-full border border-white/15 bg-[#6b5cff]/20 px-2.5 py-0.5 text-[#e0d9ff] font-medium tracking-wide">
            V2.0 Release
          </span>
          <span className="text-white/70">ChatGPT Integration</span>
          <motion.span whileHover={{ x: 4 }} className="ml-0.5 text-white/50">
            →
          </motion.span>
        </motion.div>

        {/* title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-5xl text-5xl md:text-7xl lg:text-[78px] font-semibold leading-[1.05] tracking-tight mb-16 drop-shadow-lg"
        >
          <span className="text-white">Revolutionize Your</span>
          <br />
          <span className="inline-flex items-center gap-4 flex-wrap justify-center mt-2">
            {/* Added gradient text here */}
            <span className="bg-gradient-to-r from-[#d9d1ff] via-[#9d8bf0] to-[#bcaeff] bg-clip-text text-transparent">
              Content Creation
            </span>
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
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 0.85, duration: 0.6, ease: "easeOut" },
              x: { delay: 0.85, duration: 0.6, ease: "easeOut" },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
            className="absolute -left-32 md:-left-44 top-1/2 -translate-y-1/2 z-20 w-[160px] md:w-[200px] rounded-xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(120,90,255,0.4) 0%, rgba(80,60,180,0.15) 100%)",
              boxShadow:
                "0 0 24px 4px rgba(100,80,255,0.3), 0 8px 40px rgba(100,80,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              padding: "1px",
            }}
          >
            <div className="rounded-[11px] bg-[#0a0720] overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <Image
                src="/left.png"
                alt="Left panel"
                width={200}
                height={260}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          </motion.div>

          {/* RIGHT FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 0.85, duration: 0.6, ease: "easeOut" },
              x: { delay: 0.85, duration: 0.6, ease: "easeOut" },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              },
            }}
            className="absolute -right-32 md:-right-44 top-1/2 -translate-y-1/2 z-20 w-[160px] md:w-[200px] rounded-xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(120,90,255,0.4) 0%, rgba(80,60,180,0.15) 100%)",
              boxShadow:
                "0 0 24px 4px rgba(100,80,255,0.3), 0 8px 40px rgba(100,80,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              padding: "1px",
            }}
          >
            <div className="rounded-[11px] bg-[#0a0720] overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <Image
                src="/right.png"
                alt="Right panel"
                width={200}
                height={260}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          </motion.div>

          {/* MAIN DASHBOARD IMAGE */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-xl overflow-hidden relative z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(140,110,255,0.5) 0%, rgba(90,65,200,0.2) 40%, rgba(140,110,255,0.45) 100%)",
              boxShadow:
                "0 0 50px 10px rgba(110,80,255,0.25), 0 0 80px 20px rgba(100,70,255,0.15), 0 40px 120px rgba(120,90,255,0.2)",
              padding: "1px",
            }}
          >
            <div className="rounded-[11px] bg-[#080620] overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <Image
                src="/hero.png"
                alt="Dashboard preview"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover opacity-95"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM FADE OUT GRADIENT */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#060018] via-[#060018]/80 to-transparent z-30" />
    </section>
  );
}
