"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Sample policy data (More data added for pagination)
const policies = Array.from({ length: 20 }, (_, i) => ({
  id: `POL${100000 + i}`,
  type: i % 2 === 0 ? "Premium" : "Basic",
  amount: `₹${(i + 1) * 50000}`,
  premium: `₹${(i + 1) * 3000}`,
  startDate: `2024-${(i % 12) + 1}-10`,
  endDate: `2025-${(i % 12) + 1}-10`,
  status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Expired" : "Pending",
}));

const POLICIES_PER_PAGE = 5;

export default function MyPolicies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(policies.length / POLICIES_PER_PAGE);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500 text-white">Active</Badge>;
      case "Expired":
        return <Badge className="bg-red-500 text-white">Expired</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Unknown</Badge>;
    }
  };

  const startIndex = (currentPage - 1) * POLICIES_PER_PAGE;
  const paginatedPolicies = policies.slice(startIndex, startIndex + POLICIES_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">My Insurance Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="p-3 text-left">Policy ID</TableHead>
                <TableHead className="p-3 text-left">Type</TableHead>
                <TableHead className="p-3 text-left">Coverage Amount</TableHead>
                <TableHead className="p-3 text-left">Premium</TableHead>
                <TableHead className="p-3 text-left">Start Date</TableHead>
                <TableHead className="p-3 text-left">End Date</TableHead>
                <TableHead className="p-3 text-left">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedPolicies.map((policy) => (
                <TableRow key={policy.id} className="border-b hover:bg-gray-50">
                  <TableCell className="p-3">{policy.id}</TableCell>
                  <TableCell className="p-3">{policy.type}</TableCell>
                  <TableCell className="p-3">{policy.amount}</TableCell>
                  <TableCell className="p-3">{policy.premium}</TableCell>
                  <TableCell className="p-3">{policy.startDate}</TableCell>
                  <TableCell className="p-3">{policy.endDate}</TableCell>
                  <TableCell className="p-3">{getStatusBadge(policy.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <Button 
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </Button>
            <span className="text-gray-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <Button 
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
