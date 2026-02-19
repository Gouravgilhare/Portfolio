import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-4xl text-center">
        {/* Small Intro */}
        <p className="text-blue-500 text-lg mb-4 tracking-wide">
          Backend Engineer & Problem Solver
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Gourav Gilhare</h1>

        {/* One Liner */}
        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Java & Spring Boot Backend Developer focused on scalable systems,
          system design, and high-performance applications.
        </p>

        {/* Achievement Line */}
        <p className="text-gray-500 mb-8">
          🧠 300+ LeetCode Problems (C++) | 🏆 Recognized for SAMADHAN Project
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 text-2xl">
          <a
            href="https://github.com/Gouravgilhare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gourav-gilhare-b876302b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/gouravgilhare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
