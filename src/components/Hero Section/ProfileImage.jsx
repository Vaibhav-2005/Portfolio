"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage({ popIn, hover }) {
  return (
    <motion.div
      variants={popIn}
      initial={{ ...popIn.initial, opacity: 0.4 }}
      animate={{ ...popIn.animate, opacity: 0.4 }}
      whileHover={{ 
        scale: 1.1, 
        rotate: -1, 
        opacity: 1 
      }}
      transition={{ 
        opacity: { duration: 0.1 },
        scale: { duration: 0.1 },
        default: popIn.transition 
      }}
      className="cursor-pointer"
    >
      <div className="relative h-[320px] w-[240px] rounded-[4rem] overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
        <Image
          src="/photo.png"
          fill
          // Since your container is 240px wide, we tell the browser 
          // to expect an image around that size.
          sizes="240px"
          className="object-cover"
          alt="Vaibhav Profile"
          priority
        />
      </div>
    </motion.div>
  );
}