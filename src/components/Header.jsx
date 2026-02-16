import { useState } from "react";
import { Menu, X, Sun, Moon, Code } from "lucide-react";

export default function Header({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-lg sticky top-0 z-50 transition-colors duration-300`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div
          className="font-bold text-lg sm:text-xl cursor-pointer flex items-center gap-2 hover:scale-110 transition-transform duration-300 group cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <div
            className={`p-2 rounded-lg transition-all duration-300 ${isDark ? "bg-gradient-to-br from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500" : "bg-gradient-to-br from-blue-500 to-indigo-600 group-hover:from-blue-400 group-hover:to-indigo-500"}`}
          >
            <Code size={20} className="text-white" />
          </div>
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className={`text-sm lg:text-base hover:text-blue-500 transition-colors ${isDark ? "hover:text-blue-400" : ""} py-2 cursor-pointer`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} min-h-10 min-w-10 cursor-pointer`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} min-h-10 min-w-10 cursor-pointer`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 min-h-10 min-w-10 cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${isDark ? "bg-gray-800" : "bg-gray-50"} px-4 pb-4`}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              className={`block w-full text-left py-2 px-4 rounded hover:${isDark ? "bg-gray-700" : "bg-gray-200"} transition-colors cursor-pointer`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
