"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const insuranceSchema = z.object({
  coverageType: z.string().min(1, "Select a coverage type"),
  coverageAmount: z.number().min(1000, "Minimum ₹1000 required"),
  governmentId: z.string().min(10, "Invalid ID"),
  startDate: z.string(),
});

const InsuranceForm = () => {
  const { register, handleSubmit, control, formState: { errors }, watch } = useForm({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      coverageType: "",
      coverageAmount: 1000,
      governmentId: "",
      startDate: new Date().toISOString().split("T")[0],
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const endDate = new Date(data.startDate);
      endDate.setFullYear(endDate.getFullYear() + 1);
      
      await axios.post("/api/policies/add", {
        ...data,
        premiumAmount: data.coverageAmount / 30,
        endDate: endDate.toISOString().split("T")[0],
      });

      setSuccess(true);
    } catch (error) {
      console.error("Error purchasing policy", error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center">
        <h2 className="text-green-600 text-xl font-semibold">🎉 Insurance Purchased Successfully!</h2>
        <a href="/" className="text-blue-600 underline">Go to Dashboard</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="block">
        Coverage Type
        <select {...register("coverageType")} className="w-full p-2 border rounded">
          <option value="">Select Type</option>
          <option value="Health">Health</option>
          <option value="Life">Life</option>
          <option value="Vehicle">Vehicle</option>
        </select>
        {errors.coverageType && <p className="text-red-500">{errors.coverageType.message}</p>}
      </label>

      <label className="block">
        Coverage Amount (₹)
        <input
          type="number"
          {...register("coverageAmount", { valueAsNumber: true })}
          className="w-full p-2 border rounded"
          min={1000}
        />
        {errors.coverageAmount && <p className="text-red-500">{errors.coverageAmount.message}</p>}
      </label>

      <label className="block">
        Government ID
        <input type="text" {...register("governmentId")} className="w-full p-2 border rounded" />
        {errors.governmentId && <p className="text-red-500">{errors.governmentId.message}</p>}
      </label>

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

      <p className="text-gray-700">
        <strong>Premium Amount:</strong> ₹{(watch("coverageAmount", 1000)) / 30}
      </p>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {loading ? "Processing..." : "Buy Now"}
      </button>
    </form>
  );
};

export default InsuranceForm;
