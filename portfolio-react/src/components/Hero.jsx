import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-12 px-4 overflow-x-hidden" id="home">
      <img
        src={HeroImage}
        alt="Soorya"
        className="mx-auto mt-8 mb-6 w-40 h-40 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-3xl sm:text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
          Soorya
        </span>{" "}
        Full-Stack Developer
      </h1>
      <p className="mt-4 text-base sm:text-lg text-gray-300 px-2">
        I specialize in building modern and responsive MERN web applications
      </p>

      {/* Responsive Buttons Section */}
      <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
        <a href="#contact">
          <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full cursor-pointer">
            Contact With Me
          </button>
        </a>
        <a
          href="/soorya-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full cursor-pointer">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
