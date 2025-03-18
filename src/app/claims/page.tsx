"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const claimsData = [
  { id: "C1234", policy: "Health Insurance", amount: "$2,500", status: "Pending" },
  { id: "C5678", policy: "Car Insurance", amount: "$1,200", status: "Approved" },
  { id: "C9101", policy: "Home Insurance", amount: "$5,000", status: "Rejected" },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-500",
  Approved: "bg-green-500",
  Rejected: "bg-red-500",
};

export default function ClaimsPage() {
  return (
    <div className="p-6 space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Claims & Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end">
            <Link href="/verification">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                Go to Verification
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto mt-4">
            <Table className="w-full border border-gray-200 rounded-lg">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-left px-4 py-2">Claim ID</TableHead>
                  <TableHead className="text-left px-4 py-2">Policy</TableHead>
                  <TableHead className="text-left px-4 py-2">Amount</TableHead>
                  <TableHead className="text-left px-4 py-2">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claimsData.map((claim) => (
                  <TableRow key={claim.id} className="border-b">
                    <TableCell className="px-4 py-2">{claim.id}</TableCell>
                    <TableCell className="px-4 py-2">{claim.policy}</TableCell>
                    <TableCell className="px-4 py-2">{claim.amount}</TableCell>
                    <TableCell className="px-4 py-2">
                      <Badge className={`${statusColors[claim.status]} text-white px-3 py-1 rounded-full`}>
                        {claim.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
