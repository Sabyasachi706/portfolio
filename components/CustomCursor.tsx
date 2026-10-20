"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const fx = useSpring(x, { stiffness: 300, damping: 28 });
  const fy = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    // Only for devices with a real pointer, and not for reduced-motion users
    const ok =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(ok);
    if (!ok) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="custom-cursor" style={{ left: x, top: y }} />
      <motion.div className="custom-cursor-follower" style={{ left: fx, top: fy }} />
    </>
  );
}
