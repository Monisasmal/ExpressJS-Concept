import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-10 border-gray-300 bg-white">
      
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          {/* Left */}
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2026 React Mastery Guide. All rights reserved.
          </p>

          {/* Icons */}
          <div className="flex gap-5 text-lg text-gray-600">
            <a href="https://github.com/Monisasmal" target="_blank" className="hover:text-blue-600">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/manaswini-sasmal-b77a21162/" target="_blank" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://manaswini-portfolio.vercel.app/" target="_blank" className="hover:text-blue-600">
              <FaGlobe />
            </a>
          </div>

          {/* Right */}
          <p className="text-gray-600 text-xs sm:text-sm">
            Built with ❤️ by Manaswini
          </p>

        </div>

      </div>

    </footer>
  );
}