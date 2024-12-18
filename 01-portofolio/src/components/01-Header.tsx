// import React from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-dark-pink p-4 flex justify-between items-center shadow-md fixed w-full z-50 font-jost">
      <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
      <nav className="hidden md:flex gap-4">
        <button onClick={toggleSidebar} className="text-white hover:underline">
          About Me
        </button>
        <a href="/hero" className="text-white hover:underline">
          Hero
        </a>
        <a href="/skills" className="text-white hover:underline">
          Skills
        </a>
        <a href="/portfolio" className="text-white hover:underline">
          Portfolio
        </a>
        <a href="/experience" className="text-white hover:underline">
          Experience
        </a>
        <a href="/testimonial" className="text-white hover:underline">
          Testimonial
        </a>
        <a href="/contact" className="text-white hover:underline">
          Contact
        </a>
      </nav>
      {/* <button onClick={toggleSidebar} className="text-white text-2xl md:hidden">
        ☰
      </button> */}
    </header>
  );
}
