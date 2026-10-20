"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  TrendingUp,
  Database,
  Users,
  ShoppingCart,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  icon: LucideIcon;
  tag: string;
  problem: string;
  tools: string[];
  approach: string;
  results: string[];
  impact: string;
  github?: string; // add when the repo is public
  live?: string; // optional: dashboard / demo link
  color: string;
};

const projects: Project[] = [
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
      "Built recommendation model with measurable lift", // TODO: replace with the actual lift %
    ],
    impact:
      "Actionable insights to drive personalized marketing strategies and reduce churn.",
    github: "https://github.com/Sabyasachi706/e-commerce_transaction_analysis",
    color: "#2DD4BF",
  },
  {
    id: 2,
    title: "Employee Compensation Prediction",
    icon: TrendingUp,
    tag: "Regression · ML · Feature Engineering",
    problem:
      "Predict accurate employee compensation using organizational and performance variables to assist HR in equitable pay decisions.",
    tools: ["Python", "Scikit-learn", "Gradient Boosting", "Pandas", "Matplotlib"],
    approach:
      "Engineered 13 features from raw HR data, tested multiple regression models, and selected Gradient Boosting for highest performance after cross-validation.",
    results: [
      "85.73% model score (state the metric, e.g. R²)", // TODO: confirm the metric
      "13 engineered variables",
      "Cross-validated on holdout set",
    ],
    impact:
      "Enables data-driven compensation benchmarking, reducing pay disparity and improving talent retention decisions.",
    github: "https://github.com/Sabyasachi706/Employee-salary-prediction",
    color: "#A78BFA",
  },
  {
    id: 3,
    title: "Electronics Comparison Data Pipeline",
    icon: ShoppingCart,
    tag: "Web Scraping · Data Quality · PostgreSQL",
    problem:
      "Compare smartphones, laptops and tablets across Amazon.in and Flipkart. That needs clean, consistent product data before any website can show it.",
    tools: ["Python", "BeautifulSoup", "Pydantic", "PostgreSQL", "pytest"],
    approach:
      "Defined a product contract and PostgreSQL schema, built marketplace scrapers and a dataset builder that normalizes and validates listings, and added automated data-quality checks that decide whether a run is safe to load.",
    results: [
      "Separate listing and device models, so one device links to many offers",
      "URL-based deduplication and contract validation on every run",
      "Quality report gates loading, with a CSV/JSON sample export for the backend team",
    ],
    impact:
      "Gives the API and frontend team a trusted, documented dataset to build on instead of raw scraped pages.",
    // github: "https://github.com/Sabyasachi706/<repo-name>",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Banking System",
    icon: Database,
    tag: "System Design · SQL · OOP",
    problem:
      "Design a robust, scalable banking system capable of real-time transaction processing and account management.",
    tools: ["Python", "SQL", "C++", "OOP Design Patterns"],
    approach:
      "Developed a modular architecture with real-time transaction validation, balance reconciliation, and audit logging using OOP principles.",
    results: [
      "Modular design with transaction validation",
      "Balance reconciliation checks",
      "Audit log for every transaction",
    ],
    impact:
      "Shows software design and SQL fundamentals behind transactional data.",
    github: "https://github.com/Sabyasachi706/Banking-System",
    color: "#60A5FA",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="card-glass rounded-2xl p-6 h-full flex flex-col"
    >
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
            background: "var(--bg)",
            color: "var(--text-muted)",
            border: "1px solid var(--border)",
          }}
        >
          #{String(project.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        {project.title}
      </h3>
      <p className="font-mono text-xs mb-4" style={{ color: project.color }}>
        {project.tag}
      </p>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        {project.problem}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tools.map((tool) => (
          <span key={tool} className="skill-badge text-xs">
            {tool}
          </span>
        ))}
      </div>

      <div className="mb-4">
        <span
          className="font-mono text-xs uppercase tracking-wider block mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          Results
        </span>
        <ul className="space-y-1">
          {project.results.map((r) => (
            <li
              key={r}
              className="text-sm flex items-start gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span aria-hidden="true" style={{ color: project.color }}>→</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Approach + impact tucked away so cards stay scannable */}
      <details className="group mb-5 flex-1">
        <summary
          className="flex items-center gap-1 cursor-pointer select-none font-mono text-xs uppercase tracking-wider list-none"
          style={{ color: project.color }}
        >
          How I built it &amp; impact
          <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-3 space-y-3">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {project.approach}
          </p>
          <div
            className="rounded-lg p-3"
            style={{ background: `${project.color}10`, border: `1px solid ${project.color}30` }}
          >
            <span
              className="font-mono text-xs uppercase tracking-wider block mb-1"
              style={{ color: project.color }}
            >
              Business Impact
            </span>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.impact}
            </p>
          </div>
        </div>
      </details>

      <div className="flex items-center gap-5 mt-auto text-sm font-medium" style={{ color: "var(--accent)" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex items-center gap-2"
          >
            <Github size={15} /> GitHub <ArrowUpRight size={13} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex items-center gap-2"
          >
            Live demo <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Work Showcase</p>
          <h2 className="section-heading">Projects</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 2) * 0.15}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
