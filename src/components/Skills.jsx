export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 92 },
        { name: "React", proficiency: 90 },
      ],
    },
    {
      category: "Styling",
      items: [
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "CSS Modules", proficiency: 85 },
        { name: "Responsive Design", proficiency: 92 },
      ],
    },
    {
      category: "Tools & Version Control",
      items: [
        { name: "Git", proficiency: 88 },
        { name: "GitHub", proficiency: 88 },
        { name: "VS Code", proficiency: 95 },
        { name: "npm", proficiency: 85 },
      ],
    },
    {
      category: "Other Skills",
      items: [
        { name: "Problem Solving", proficiency: 90 },
        { name: "Team Collaboration", proficiency: 88 },
        { name: "Responsive Web Design", proficiency: 92 },
      ],
    },
  ];

  const proficiency = [
    { skill: "React", level: "Advanced", percentage: 90 },
    { skill: "JavaScript", level: "Advanced", percentage: 92 },
    { skill: "Tailwind CSS", level: "Advanced", percentage: 90 },
    { skill: "HTML & CSS", level: "Advanced", percentage: 93 },
    { skill: "Responsive Design", level: "Advanced", percentage: 92 },
    { skill: "Git & GitHub", level: "Intermediate", percentage: 75 },
  ];

  // Circular Progress Component
  const CircularProgress = ({ percentage, skill }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-32 h-32">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 120 120"
          >
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={percentage >= 80 ? "currentColor" : "currentColor"}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className={
                percentage >= 90
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-yellow-500 dark:text-yellow-400"
              }
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {percentage}%
            </span>
          </div>
        </div>
        <p className="text-center font-medium text-gray-700 dark:text-gray-300 text-sm">
          {skill}
        </p>
      </div>
    );
  };

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
            A comprehensive overview of my technical expertise and key
            professional skills.
          </p>
        </div>

        {/* Skills Grid with Linear Progress */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {typeof skill === "string" ? skill : skill.name}
                      </span>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {typeof skill === "string" ? "85%" : skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${typeof skill === "string" ? 85 : skill.proficiency}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Overview with Circular Progress */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition cursor-pointer">
          <h3 className="text-xl font-semibold mb-10 text-indigo-600 dark:text-indigo-400 text-center">
            Proficiency Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {proficiency.map((item, idx) => (
              <CircularProgress
                key={idx}
                percentage={item.percentage}
                skill={item.skill}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
