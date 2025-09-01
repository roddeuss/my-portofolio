import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">MyPortfolio</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
          <li><a href="#experience" className="hover:text-indigo-600">Experience</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
