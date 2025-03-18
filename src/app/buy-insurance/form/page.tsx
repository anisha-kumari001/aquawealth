"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const insuranceSchema = z.object({
  userName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  governmentId: z.string().min(10, "Invalid ID"),
  coverageType: z.string().min(1, "Select a coverage type"),
  coverageAmount: z.coerce.number().min(100000, "Minimum ₹1 Lakh required"),
  startDate: z.string(),
});

export default function BuyInsurancePage() {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      userName: "",
      email: "",
      governmentId: "",
      coverageType: "",
      coverageAmount: 100000,
      startDate: new Date().toISOString().split("T")[0],
    },
  });

  const [submitted, setSubmitted] = useState(false);
  
  const coverageAmount = watch("coverageAmount", 100000);
  const startDate = watch("startDate", new Date().toISOString().split("T")[0]);
  const premiumAmount = coverageAmount / 30;

  const endDate = (() => {
    const date = new Date(startDate);
    date.setFullYear(date.getFullYear() + 1);
    return date.toISOString().split("T")[0];
  })();

  const onSubmit = (data: any) => {
    console.log("Form Data:", { ...data, premiumAmount, endDate });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-green-600 text-2xl font-semibold">🎉 Insurance Purchased Successfully!</h2>
        <p className="text-gray-700">Your policy is now active.</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>End Date:</strong> {endDate}</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy Another Insurance
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Buy Insurance</h1>
      <p className="text-gray-600 mb-6">Secure your future with our insurance plans.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 p-6 border rounded shadow">
        {/* User Name */}
        <label className="block">
          Full Name
          <input type="text" {...register("userName")} className="w-full p-2 border rounded" />
          {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
        </label>

        {/* Email */}
        <label className="block">
          Email
          <input type="email" {...register("email")} className="w-full p-2 border rounded" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </label>

        {/* Government ID */}
        <label className="block">
          Government ID
          <input type="text" {...register("governmentId")} className="w-full p-2 border rounded" />
          {errors.governmentId && <p className="text-red-500">{errors.governmentId.message}</p>}
        </label>

        {/* Coverage Type */}
        <label className="block">
          Coverage Type
          <select {...register("coverageType")} className="w-full p-2 border rounded">
            <option value="">Select Type</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
          {errors.coverageType && <p className="text-red-500">{errors.coverageType.message}</p>}
        </label>

        {/* Coverage Amount */}
        <label className="block">
          Coverage Amount (₹)
          <select {...register("coverageAmount", { valueAsNumber: true })} className="w-full p-2 border rounded">
            {[1,2,3,4,5,6,7,8,9,10].map((lakh) => (
              <option key={lakh} value={lakh * 100000}>{`₹${lakh} Lakh`}</option>
            ))}
          </select>
          {errors.coverageAmount && <p className="text-red-500">{errors.coverageAmount.message}</p>}
        </label>

        {/* Start Date */}
        <label className="block">
          Start Date
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <input type="date" {...field} className="w-full p-2 border rounded" />
            )}
          />
        </label>

        {/* Auto-calculated Fields */}
        <p className="text-gray-700"><strong>Premium Amount:</strong> ₹{premiumAmount.toFixed(2)}</p>
        <p className="text-gray-700"><strong>End Date:</strong> {endDate}</p>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Buy Now
        </button>
      </form>
    </div>
  );
}
