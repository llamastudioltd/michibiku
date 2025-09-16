import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils";

const actionVariants = cva(
  "flex flex-row items-center justify-center p-1.5 rounded-default",
  {
    variants: { 
      color: {
        "neutral": "bg-background-neutral text-foreground-neutral-weak",
        "cyan": "bg-background-cyan text-foreground-cyan",
        "indigo": "bg-background-indigo text-foreground-indigo",
        "lime": "bg-background-lime text-foreground-lime",
        "pink": "bg-background-pink text-foreground-pink",
        "purple": "bg-background-purple text-foreground-purple",
        "sky": "bg-background-sky text-foreground-sky",
        "violet": "bg-background-violet text-foreground-violet",
        "yellow": "bg-background-yellow text-foreground-yellow",
      },
      size: {
        "lg": "size-7",
        "xl": "size-8",
        "2xl": "size-9",
      } 
    },
    defaultVariants: {
      color: "neutral",
      size: "lg",
    },
  }
)

function Action({
  className,
  color,
  size,
  ...props
}) {
  return (
    <div data-slot="action" className={ cn(actionVariants({ color, size, className })) } { ...props } />
  );
}

export { Action };
