import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MarketInsightsPlaceholder() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-10 w-10 text-muted-foreground"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v4M5.636 5.636l2.828 2.828M2 12h4m12-7.364l-2.828 2.828M22 12h-4M5.636 18.364l2.828-2.828M12 22v-4m6.364-1.636l-2.828-2.828" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">No Market Insights Available</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Stay updated with the latest market trends. Add an insight below.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="relative">
              Add Insight
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Market Insight</DialogTitle>
              <DialogDescription>
                Provide a brief summary of the latest market trends.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="insight">Market Insight</Label>
                <Input id="insight" placeholder="Enter market trend details..." />
              </div>
            </div>
            <DialogFooter>
              <Button>Save Insight</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
