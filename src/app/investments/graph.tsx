"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 800 },
  { month: "Mar", value: 1200 },
  { month: "Apr", value: 1500 },
  { month: "May", value: 1800 },
];

export default function GraphPage() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Investment Trends</h2>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" className="text-gray-600" />
            <YAxis className="text-gray-600" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
