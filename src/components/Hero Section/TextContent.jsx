import { motion } from "framer-motion";

export default function TextContent({ popIn, instantHover }) {
  const nameTransition = { 
    ...popIn.transition, 
    delay: 0.05,
    hover: instantHover 
  };

  return (
    <div className="relative z-10 text-right flex flex-col items-end select-none">

      {/* Name: Using tracking and scale-x to make it "longer" */}
      <motion.div
        variants={popIn}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.05 }}
        transition={nameTransition}
        className="font-anton flex flex-col gap-2 cursor-default transform scale-x-105 origin-right"
      >
        {/* tracking-[0.1em] adds custom horizontal space between letters */}
        <h1 className="text-7xl md:text-9xl text-white tracking-[0.1em] leading-[0.9]">
          VAIBHAV
        </h1>
        <h1 className="text-7xl md:text-9xl text-blue-500 tracking-[0.1em] leading-[0.9]">
          AGGARWAL
        </h1>
      </motion.div>

      {/* Subtext: Also stretched slightly to match the vibe */}
      <motion.div
        variants={popIn}
        initial="initial"
        animate="animate"
        whileHover={{ x: -12 }}
        transition={{ ...popIn.transition, delay: 0.1, hover: instantHover }}
        className="mt-10 font-space"
      >
        <p className="text-sm md:text-lg text-white/90 font-light tracking-[0.3em] uppercase border-b border-blue-500/50 pb-2">
          Software Developer <span className="text-blue-500 mx-2">•</span>
          Tech Enthusiast
        </p>
      </motion.div>

      <motion.button
        variants={popIn}
        initial="initial"
        animate="animate"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#3b82f6",
          borderColor: "#3b82f6",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ ...popIn.transition, delay: 0.15, hover: instantHover }}
        className="mt-14 font-space px-12 py-3 border border-white/40 text-white rounded-full text-[10px] font-bold tracking-[0.5em] uppercase transition-colors duration-150"
      >
        Discover
      </motion.button>

    </div>
  );
}