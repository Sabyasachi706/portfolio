"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold" style={{ color: "var(--text-primary)" }}>
              Sabyasachi Satapathy
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              Aspiring Data Analyst · NIT Durgapur
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:9sss3110@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="p-2.5 rounded-lg transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="divider my-6" />

        <p
          className="text-center font-mono text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          © 2026 Sabyasachi Satapathy | Built with Next.js & Passion for Data
        </p>
      </div>
    </footer>
  );
}
