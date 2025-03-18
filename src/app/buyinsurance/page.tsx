"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BuyInsurancePage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    insuranceType: "Health",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Insurance purchased for ${formData.name}!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md bg-white shadow-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-800">Buy Insurance</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" placeholder="Enter your name" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" placeholder="Enter your age" required onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="insuranceType">Insurance Type</Label>
              <select
                id="insuranceType"
                name="insuranceType"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="Health">Health Insurance</option>
                <option value="Life">Life Insurance</option>
                <option value="Vehicle">Vehicle Insurance</option>
              </select>
            </div>
            <Button type="submit" className="w-full">Buy Now</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
