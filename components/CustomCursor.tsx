"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden md:block"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="custom-cursor-follower hidden md:block"
        style={{ left: follower.x, top: follower.y }}
      />
    </>
  );
}
