import React from "react";
import AboutImage from "../assets/about-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image Section */}
          <div className="mb-8 md:mb-0">
            <img
              src={AboutImage}
              alt="Soorya's Profile"
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-xl object-cover object-top shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <p className="text-base md:text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 font-semibold text-2xl">Soorya</span>, a
              dedicated and enthusiastic <strong>MERN Stack Developer</strong>{" "}
              with a passion for building full-stack web applications. I
              specialize in creating dynamic, scalable, and high-performance
              solutions using <strong>MongoDB</strong>,{" "}
              <strong>Express.js</strong>, <strong>React.js</strong>, and{" "}
              <strong>Node.js</strong>.
              <br />
              <br />I began my journey with front-end development using{" "}
              <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>React</strong>, and
              gradually expanded my skills to the back-end. I enjoy building
              complete web applications — from designing engaging UI to
              implementing server-side logic and connecting to databases.
              <br />
              <br />
              I'm always eager to learn new technologies, write clean and
              maintainable code, and work on real-world projects that make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
