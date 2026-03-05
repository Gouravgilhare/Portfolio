import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard";

function Portfolio() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio website */}
        <Route path="/" element={<Portfolio />} />

        {/* Admin pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;