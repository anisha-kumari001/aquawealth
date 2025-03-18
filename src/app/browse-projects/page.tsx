"use client";

import { useState } from "react";
import Link from "next/link";

// Project Type
type Project = {
  id: number;
  name: string;
  category: string;
  investmentRequired: number;
  roi: number;
  duration: string;
  location: string;
  fundingProgress: number;
  featured?: boolean;
};

const projects: Project[] = [
  { id: 1, name: "Smart Water Conservation", category: "Water Conservation", investmentRequired: 50000, roi: 12, duration: "12 months", location: "California, USA", fundingProgress: 75, featured: true },
  { id: 2, name: "AI-Based Irrigation", category: "Irrigation", investmentRequired: 30000, roi: 10, duration: "8 months", location: "India", fundingProgress: 60 },
  { id: 3, name: "Renewable Energy for Water Plants", category: "Renewable Energy", investmentRequired: 80000, roi: 15, duration: "18 months", location: "Germany", fundingProgress: 40, featured: true },
  { id: 4, name: "Eco-Friendly Farming", category: "Sustainable Agriculture", investmentRequired: 25000, roi: 9, duration: "10 months", location: "Australia", fundingProgress: 50 }
];

const categories = ["All", "Water Conservation", "Irrigation", "Renewable Energy", "Sustainable Agriculture"];
const sortOptions = ["Newest", "Highest ROI", "Most Funded"];

export default function BrowseProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const filterProjects = () => {
    let filtered = projects;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    
    if (selectedSort === "Highest ROI") {
      filtered.sort((a, b) => b.roi - a.roi);
    } else if (selectedSort === "Most Funded") {
      filtered.sort((a, b) => b.fundingProgress - a.fundingProgress);
    }
    
    setFilteredProjects([...filtered]);
  };

  return (
    <div className="p-6 grid grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <div className="col-span-1 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg">Filters</h2>
        <label className="block mt-2">Category</label>
        <select className="w-full p-2 border rounded" onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        
        <label className="block mt-2">Sort By</label>
        <select className="w-full p-2 border rounded" onChange={(e) => setSelectedSort(e.target.value)}>
          {sortOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>

        <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded" onClick={filterProjects}>Apply Filters</button>
      </div>

      {/* Projects List */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.category}</p>
            <p className="text-gray-800">Investment: ${project.investmentRequired}</p>
            <p className="text-green-600 font-semibold">ROI: {project.roi}%</p>
            <p className="text-gray-600">Duration: {project.duration}</p>
            <p className="text-gray-600">Location: {project.location}</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${project.fundingProgress}%` }}></div>
            </div>
            <p className="text-gray-700 mt-2">Funding Progress: {project.fundingProgress}%</p>
            <div className="mt-4 flex justify-between">
              <Link href={`/projects/${project.id}`} className="bg-green-500 text-white px-4 py-2 rounded">Learn More</Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Investing</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
