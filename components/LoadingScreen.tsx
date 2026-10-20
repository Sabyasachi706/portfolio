"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show only on the first visit of a session, and keep it short
    try {
      if (sessionStorage.getItem("intro-seen")) {
        setLoading(false);
        return;
      }
      sessionStorage.setItem("intro-seen", "1");
    } catch {}
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A192F]"
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-4xl font-bold text-[#2DD4BF]"
          >
            SS
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
