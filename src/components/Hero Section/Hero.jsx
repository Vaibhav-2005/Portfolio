"use client";
import BackgroundImage from "./BackgroundImage";
import ProfileImage from "./ProfileImage";
import TextContent from "./TextContent";

export default function Hero() {
  const popIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 400, damping: 30 },
  };
  
  const instantHover = { type: "tween", ease: "linear", duration: 0.1 };

  return (
    // Changed md:px-32 to pl-4 md:pl-12 pr-10 md:pr-32 to pull content left
    <section className="relative flex pl-4 md:pl-12 pr-10 md:pr-32 items-center justify-between h-screen w-full overflow-hidden bg-black font-outfit cursor-default">
      
      <BackgroundImage />
      
      {/* Wrapped ProfileImage in a div to ensure left alignment */}
      <div className="relative z-10 hidden lg:block">
        <ProfileImage popIn={popIn} hover={instantHover} />
      </div>

      <TextContent popIn={popIn} instantHover={instantHover} />
      
    </section>
  );
}