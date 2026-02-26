"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, TrendingUp, Database, Brain } from "lucide-react";
import { useEffect } from "react";


const stats = [
  { value: "85.73%", label: "ML Accuracy", icon: Brain },
  { value: "SQL", label: "Gold Badge", icon: Database },
  { value: "3+", label: "Internships", icon: TrendingUp },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
  stiffness: 120,
  damping: 25,
});

const smoothY = useSpring(mouseY, {
  stiffness: 120,
  damping: 25,
});

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <motion.div
  style={{
    x: smoothX,
    y: smoothY,
    translateX: "-50%",
    translateY: "-50%",
    background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)"
  }}
  className="fixed top-0 left-0 w-[500px] h-[500px] opacity-30 pointer-events-none z-10"
/>
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#60A5FA" }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="section-label">Available for opportunities</span>
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent)" }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            I Turn Data Into{" "}
            <span className="gradient-text">Business Decisions.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-mono text-sm md:text-base mb-6 tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            Data Analyst · SQL Advanced · 85.73% ML Model Accuracy · Business Insights Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Final year M.Sc. student at{" "}
            <strong style={{ color: "var(--text-primary)" }}>NIT Durgapur</strong> passionate about
            transforming raw datasets into actionable strategies using{" "}
            <strong style={{ color: "var(--accent)" }}>Python, SQL, Excel, Power BI</strong>, and
            Machine Learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="card-glass rounded-xl px-5 py-3 flex items-center gap-3"
              >
                <stat.icon size={18} style={{ color: "var(--accent)" }} />
                <div>
                  <div
                    className="font-display text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
