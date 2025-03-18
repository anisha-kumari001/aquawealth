"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home, BarChart, DollarSign, FileText, Shield, CreditCard, Droplet,
  User, Settings, HelpCircle
} from "lucide-react";
import { useMemo } from "react";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  const menuItems = useMemo(() => [
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
        { label: "Buy Insurance", icon: Shield, path: "/buy-insurance" },
        { label: "My Policies", icon: FileText, path: "/my-policies" },
        { label: "Claims & Verification", icon: CreditCard, path: "/claims" },
      ],
    },
    {
      section: "Emergency Fund",
      items: [
        { label: "Fund Status", icon: DollarSign, path: "/fund-status" },
        { label: "Drought Forecast", icon: Droplet, path: "/drought-forecast" },
      ],
    },
    {
      section: "Micro-Loans",
      items: [
        { label: "Apply for Loan", icon: CreditCard, path: "/apply-loan" },
        { label: "Loan Status", icon: BarChart, path: "/loan-status" },
        { label: "Repayment History", icon: FileText, path: "/repayment-history" },
      ],
    },
    {
      section: "Profile",
      items: [
        { label: "My Details", icon: User, path: "/my-details" },
        { label: "Settings", icon: Settings, path: "/settings" },
        { label: "Help & Support", icon: HelpCircle, path: "/help" },
      ],
    },
  ], []);

  return (
    <aside className={cn("bg-gray-900 text-white min-h-screen w-64 p-4", className)}>
      <nav className="space-y-4">
        {menuItems.map((menu, index) => (
          <div key={index} className="space-y-2">
            <h2 className="px-2 text-sm font-semibold text-gray-400">{menu.section}</h2>
            <ul className="space-y-1">
              {menu.items.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <li key={idx}>
                    <Link href={item.path} className="block">
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full flex items-center gap-3 justify-start px-3 py-2 rounded-lg transition",
                          isActive ? "bg-gray-700 text-white" : "hover:bg-gray-800 text-gray-300"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
