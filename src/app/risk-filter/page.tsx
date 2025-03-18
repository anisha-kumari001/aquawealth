"use client";

import { useState } from "react";
import Link from "next/link";

export default function RiskFilter() {
  const [riskLevel, setRiskLevel] = useState("Low");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Risk Filter</h1>
      <label className="block text-lg mb-2">Select Risk Level:</label>
      <select
        className="w-full p-2 border rounded"
        value={riskLevel}
        onChange={(e) => setRiskLevel(e.target.value)}
      >
        <option value="Low">Low Risk</option>
        <option value="Medium">Medium Risk</option>
        <option value="High">High Risk</option>
      </select>
      <div className="mt-4">
        <Link href="/browse-projects" className="text-blue-500 underline">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
