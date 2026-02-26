"use client";

import { ScrollReveal } from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://formspree.io/f/xqedndak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Error sending message.");
  }

  setLoading(false);
};

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sssatapathy256@gmail.com",
      href: "mailto:sssatapathy256@gmail.com",
      color: "#2DD4BF",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8018647226",
      href: "tel:+918018647226",
      color: "#60A5FA",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sabyasachi-satapathy",
      color: "#A78BFA",
    },
  ];

  const inputStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading">Contact</h2>
          <div className="divider mb-16" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <ScrollReveal direction="left">
            <h3
              className="font-display text-2xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Let's work together.
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              I'm actively looking for data analyst roles, internships, and research
              collaborations. Whether you have a project, a question, or just want to say hello —
              feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 card-glass rounded-xl p-4 group"
                >
                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </p>
                    <p className="font-body text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right">
            <div className="card-glass rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-64 gap-4 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle size={48} style={{ color: "var(--accent)" }} />
                    </motion.div>
                    <h3
                      className="font-display text-xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Message sent!
                    </h3>
                    <p className="font-body text-sm" style={{ color: "var(--text-muted)" }}>
                      I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5"
                  >
                    <div>
                      <label
                        className="font-mono text-xs tracking-wider uppercase block mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        placeholder="John Doe"
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--accent)";
                          e.target.style.boxShadow = "0 0 0 3px var(--glow)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="font-mono text-xs tracking-wider uppercase block mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        placeholder="john@company.com"
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--accent)";
                          e.target.style.boxShadow = "0 0 0 3px var(--glow)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="font-mono text-xs tracking-wider uppercase block mb-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: "none" }}
                        placeholder="Tell me about the opportunity..."
                        onFocus={(e) => {
                          e.target.style.borderColor = "var(--accent)";
                          e.target.style.boxShadow = "0 0 0 3px var(--glow)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full block"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
