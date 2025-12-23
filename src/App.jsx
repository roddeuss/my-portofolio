import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 detik
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen font-sans text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <Footer name="Andreas Bilmar" year={2025} />
    </div>
  );
}

export default App;
