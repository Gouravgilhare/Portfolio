export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <p className="text-gray-400 leading-8 mb-6">
              I'm <span className="text-blue-500 font-semibold">Gourav</span>, a
              backend-focused developer passionate about building scalable,
              high-performance systems.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              My primary backend stack includes
              <span className="text-white font-medium"> Java</span> and
              <span className="text-white font-medium"> Spring Boot</span>,
              along with Node.js and MySQL. I enjoy designing clean REST APIs,
              structuring maintainable backend architectures, and optimizing
              database performance.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              I actively solve Data Structures & Algorithms problems in
              <span className="text-white font-medium"> C++</span> and have
              solved
              <span className="text-blue-500 font-semibold">
                {" "}
                300+ problems on LeetCode
              </span>
              , strengthening my understanding of algorithmic thinking,
              time/space complexity, and low-level efficiency.
            </p>

            <p className="text-gray-400 leading-8">
              I’m deeply interested in{" "}
              <span className="text-white font-medium">System Design</span>,
              distributed systems, backend scalability, and core computer
              science subjects like OS, DBMS, and Computer Networks.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-500">
              Quick Highlights
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Backend Development (Java, Spring Boot)</li>
              <li>✔ REST API & Microservices Architecture</li>
              <li>✔ 300+ LeetCode Problems (C++)</li>
              <li>✔ Strong DSA & Algorithmic Thinking</li>
              <li>✔ System Design & Scalable Architectures</li>
              <li>✔ AWS EC2 & Nginx Deployment</li>
              <li>✔ MySQL Query Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
