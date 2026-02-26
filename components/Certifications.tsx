"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Excel: Advanced Excel Formulas & Functions",
    issuer: "Maven Analytics / Udemy",
    color: "#8B5CF6",
    category: "Microsoft Excel",
    link: "https://drive.google.com/file/d/1mJviq1VhjhE-nl6uUhivDy-z0qUm1uQt/view?usp=drive_link",
  },
  {
    name: "Accenture Data Analytics & Visualization Simulation",
    issuer: "Accenture / Forage",
    color: "#8B5CF6",
    category: "Data Analytics",
    link: "https://drive.google.com/file/d/1hV1l-H-OspRoqHh6VUHXv_z_TnsAzauP/view?usp=sharing",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    color: "#2DD4BF",
    category: "SQL",
    link: "https://drive.google.com/file/d/1WIyYcY3uH74ork08hamCzaSFRgVEZyUw/view?usp=sharing",
  },
  {
    name: "SQL (Intermediate)",
    issuer: "HackerRank",
    color: "#2DD4BF",
    category: "SQL",
    link: "https://drive.google.com/file/d/10pO7KpwAEj6hW5uqleimqIG1M_fEN8B3/view?usp=sharing",
  },
  {
    name: "SQL (Advanced) – Gold Badge",
    issuer: "HackerRank",
    color: "#F59E0B",
    category: "SQL",
    link: "https://drive.google.com/file/d/1ng8cbyCMLYp-QnncEaketpJlTIq-YHIO/view?usp=sharing",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM / IBM SkillsBuild",
    color: "#60A5FA",
    category: "AI/ML",
    link: "https://drive.google.com/file/d/1fQPj_rwqwrke6JJrF5qXJhvAgjiTlETp/view?usp=sharing",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.1}>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.01 }}
                className="card-glass rounded-xl p-5 flex items-start gap-4 group h-full cursor-pointer"
                >
                <div
                  className="p-2.5 rounded-lg shrink-0 mt-0.5"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  <Award size={18} style={{ color: cert.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className="font-mono text-xs mb-1 block"
                    style={{ color: cert.color }}
                  >
                    {cert.category}
                  </span>
                  <h3
                    className="font-body text-sm font-semibold leading-snug mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </h3>
                  <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                    {cert.issuer}
                  </p>
                </div>

                <ExternalLink
                  size={14}
                  className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cert.color }}
                />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
