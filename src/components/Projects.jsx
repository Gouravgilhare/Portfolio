export default function Projects() {
  const projects = [
    {
      title: "Paylift - Ride & Parcel",
      description:
        "Production-ready backend deployed on AWS EC2 with Nginx reverse proxy and Docker configuration.",
      tech: ["Node.js", "Express", "AWS EC2", "Nginx", "Docker"],
      github: "#",
      live: "#",
    },
    {
      title: "SAMADHAN - Admin Dashboard",
      description:
        "A complaint management admin dashboard built with React and Tailwind CSS, featuring real-time complaint tracking, department-wise filtering, status management, and graphical analytics for efficient governance.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Recharts",
      ],
      github: "#",
      live: "#",
    },

    {
      title: "Bank Management System",
      description:
        "Java-based banking application that simulates real-world banking operations including account creation, deposits, withdrawals, fund transfers, and transaction management with secure authentication.",
      tech: ["Java", "Java Swing", "MySQL"],
      github: "https://github.com/Gouravgilhare/BankManagementSystem.git",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 text-sm rounded-lg"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
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
