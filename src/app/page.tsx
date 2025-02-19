import { Metadata } from "next";
import { PlusCircle } from "lucide-react";
import "../../styles/globals.css";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


import { InvestmentCard } from "../components/investment-card";
import { Menu } from "../components/menu";
import { MarketInsightsPlaceholder } from "../components/market-insights-placeholder";
import { Sidebar } from "../components/sidebar";
import { 
  featuredInvestments, 
  personalizedInvestments, 
  performanceMetrics, 
  clientTestimonials, 
  investmentProcess 
} from "../data/WaterInvestmentAlbum";

export const metadata: Metadata = {
  title: "AquaWealth Investment Dashboard",
  description: "Invest smartly with AquaWealth",
};

export default function InvestmentDashboard() {
  return (
    <>
      <Menu />
      <div className="border-t bg-background">
        <div className="grid lg:grid-cols-5">
          {/* Sidebar - Only visible on large screens */}
          <div className="hidden lg:block lg:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              <Tabs defaultValue="investments" className="h-full space-y-6">
                {/* Tabs Navigation */}
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="investments">Investment Plans</TabsTrigger>
                    <TabsTrigger value="market-insights">Market Insights</TabsTrigger>
                    <TabsTrigger value="live-prices" disabled>
                      Live Prices
                    </TabsTrigger>
                  </TabsList>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Investment
                  </Button>
                </div>

                {/* Investment Plans Tab Content */}
                <TabsContent value="investments" className="border-none p-0 outline-none">
                  <div className="space-y-6">
                    {/* Featured Investment Solutions */}
                    <Section title="Featured Investments" description="Explore top-performing investment opportunities." data={featuredInvestments} />

                    {/* Personalized Recommendations */}
                    <Section title="Personalized For You" description="Tailored investment options based on your preferences." data={personalizedInvestments} />

                    {/* Performance Metrics */}
                    <Section title="Performance Metrics" description="Track key performance indicators of your investments." data={performanceMetrics} />

                    {/* Client Testimonials */}
                    <Section title="Client Testimonials" description="Hear what our investors have to say." data={clientTestimonials} />

                    {/* Investment Process */}
                    <Section title="How It Works" description="Understand our investment strategies and processes." data={investmentProcess} />
                  </div>
                </TabsContent>

                {/* Market Insights Tab Content */}
                <TabsContent value="market-insights" className="h-full flex-col border-none p-0 data-[state=active]:flex">
                  <h2 className="text-2xl font-semibold tracking-tight">Latest Market Trends</h2>
                  <p className="text-sm text-muted-foreground">Stay updated with financial insights and expert analysis.</p>
                  <Separator className="my-4" />
                  <MarketInsightsPlaceholder />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Reusable Section Component */
interface SectionProps {
  title: string;
  description: string;
  data: any[];
}

function Section({ title, description, data }: SectionProps) {
  if (!data || data.length === 0) {
    return null; // Hide the section if there's no data
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Separator className="my-4" />
      <ScrollArea>
        <div className="flex space-x-4 pb-4">
          {data.map((investment, index) => (
            <InvestmentCard
              key={investment.name || index} // Use index as fallback for key
              investment={investment}
              className="w-[200px]"
              aspectRatio="square"
              width={200}
              height={200}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}