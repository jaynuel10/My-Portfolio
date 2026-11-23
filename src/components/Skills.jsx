export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "API Validation",
        "Role-Based Access Control",
      ],
    },
    {
      category: "Database & Security",
      items: [
        "MongoDB",
        "Mongoose",
        "Password Hashing (bcrypt)",
        "Authentication & Authorization",
        "Email Integration (Nodemailer)",
      ],
    },
    {
      category: "Tools & Development",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Swagger / OpenAPI",
        "EmailJS",
      ],
    },
    {
      category: "Professional Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Clean Code",
        "Debugging",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Skills & Technologies
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies, tools, and development practices I use to build
            responsive web applications and reliable backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8
                         border border-gray-200 dark:border-gray-800
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-sm font-medium
                               bg-gray-100 dark:bg-gray-800
                               text-gray-700 dark:text-gray-300
                               rounded-lg
                               hover:bg-indigo-100 dark:hover:bg-indigo-900/40
                               hover:text-indigo-700 dark:hover:text-indigo-300
                               transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
