"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Programming",
    icon: "⌨️",
    skills: ["Python (Matplotlib, Pandas, Seaborn, Numpy, Sci-kit learn)", "SQL (Advanced)", "C++"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: [
      "Exploratory Data Analysis (EDA)",
      "Regression Modeling",
      "Gradient Boosting",
      "Feature Engineering",
      "Performance Evaluation",
      "Customer Segmentation",
      "Business Insights",
    ],
  },
  {
    category: "Visualization & Tools",
    icon: "🎨",
    skills: [
      "Excel",
      "Google Sheets",
      "Power BI",
      // "Tableau",
      "Microsoft PowerPoint",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, var(--glow), transparent 60%)",
        }}
      />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <p className="section-label">Expertise</p>
          <h2 className="section-heading">Skills & Competencies</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.15}>
              <div
                className="card-glass rounded-2xl p-6 h-full"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-badge cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
