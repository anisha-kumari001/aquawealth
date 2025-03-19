"use client";

import { useState, useEffect } from "react";
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { jsPDF } from "jspdf";

// Historical drought risk data
const historicalData: Record<number, number[]> = {
  2021: [20, 30, 25, 40, 35, 50, 55, 45, 60, 65, 70, 80],
  2022: [30, 35, 28, 42, 38, 53, 60, 50, 65, 70, 75, 85],
  2023: [25, 32, 27, 38, 33, 47, 58, 46, 61, 67, 72, 78],
};

// Moving Average Calculation (DSA)
const calculateMovingAverage = (year: string) => {
  const data = historicalData[parseInt(year)] || [];
  return data.map((_, i) => {
    const sum = data.slice(Math.max(i - 2, 0), i + 1).reduce((acc, val) => acc + val, 0);
    const avg = Math.round(sum / Math.min(i + 1, 3));
    return { month: new Date(2024, i).toLocaleString("default", { month: "short" }), droughtRisk: avg };
  });
};

export default function DroughtForecastPage() {
  const [year, setYear] = useState("2023");
  const [forecastData, setForecastData] = useState(calculateMovingAverage(year));

  useEffect(() => {
    setForecastData(calculateMovingAverage(year));
  }, [year]);

  // PDF Download Function
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Drought Forecast Report (${year})`, 20, 20);
    forecastData.forEach((data, index) => {
      doc.text(`${data.month}: ${data.droughtRisk}% Risk`, 20, 30 + index * 10);
    });
    doc.save(`Drought_Forecast_${year}.pdf`);
  };

  return (
    <div className="p-6">
      <Card className="shadow-lg border rounded-lg p-4 bg-white">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-indigo-600" />
            Drought Forecast ({year})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            {/* Year Selection */}
            <Select value={year} onValueChange={(value) => setYear(value)}>
              <SelectTrigger className="w-40 border border-gray-300 rounded-md p-2">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 shadow-md rounded-md">
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            {/* Download Button */}
            <Button onClick={handleDownloadPDF} variant="outline" className="flex gap-2 border border-indigo-500 text-indigo-600 hover:bg-indigo-50">
              <Download className="h-5 w-5" /> Download Report
            </Button>
          </div>

          {/* Forecast Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecastData}>
              <XAxis dataKey="month" stroke="#4B5563" />
              <YAxis stroke="#4B5563" />
              <Tooltip />
              <Line type="monotone" dataKey="droughtRisk" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
