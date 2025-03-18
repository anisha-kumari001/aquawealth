"use client";

import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home, BarChart, DollarSign, FileText, Shield, CreditCard, Droplet,
  User, Settings, HelpCircle
} from "lucide-react";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { section: "Dashboard", items: [{ label: "Overview", icon: Home, path: "/" }] },
    {
      section: "Investments",
      items: [
        { label: "Browse Projects", icon: BarChart, path: "/browse-projects" },
        { label: "Risk Filter", icon: DollarSign, path: "/risk-filter" },
        { label: "My Investments", icon: FileText, path: "/investments" },
      ],
    },
    {
      section: "Insurance",
      items: [
        { label: "Buy Insurance", icon: Shield, path: "/buyinsurance" },
        { label: "My Policies", icon: FileText, path: "/mypolicies" },
        { label: "Claims & Verification", icon: CreditCard, path: "/claims" },
      ],
    },
    {
      section: "Emergency Fund",
      items: [
        { label: "Fund Status", icon: DollarSign, path: "/fundstatus" },
        { label: "Drought Forecast", icon: Droplet, path: "/droughtforecast" },
      ],
    },
    {
      section: "Micro-Loans",
      items: [
        { label: "Apply for Loan", icon: CreditCard, path: "/applyloan" },
        { label: "Loan Status", icon: BarChart, path: "/loanstatus" },
        { label: "Repayment History", icon: FileText, path: "/repaymenthistory" },
      ],
    },
    {
      section: "Water Credits",
      items: [
        { label: "Usage Insights", icon: Droplet, path: "/usageinsights" },
        { label: "Redeem Credits", icon: CreditCard, path: "/redeemcredits" },
      ],
    },
    {
      section: "Profile",
      items: [
        { label: "My Details", icon: User, path: "/mydetails" },
        { label: "Settings", icon: Settings, path: "/settings" },
        { label: "Help & Support", icon: HelpCircle, path: "/help" },
      ],
    },
  ];

  return (
    <div className={cn("pb-12 bg-gray-100 min-h-screen w-64", className)}>
      <div className="space-y-4 py-4">
        {menuItems.map((menu, index) => (
          <div key={index} className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-gray-700">
              {menu.section}
            </h2>
            <div className="space-y-1">
              {menu.items.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Button
                    key={idx}
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start hover:bg-gray-200 transition",
                      isActive && "bg-gray-300"
                    )}
                    onClick={() => router.push(item.path)}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

