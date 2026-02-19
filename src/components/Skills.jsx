export default function Skills() {
  const skills = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Springboot", "Node.js", "Express.js", "REST APIs"],
    Database: ["MySQL", "MongoDB"],
    DevOps: ["Linux", "AWS EC2", "Nginx", "Docker", "Git"],
  };

  return (
    <section id="skills" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-3 py-1 text-sm rounded-lg"
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
