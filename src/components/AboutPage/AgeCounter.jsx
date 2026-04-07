"use client";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function AgeCounter({ targetAge }) {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // 1. Initial 1.5s delay where it stays at 0
    const timer = setTimeout(() => {
      
      // 2. Direct animation from 0 to targetAge
      const controls = animate(0, targetAge, {
        duration: 2, // Adjust how fast the numbers climb
        ease: "easeOut", // "easeOut" is fast start, clean finish without the spring lag
        onUpdate: (value) => setDisplayCount(Math.floor(value)),
      });

      return () => controls.stop();
    }, 1500);

    return () => clearTimeout(timer);
  }, [targetAge]);

  return <span>{displayCount}</span>;
}