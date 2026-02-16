export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"} py-16 sm:py-20 px-4 sm:px-6 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          About Me
        </h2>

        <div
          className={`${isDark ? "bg-gray-700" : "bg-gray-50"} rounded-lg p-6 sm:p-8 md:p-12 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer`}
        >
          <p
            className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I am a frontend developer focused on building clean, scalable, and
            user-centered web applications using React, JavaScript, and Tailwind
            CSS. My work is driven by a strong emphasis on performance,
            accessibility, and maintainable component architecture.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I approach development with both a technical and product mindset —
            ensuring that every interface is not only visually polished but also
            intuitive and efficient. From structuring reusable components to
            optimizing rendering performance, I strive to deliver solutions that
            balance functionality, clarity, and long-term scalability.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            Beyond technical execution, I value collaboration, clear
            communication, and continuous improvement. I am constantly expanding
            my knowledge of modern frontend tools, best practices, and evolving
            industry standards to remain adaptable and effective in fast-paced
            development environments.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I am eager to contribute to teams building meaningful digital
            products and to grow within an environment that values technical
            excellence, innovation, and measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
