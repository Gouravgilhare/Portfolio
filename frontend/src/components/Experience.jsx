import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition duration-300">
          <div className="flex items-start gap-4">
            <FaBriefcase className="text-blue-500 text-2xl mt-1" />

            <div>
              {/* Role */}
              <h3 className="text-2xl font-semibold mb-1">
                Full-Stack Developer Intern
              </h3>

              {/* Company */}
              <p className="text-blue-500 mb-1">
                Klimb.io
              </p>

              {/* Duration */}
              <p className="text-gray-400 mb-4">
                Feb 25, 2026 — Present
              </p>

              {/* Work Description */}
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>
                  Working on full-stack features using the MERN stack.
                </li>
                <li>
                  Contributing to backend APIs and improving system performance.
                </li>
                <li>
                  Implementing new features and debugging production issues.
                </li>
                <li>
                  Collaborating with the team to enhance platform scalability and
                  user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}