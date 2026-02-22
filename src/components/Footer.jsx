export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${
        isDark
          ? "bg-gray-950 text-gray-300 border-gray-800"
          : "bg-gray-900 text-gray-300 border-gray-800"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Portfolio
            </h3>
            <p className="text-sm text-gray-400">
              Front-End Developer creating beautiful, responsive web
              applications
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li>
                <a
                  id="resume"
                  href="/JOHNSON C EMMANUEL CV.pdf"
                  download="JOHNSON C EMMANUEL CV.pdf"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johnson-emmanuel-7a3351133/"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jaynuel10"
                  className="hover:text-blue-400 transition-colors py-1 block cursor-pointer"
                >
                  Github Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t ${isDark ? "border-gray-800" : "border-gray-700"} pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400`}
        >
          <p>&copy; {currentYear} Johnson's Portfolio. All rights reserved.</p>
          <p className="mt-2">JaycodeZ inc.</p>
        </div>
      </div>
    </footer>
  );
}
