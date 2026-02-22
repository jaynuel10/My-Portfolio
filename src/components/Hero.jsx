import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT SIDE */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hello, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Johnson Emmanuel
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
              Frontend Developer
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                           bg-indigo-600 text-white font-medium
                           hover:bg-indigo-700 transition cursor-pointer"
              >
                View My Work <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className="px-6 py-3 rounded-lg font-medium 
                           border border-gray-300 dark:border-gray-700
                           hover:bg-gray-100 dark:hover:bg-gray-900
                           transition cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center">
            {/* Background Glow Layers */}
            <div className="absolute w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-2xl"></div>

            {/* Glass Image Container */}
            <div
              className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 
                            p-4 rounded-3xl border border-white/30 
                            dark:border-gray-800 shadow-2xl animate-float"
            >
              <img
                src="/image/profile1.jpg"
                alt="johnson's profile"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
