"use client";
import { aboutme } from "@/app/details";
import { Instagram, Github, Linkedin, Calendar, MapPin } from "lucide-react";
import AgeCounter from "./AgeCounter";

export default function AboutCard() {
  const { dob, age, desc, location, social } = aboutme;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Col: Age & Biometrics (4 Columns wide) */}
        <div className="md:col-span-4 space-y-6">
          {/* Big Age Display - Now Top Left */}
          <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/10 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

            <p className="text-emerald-500/50 text-xs uppercase tracking-[0.3em] font-mono mb-2">
              Years on Earth
            </p>
            <div className="text-8xl md:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <AgeCounter targetAge={age} />
            </div>
          </div>

          {/* Location & DOB Small Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/40 border border-white/5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  Base
                </p>
                <p className="text-zinc-200 font-medium">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/40 border border-white/5">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                  Born
                </p>
                <p className="text-zinc-200 font-medium">{dob}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Bio & Socials (8 Columns wide) */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-10">
          <div className="relative">
            {/* The "Green Mountain" Accent */}
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 via-emerald-800 to-transparent opacity-50" />

            <p className="text-2xl md:text-4xl text-zinc-300 leading-[1.4] font-light pl-6">
              {desc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pl-6">
            <SocialIcon
              icon={<Instagram size={18} />}
              link={social.instagram}
              label="Instagram"
            />
            <SocialIcon
              icon={<Github size={18} />}
              link={social.github}
              label="Github"
            />
            <SocialIcon
              icon={<Linkedin size={18} />}
              link={social.linkedIn}
              label="LinkedIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SocialIcon = ({ icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-950/10 border border-emerald-500/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 group"
  >
    <span className="group-hover:rotate-12 transition-transform">{icon}</span>
    <span className="text-xs font-semibold uppercase tracking-widest">
      {label}
    </span>
  </a>
);
