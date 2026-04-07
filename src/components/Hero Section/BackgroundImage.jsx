import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundImage({}) {
  // 1. Raw Motion Values for zero-latency tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Map mouse movement to background shift (Slightly larger range for more "focus")
  const bgMoveX = useTransform(mouseX, [0, 2000], [15, -15]);
  const bgMoveY = useTransform(mouseY, [0, 1000], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Direct set without springs for instant reaction
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  
  return (
    <div>
      <motion.div
        style={{ x: bgMoveX, y: bgMoveY, scale: 1.1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/hero.jpg"
          fill
          priority
          className="object-cover opacity-70"
          alt="Hero Background"
        />
      </motion.div>
    </div>
  );
}
