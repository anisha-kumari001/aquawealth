import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  BarChart,
  DollarSign,
  FileText,
  Shield,
  CreditCard,
  Droplet,
  User,
  Settings,
  HelpCircle,
  Music,
} from "lucide-react";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {/* Dashboard Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Home className="mr-2 h-5 w-5" />
              Overview
            </Button>
          </div>
        </div>

        {/* Investments Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Investments</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="mr-2 h-5 w-5" />
              Browse Projects
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <DollarSign className="mr-2 h-5 w-5" />
              Risk Filter
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-5 w-5" />
              My Investments
            </Button>
          </div>
        </div>

        {/* Insurance Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Insurance</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="mr-2 h-5 w-5" />
              Buy Insurance
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-5 w-5" />
              My Policies
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-5 w-5" />
              Claims & Verification
            </Button>
          </div>
        </div>

        {/* Emergency Fund Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Emergency Fund</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <DollarSign className="mr-2 h-5 w-5" />
              Fund Status
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Droplet className="mr-2 h-5 w-5" />
              Drought Forecast
            </Button>
          </div>
        </div>

        {/* Micro-Loans Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Micro-Loans</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-5 w-5" />
              Apply for Loan
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="mr-2 h-5 w-5" />
              Loan Status
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-5 w-5" />
              Repayment History
            </Button>
          </div>
        </div>

        {/* Water Credits Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Water Credits</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Droplet className="mr-2 h-5 w-5" />
              Usage Insights
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-5 w-5" />
              Redeem Credits
            </Button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Profile</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-5 w-5" />
              My Details
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <HelpCircle className="mr-2 h-5 w-5" />
              Help & Support
            </Button>
          </div>
        </div>

        
      </div>
    </div>
  );
}
