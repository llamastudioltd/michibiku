import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils";

const navbarItemVariants = cva(
  "size-7 flex flex-row items-center justify-center p-1.5 rounded-md",
  {
    variants: { 
      color: {
        "neutral": "bg-(--color-background-neutral) text-(--color-foreground-neutral-weak)",
        "cyan": "bg-(--color-background-cyan) text-(--color-foreground-cyan)",
        "fuchsia": "bg-(--color-background-fuchsia) text-(--color-foreground-fuchsia)",
        "lime": "bg-(--color-background-lime) text-(--color-foreground-lime)",
        "pink": "bg-(--color-background-pink) text-(--color-foreground-pink)",
        "purple": "bg-(--color-background-purple) text-(--color-foreground-purple)",
        "sky": "bg-(--color-background-sky) text-(--color-foreground-sky)",
        "violet": "bg-(--color-background-violet) text-(--color-foreground-violet)",
        "yellow": "bg-(--color-background-yellow) text-(--color-foreground-yellow)",
      }
    },
    defaultVariants: {
      color: "neutral"
    },
  }
)

function NavbarItem({ color, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="navbar-item" className={ cn(navbarItemVariants({ color })) } { ...props } />
  );
}

export { NavbarItem };
