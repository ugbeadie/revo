"use client";

import Image from "next/image";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#060018] font-[var(--font-plus-jakarta)]">
      {/* LEFT LIGHT BEAM */}
      <div
        className="pointer-events-none absolute left-[-220px] top-[-120px] h-[720px] w-[520px]
        bg-gradient-to-br from-[#e6e3ff]/40 via-[#8a7bff]/25 to-transparent
        blur-[90px] rotate-12"
      />

      {/* bottom glow */}
      <div
        className="pointer-events-none absolute bottom-[-220px] left-1/2 -translate-x-1/2 h-[300px] w-[900px]
        bg-[#6b5cff]/25 blur-[140px]"
      />

      {/* NAV */}
      <div className="relative z-10 px-6 pt-6">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="text-white font-semibold tracking-wide">LOGO</div>

            <nav className="hidden md:flex items-center gap-8 text-[13px] text-white/90">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </nav>

            <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-[13px] text-white backdrop-blur hover:bg-white/15 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24">
        {/* pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white/80 backdrop-blur">
          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-white">
            V2.0 Release
          </span>
          <span>Integration with ChatGPT</span>
          <span className="ml-1 text-white/60">→</span>
        </div>

        {/* title */}
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-[78px] font-semibold leading-[1.05] tracking-tight">
          <span className="text-white">Revolutionize Your</span>
          <br />
          <span className="text-[#cfc9ff]">Content Creation</span>{" "}
          <span className="text-white">Process</span>
        </h1>

        {/* dashboard image */}
        <div className="relative mt-16 w-full max-w-6xl">
          <div
            className="
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-white/[0.02]
              backdrop-blur
              shadow-[0_40px_120px_rgba(120,90,255,0.25)]
            "
          >
            <Image
              src="/hero.png"
              alt="Dashboard preview"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
