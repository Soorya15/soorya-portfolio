import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Soorya. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Soorya15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/soorya15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:soorya.actsci@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
