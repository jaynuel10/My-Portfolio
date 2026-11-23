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
          className={`${isDark ? "bg-gray-700" : "bg-gray-50"} rounded-lg p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-xl`}
        >
          <p
            className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I am a MERN Stack Developer passionate about building modern,
            responsive, and user-focused web applications. I work with
            technologies such as MongoDB, Express.js, React, and Node.js to
            develop functional and intuitive digital experiences.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            My development experience spans both frontend and backend
            engineering, from creating reusable React components and responsive
            interfaces to building RESTful APIs, implementing authentication,
            managing databases, and handling server-side logic. I also value
            clean code, maintainable architecture, security, and performance.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I enjoy turning ideas into practical applications and continuously
            challenging myself with projects that expand my technical skills.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-200" : "text-gray-700"}`}
          >
            I am committed to continuous learning, improving my problem-solving
            abilities, and contributing to teams that build meaningful digital
            products. I look forward to growing as a developer while creating
            solutions that make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
}
