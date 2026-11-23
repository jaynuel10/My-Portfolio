import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "TaskFlow — Task Management Application",
      description:
        "Building a full-stack task management application with secure authentication, email verification, password recovery, role-based access control, and comprehensive task management. The backend includes RESTful APIs, analytics, admin functionality, and audit logging. Frontend development is currently in progress.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/jaynuel10/TaskFlow",
      status: "In Progress",
    },

    {
      name: "Collaborative Property Listing Platform",
      description:
        "Contributed to the development of a tenant–landlord property platform that promotes transparent communication, reduces reliance on intermediaries, and enhances rental accessibility through intuitive UI design.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
      link: "https://ulooma1.vercel.app",
    },

    {
      name: "E-Commerce Web Application",
      description:
        "Recreated the Crunchies website using semantic HTML and CSS, applying Flexbox and CSS Grid to achieve a clean structure, responsive layout, and improved readability.",
      technologies: ["HTML", "CSS"],
      link: "https://crunches-sigma.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A selection of projects showcasing my experience in frontend
            development, backend engineering, and building user-focused
            applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-950
                         rounded-2xl p-8
                         border border-gray-200 dark:border-gray-800
                         transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>

                {project.status && (
                  <span className="shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium
                               bg-gray-100 dark:bg-gray-800
                               text-gray-700 dark:text-gray-300
                               rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:opacity-80 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:opacity-80 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
