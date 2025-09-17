import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority"

import { FaFaceSmile } from 'react-icons/fa6';

import { cn } from "@/lib/utils";

const verticalNavigationItemIconVariants = cva(
  "size-7 flex flex-row items-center justify-center p-1.5 rounded-md",
  {
    variants: { 
      color: {
        "neutral": "hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral-strong)",
        "cyan": "hover:bg-(--color-background-cyan) aria-selected:bg-(--color-background-cyan) aria-selected:hover:bg-(--color-background-cyan) text-(--color-foreground-cyan) hover:text-(--color-foreground-cyan-strong)",
        "fuchsia": "hover:bg-(--color-background-fuchsia) aria-selected:bg-(--color-background-fuchsia) aria-selected:hover:bg-(--color-background-fuchsia) text-(--color-foreground-fuchsia) hover:text-(--color-foreground-fuchsia-strong)",
        "lime": "hover:bg-(--color-background-lime) aria-selected:bg-(--color-background-lime) aria-selected:hover:bg-(--color-background-lime) text-(--color-foreground-lime) hover:text-(--color-foreground-lime-strong)",
        "pink": "hover:bg-(--color-background-pink) aria-selected:bg-(--color-background-pink) aria-selected:hover:bg-(--color-background-pink) text-(--color-foreground-pink) hover:text-(--color-foreground-pink-strong)",
        "purple": "hover:bg-(--color-background-purple) aria-selected:bg-(--color-background-purple) aria-selected:hover:bg-(--color-background-purple) text-(--color-foreground-purple) hover:text-(--color-foreground-purple-strong)",
        "sky": "hover:bg-(--color-background-sky) aria-selected:bg-(--color-background-sky) aria-selected:hover:bg-(--color-background-sky) text-(--color-foreground-sky) hover:text-(--color-foreground-sky-strong)",
        "violet": "hover:bg-(--color-background-violet) aria-selected:bg-(--color-background-violet) aria-selected:hover:bg-(--color-background-violet) text-(--color-foreground-violet) hover:text-(--color-foreground-violet-strong)",
        "yellow": "hover:bg-(--color-background-yellow) aria-selected:bg-(--color-background-yellow) aria-selected:hover:bg-(--color-background-yellow) text-(--color-foreground-yellow) hover:text-(--color-foreground-yellow-strong)",
      }
    },
    defaultVariants: {
      color: "neutral"
    },
  }
)

function VerticalNavigation({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul data-slot="vertical-navigation" className={ cn("flex flex-col gap-1", className) } { ...props } />
  )
}

function VerticalNavigationItem({ children, color, label, ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="vertical-navigation-item" className="group relative" { ...props }>
      <div className={ cn(verticalNavigationItemIconVariants({ color })) } { ...props } >
        { children ?? <FaFaceSmile className="size-full fill-current" /> }
      </div>
      <div className="hidden group-hover:block absolute left-full top-[50%] transform-[translateY(-50%)_translateX(0.5rem)] z-99 px-2 py-1 bg-(--color-background-neutral-reverse)/50 text-(--color-foreground-neutral-reverse) whitespace-nowrap rounded-md backdrop-blur-sm">
        <span className="font-sans font-features-sans font-medium text-sm">{ label ?? "Down the rabbit hole" }</span>
      </div>
    </li>
  )
}
    
export { VerticalNavigation, VerticalNavigationItem }