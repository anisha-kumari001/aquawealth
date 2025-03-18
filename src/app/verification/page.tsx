"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const verificationData = Array.from({ length: 12 }, (_, i) => ({
  id: `DOC${2000 + i}`,
  document: i % 2 === 0 ? "Aadhar Card" : "Driving License",
  submittedOn: `2024-${(i % 12) + 1}-05`,
  status: i % 3 === 0 ? "Verified" : i % 3 === 1 ? "Pending" : "Rejected",
}));

const DOCS_PER_PAGE = 5;

export default function VerificationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(verificationData.length / DOCS_PER_PAGE);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Verified":
        return <Badge className="bg-green-500 text-white">Verified</Badge>;
      case "Pending":
        return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
      case "Rejected":
        return <Badge className="bg-red-500 text-white">Rejected</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Unknown</Badge>;
    }
  };

  const startIndex = (currentPage - 1) * DOCS_PER_PAGE;
  const paginatedDocs = verificationData.slice(startIndex, startIndex + DOCS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Verification Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="p-3 text-left">Document ID</TableHead>
                <TableHead className="p-3 text-left">Document Name</TableHead>
                <TableHead className="p-3 text-left">Submitted On</TableHead>
                <TableHead className="p-3 text-left">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDocs.map((doc) => (
                <TableRow key={doc.id} className="border-b hover:bg-gray-50">
                  <TableCell className="p-3">{doc.id}</TableCell>
                  <TableCell className="p-3">{doc.document}</TableCell>
                  <TableCell className="p-3">{doc.submittedOn}</TableCell>
                  <TableCell className="p-3">{getStatusBadge(doc.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
              Previous
            </Button>
            <span className="text-gray-700 font-semibold">Page {currentPage} of {totalPages}</span>
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
