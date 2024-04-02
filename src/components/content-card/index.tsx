import React from "react";
import { cn } from "@/lib/utils";

const ContentCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm w-full p-5 bg-white border-gray-300 text-zinc-950",
      className
    )}
    ref={ref}
    {...props}
  />
));

export default ContentCard;
