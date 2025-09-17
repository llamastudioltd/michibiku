import * as React from "react";

import { VerticalNavigation, VerticalNavigationItem } from "@/components/vertical-navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaFaceSmile, FaServer } from 'react-icons/fa6';

import { cn } from "@/lib/utils";

function SidebarSection({ children, className, ...props }: React.ComponentProps<"div">) {
  <div data-slot="sidebar-section" className={ cn("flex flex-col gap-1", className) }>
    { children }
  </div>
}

function Sidebar({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="sidebar" className="flex flex-col items-stretch border-r last:border-r-0 border-r-(--color-stroke-neutral)" { ...props }>
      <div className="p-6 flex flex-col gap-6 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
        <div className="flex flex-row gap-3">
          <Avatar className="size-7 rounded-md">
            <AvatarFallback className="rounded-md bg-(--color-background-neutral-reverse)! font-sans font-medium font-features-sans text-2xs tracking-widest uppercase text-(--color-foreground-neutral-reverse)!">
              AC
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="p-6 grow flex flex-col gap-6 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
        <div className="grow flex flex-col gap-6">
          <VerticalNavigation>
            <VerticalNavigationItem />
          </VerticalNavigation>
          
          <VerticalNavigation className="grow">
            <VerticalNavigationItem color="pink">
              <FaServer className="size-full fill-current" />
            </VerticalNavigationItem>
            
            <VerticalNavigationItem color="fuchsia">
              <FaServer className="size-full fill-current" />
            </VerticalNavigationItem>
            
            <VerticalNavigationItem color="lime">
              <FaServer className="size-full fill-current" />
            </VerticalNavigationItem>
            
            <VerticalNavigationItem color="sky">
              <FaServer className="size-full fill-current" />
            </VerticalNavigationItem>
            
            <VerticalNavigationItem color="purple">
              <FaServer className="size-full fill-current" />
            </VerticalNavigationItem>
          </VerticalNavigation>
          
          <VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
          </VerticalNavigation>
          
          <VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
          </VerticalNavigation>
          
          <VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
            <VerticalNavigation>
              <VerticalNavigationItem />
            </VerticalNavigation>
          </VerticalNavigation>
        </div>
        <div className="flex flex-row gap-3">
          <Avatar className="size-7 rounded-md">
            <AvatarImage alt="JB" src="/images/jason_burrell.jpg" />
          </Avatar>
        </div>
      </div>
    </div>
  )
}
    
export { Sidebar, SidebarSection }
