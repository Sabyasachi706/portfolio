"use client";

import { ScrollReveal } from "./ScrollReveal";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "National Institute of Technology Durgapur",
    degree: "M.Sc. Chemistry",
    period: "2021 – 2026",
    type: "Pre-Final Year",
    highlight: true,
    detail: "Pursuing integrated M.Sc. at one of India's premier technical institutions (NIT)",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    degree: "Senior Secondary – Science (PCMB)",
    period: "2019 – 2021",
    type: "Class XII",
    highlight: false,
    detail: "Physics, Chemistry, Mathematics & Biology",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    degree: "Secondary Education",
    period: "2014 – 2019",
    type: "Class X",
    highlight: false,
    detail: "Foundation in Science and Mathematics",
  },
];

export function Education() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Background</p>
          <h2 className="section-heading">Education</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="relative pl-12">
          {/* Timeline line */}
          <div className="timeline-line" />

          {education.map((edu, i) => (
            <ScrollReveal key={edu.institution + edu.degree} delay={i * 0.15}>
              <div className="relative mb-10">
                {/* Dot */}
                <div
                  className="absolute -left-12 top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: "var(--accent)",
                    background: edu.highlight ? "var(--accent)" : "var(--bg)",
                  }}
                >
                  {edu.highlight && (
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--bg)" }} />
                  )}
                </div>

                <div
                  className={`card-glass rounded-xl p-6 ${edu.highlight ? "animate-glow-pulse" : ""}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <span
                        className="font-mono text-xs tracking-wider uppercase mb-1 block"
                        style={{ color: "var(--accent)" }}
                      >
                        {edu.type}
                      </span>
                      <h3
                        className="font-display text-xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {edu.institution}
                      </h3>
                    </div>
                    <div
                      className="flex items-center gap-1 font-mono text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>

                  <p
                    className="font-body text-base font-medium mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {edu.degree}
                  </p>
                  <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
