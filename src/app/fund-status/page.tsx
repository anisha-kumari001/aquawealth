"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const transactions = [
  { id: 1, date: "2024-03-01", amount: "$500", type: "Deposit" },
  { id: 2, date: "2024-03-05", amount: "$200", type: "Withdrawal" },
  { id: 3, date: "2024-03-10", amount: "$100", type: "Deposit" },
];

const fundData = [
  { date: "Mar 1", balance: 500 },
  { date: "Mar 5", balance: 700 },
  { date: "Mar 10", balance: 600 },
];

export default function FundStatusPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Fund Status</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">$600</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Last Transaction</CardTitle>
          </CardHeader>
          <CardContent className="text-lg">Withdrawal of $200</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
          </CardHeader>
          <CardContent className="text-lg">1 Request</CardContent>
        </Card>
      </div>

      {/* Fund Chart */}
      <div className="w-full h-64 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Fund Balance Over Time</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fundData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <Input
          placeholder="Search transactions..."
          className="mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions
              .filter((tx) => tx.date.includes(search) || tx.amount.includes(search))
              .map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Fund Request Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Request Funds</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Funds</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="Enter Amount" type="number" />
            <Button>Submit Request</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
