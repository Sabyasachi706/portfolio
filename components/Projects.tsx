"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, TrendingUp, Database, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "e-Commerce Transactions Analysis",
    icon: Users,
    tag: "EDA · Segmentation · ML",
    problem:
      "Identify revenue patterns and customer behavior from large-scale e-commerce transaction data to improve conversion and retention.",
    tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "SQL"],
    approach:
      "Applied comprehensive EDA, customer segmentation via clustering, and built a recommendation model based on purchase history patterns.",
    results: [
      "Segmented customers into 5 distinct behavioral clusters",
      "Identified top-revenue product categories",
      "Built recommendation model with measurable lift",
    ],
    impact:
      "Actionable insights to drive personalized marketing strategies and reduce churn.",
    github: "https://github.com/Sabyasachi706/e-commerce_transaction_analysis",
    color: "#2DD4BF",
  },
  {
    id: 2,
    title: "Banking System",
    icon: Database,
    tag: "System Design · SQL · OOP",
    problem:
      "Design a robust, scalable banking system capable of real-time transaction processing and account management.",
    tools: ["Python", "SQL", "C++", "OOP Design Patterns"],
    approach:
      "Developed a modular architecture with real-time transaction validation, balance reconciliation, and audit logging using OOP principles.",
    results: [
      "Scalable system handling concurrent transactions",
      "Reduced transaction error rate",
      "Full audit trail implementation",
    ],
    impact:
      "Production-ready blueprint demonstrating enterprise-level software and data engineering skills.",
    github: "https://github.com/Sabyasachi706/Banking-System",
    color: "#60A5FA",
  },
  {
    id: 3,
    title: "Employee Compensation Prediction",
    icon: TrendingUp,
    tag: "Regression · ML · Feature Engineering",
    problem:
      "Predict accurate employee compensation using organizational and performance variables to assist HR in equitable pay decisions.",
    tools: ["Python", "Scikit-learn", "Gradient Boosting", "Pandas", "Matplotlib"],
    approach:
      "Engineered 13 features from raw HR data, tested multiple regression models, and selected Gradient Boosting for highest performance after cross-validation.",
    results: [
      "🏆 85.73% model accuracy",
      "13 engineered variables",
      "Cross-validated on holdout set",
    ],
    impact:
      "Enables data-driven compensation benchmarking, reducing pay disparity and improving talent retention decisions.",
    github: "https://github.com/Sabyasachi706/Employee-salary-prediction",
    color: "#A78BFA",
  },
//   {
//   id: 4,
//   title: "SSS Portfolio (React Version)",
//   icon: Github,
//   tag: "Frontend Development · React · UI/UX",

//   problem:
//     "Design and develop a fully responsive personal portfolio showcasing projects, skills, and certifications with modern UI and clean architecture.",

//   tools: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],

//   approach:
//     "Built modular reusable components, implemented responsive layout using Tailwind CSS, optimized UI structure, and ensured clean routing and performance optimization.",

//   results: [
//     "Fully responsive across devices",
//     "Modular component-based architecture",
//     "Improved UI consistency and design structure"
//   ],

//   impact:
//     "Demonstrates strong frontend development capability and ability to translate design concepts into production-ready interfaces.",

//   color: "#38BDF8",
// },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Work Showcase</p>
          <h2 className="section-heading">Projects</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="card-glass rounded-2xl p-6 h-full flex flex-col group"
                style={{ border: `1px solid var(--border)` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    <project.icon size={20} style={{ color: project.color }} />
                  </div>
                  <span
                    className="font-mono text-xs px-2 py-1 rounded"
                    style={{
                      background: "var(--bg-card)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    #{String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="font-display text-lg font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p className="font-mono text-xs mb-4" style={{ color: project.color }}>
                  {project.tag}
                </p>

                {/* Problem */}
                <div className="mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                    Problem
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.problem}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-badge text-xs">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="mb-4 flex-1">
                  <span className="font-mono text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--text-muted)" }}>
                    Results
                  </span>
                  <ul className="space-y-1">
                    {project.results.map((r) => (
                      <li
                        key={r}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span style={{ color: project.color }}>→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div
                  className="rounded-lg p-3 mb-5"
                  style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}
                >
                  <span className="font-mono text-xs uppercase tracking-wider block mb-1" style={{ color: project.color }}>
                    Business Impact
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {project.impact}
                  </p>
                </div>

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-sm font-medium mt-auto"
                  style={{ color: "var(--accent)" }}
                >
                  <Github size={15} />
                  View on GitHub
                  <ArrowUpRight size={13} />
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
