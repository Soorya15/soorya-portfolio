import React from "react";
import Htmllogo from "../assets/html5logo.svg";
import Csslogo from "../assets/css3logo.svg";
import Jslogo from "../assets/javascript-logo.svg";
import Tailwindlogo from "../assets/Tailwind-logo.svg";
import Reactlogo from "../assets/react-logo.svg";
import Nodelogo from "../assets/nodejs-logo.svg";
import Expresslogo from "../assets/express-logo.svg";
import Mongodblogo from "../assets/mongodb-logo.svg";
import Mongooselogo from "../assets/Mongoose-logo.svg";
import Githublogo from "../assets/github-logo.svg";

const skillss = [
  { logo: Htmllogo, name: "HTML5" },
  { logo: Csslogo, name: "CSS3" },
  { logo: Jslogo, name: "JavaScript" },
  { logo: Tailwindlogo, name: "Tailwind CSS" },
  { logo: Reactlogo, name: "React.js" },
  { logo: Nodelogo, name: "Node.js" },
  { logo: Expresslogo, name: "Express.js", whiteBg: true },
  { logo: Mongodblogo, name: "MongoDB", whiteBg: true },
  { logo: Githublogo, name: "GitHub", whiteBg: true },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-black flex items-center justify-center pt-8" >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl text-white text-center mb-6 font-bold">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {skillss.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              <div
                className={`w-[100px] h-[100px] md:w-[150px] md:h-[150px] m-2 p-2 rounded-lg ${
                  skill.whiteBg ? "bg-white" : ""
                } flex items-center justify-center`}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-white text-center mt-2 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
