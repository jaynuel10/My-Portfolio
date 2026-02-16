import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Client's Portfolio Website",
      description:
        "Designed and developed a responsive portfolio website for a Relationship Life Coach to establish a strong online presence and build client trust. The platform highlights coaching services, testimonials, and booking information, providing a clear and welcoming user experience that encourages potential clients to connect directly.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://pst-kristie.vercel.app",
    },
    {
      name: "Collaborative Property Listing Platform",
      description:
        "Contributed to the development of a tenant–landlord property platform that promotes transparent communication, reduces reliance on intermediaries, and enhances rental accessibility through intuitive UI design.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
      link: "https://ulooma1.vercel.app",
    },
    {
      name: "E-commerce Clone Website",
      description:
        "Developed a React-based landing page using reusable components, props, and state, improving code maintainability and reinforcing best practices in modern frontend development.",
      technologies: ["React", "Tailwind CSS"],
      link: "https://tryclone-gamma.vercel.app",
    },
    {
      name: "E-Commerce Web Application",
      description:
        "Recreated Crunchies website using semantic HTML and Tailwind CSS, applying Flexbox and CSS Grid to achieve clean structure, responsive layout, and improved readability.",
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
            A selection of projects demonstrating technical proficiency,
            scalability, and user-centered design principles.
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
                         hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">{project.name}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
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

              {/* Links */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:opacity-80 transition cursor-pointer"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
