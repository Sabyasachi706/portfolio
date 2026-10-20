"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : ""
      }`}
      style={
        scrolled
          ? {
              background: "color-mix(in srgb, var(--bg) 85%, transparent)",
              borderColor: "var(--border)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          >
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            SS
          </span>
          <span
            className="font-display text-lg font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Sabyasachi
          </span>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{
              background: "var(--glow)",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
            }}
          >
            Data Analyst
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium transition-all duration-200 hover:opacity-100 relative group"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="btn-primary text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{ color: "var(--text-primary)" }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
