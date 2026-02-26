"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Goignis Circle",
    role: "Market Research Intern",
    period: "Jan 2026 – Present",
    type: "Current",
    color: "#2DD4BF",
    highlights: [
      "Conducting market analysis and competitive intelligence research",
      "Generating data-driven insights for business strategy",
    ],
  },
  {
    company: "Edulyt India",
    role: "Data Analyst",
    period: "July 2025 – Aug 2025",
    type: "Internship",
    color: "#60A5FA",
    highlights: [
      "Analyzed educational data to derive actionable learning insights",
      "Created dashboards and reports using Excel and Power BI",
    ],
  },
  {
    company: "Edunet Foundation",
    role: "AI & ML Intern",
    period: "2025",
    type: "Internship",
    color: "#A78BFA",
    highlights: [
      "Built regression model for employee compensation prediction",
      "Achieved 85.73% model accuracy using Gradient Boosting",
      "Engineered 13 features from raw HR dataset",
    ],
  },
  // {
  //   company: "Prodigy InfoTech",
  //   role: "Software Development Intern",
  //   period: "2024",
  //   type: "Internship",
  //   color: "#FB923C",
  //   highlights: [
  //     "Developed C++ and .NET based software systems",
  //     "Built a contact management system with full CRUD operations",
  //     "Implemented backtracking algorithm for Sudoku solver",
  //   ],
  // },
  {
    company: "MNTC – NIT Durgapur",
    role: "Video & Production Head | Graphic Designer | Video Editor",
    period: "2022 – 2024",
    type: "Leadership",
    color: "#34D399",
    highlights: [
      "Led video production for institute technical fest",
      "Designed promotional materials and managed visual branding",
      "Coordinated multi-team production workflows",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Career</p>
          <h2 className="section-heading">Experience</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="relative pl-12">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company + exp.role} delay={i * 0.1}>
              <div className="relative mb-8">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="absolute -left-12 top-3 w-4 h-4 rounded-full border-2"
                  style={{
                    borderColor: exp.color,
                    background: exp.type === "Current" ? exp.color : "var(--bg)",
                    boxShadow: exp.type === "Current" ? `0 0 12px ${exp.color}80` : "none",
                  }}
                />

                <motion.div
                  whileHover={{ x: 4 }}
                  className="card-glass rounded-xl p-6"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3
                        className="font-display text-lg font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="font-body text-sm font-medium"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1 font-mono text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span style={{ color: exp.color }} className="mt-0.5">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
