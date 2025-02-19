import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { featuredInvestments, personalizedInvestments, performanceMetrics, clientTestimonials, investmentProcess } from "@/data/WaterInvestmentAlbum";
interface InvestmentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  investment: {
    name: string;
    category: string;
    cover: string;
    description: string;
  };
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function InvestmentCard({
  investment,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: InvestmentCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={investment.cover}
              alt={investment.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Portfolio</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Invest Options</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Investment
              </ContextMenuItem>
              <ContextMenuSeparator />
              {[...featuredInvestments, ...personalizedInvestments].map((inv) => (
                <ContextMenuItem key={inv.name}>{inv.name}</ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{investment.name}</h3>
        <p className="text-xs text-muted-foreground">{investment.category}</p>
        <p className="text-xs text-muted-foreground">{investment.description}</p>
      </div>
    </div>
  );
}