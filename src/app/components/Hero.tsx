import { FC } from "react";
import { cn } from "../../../lib/utils";
import { Spotlight } from "../../app/components/ui/Spotlight";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a12] text-white flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto">
      {/* Background Pattern */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlights - Left Side */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-[20%] w-[40vw] h-[60vh]" fill="purple" />

      {/* Spotlights - Right Side */}
      <Spotlight className="top-10 right-[20%] w-[40vw] h-[60vh]" fill="white" />
      <Spotlight className="top-[150px] right-[-10%] w-[50vw] h-[50vh]" fill="purple" />

      {/* Navbar */}
      <nav className="absolute top-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 flex gap-8 text-white shadow-md">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="text-gray-300 border-b-2 border-white pb-1">Projects</a>
        <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </nav>

      {/* Hero Content */}
      <p className="text-sm uppercase tracking-widest text-gray-400">Dynamic Web Magic with Next.js</p>
      <h1 className="text-5xl md:text-6xl font-bold mt-4">
        Transforming Concepts into
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Seamless User Experiences</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4">Hi! I’m Adrian, a Next.js Developer based in Croatia.</p>

      {/* Call to Action Button */}
      <a href="#projects" className="mt-6 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg shadow-lg flex items-center gap-2">
        See my work <span className="text-lg">↗</span>
      </a>
    </section>
  );
};

export default Hero;
