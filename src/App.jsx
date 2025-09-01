import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
