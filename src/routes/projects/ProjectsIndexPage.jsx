import { NavbarItem } from "@/components/navbar-item"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

import { FaFaceSmile, FaServer } from 'react-icons/fa6';

function ProjectsIndexPage() {
  return (
    <div className="min-h-screen flex flex-row items-stretch bg-(--color-background-default)">
      <div className="flex flex-col items-stretch bg-(--color-background-default) border-r last:border-r-0 border-r-(--color-stroke-neutral)">
        <div className="p-6 flex flex-col gap-6 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="flex flex-row gap-3">
            <Avatar className="size-7 rounded-md">
              <AvatarFallback className="rounded-md bg-(--color-background-neutral-reverse) font-sans font-medium font-features-sans text-2xs tracking-widest uppercase text-(--color-foreground-neutral-reverse)">
                AC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-6 grow flex flex-col gap-6 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="grow flex flex-col gap-6">
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
            </ul>
            <ul className="grow flex flex-col gap-1">
              <li className="">
                <div aria-selected="true" className="size-7 flex flex-row items-center justify-center p-1.5 rounded-md bg-(--color-background-default) hover:bg-(--color-background-pink) aria-selected:bg-(--color-background-pink-strong) aria-selected:hover:bg-(--color-background-pink-strong) text-(--color-foreground-pink) hover:text-(--color-foreground-pink-strong)">
                  <FaServer className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded-md bg-(--color-background-default) hover:bg-(--color-background-fuchsia) aria-selected:bg-(--color-background-fuchsia-strong) aria-selected:hover:bg-(--color-background-fuchsia-strong) text-(--color-foreground-fuchsia) hover:text-(--color-foreground-fuchsia-strong)">
                < FaServer className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded-md bg-(--color-background-default) hover:bg-(--color-background-lime) aria-selected:bg-(--color-background-lime-strong) aria-selected:hover:bg-(--color-background-lime-strong) text-(--color-foreground-lime) hover:text-(--color-foreground-lime-strong)">
                  <FaServer className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded-md bg-(--color-background-default) hover:bg-(--color-background-sky) aria-selected:bg-(--color-background-sky-strong) aria-selected:hover:bg-(--color-background-sky-strong) text-(--color-foreground-sky) hover:text-(--color-foreground-sky-strong)">
                  <FaServer className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded-md bg-(--color-background-default) hover:bg-(--color-background-purple) aria-selected:bg-(--color-background-purple-strong) aria-selected:hover:bg-(--color-background-purple-strong) text-(--color-foreground-purple) hover:text-(--color-foreground-purple-strong)">
                  <FaServer className="size-full fill-current" />
                </div>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
              <li className="">
                <div className="size-7 flex flex-row items-center justify-center p-1.5 rounded bg-(--color-background-default) hover:bg-(--color-background-neutral) aria-selected:bg-(--color-background-neutral) aria-selected:hover:bg-(--color-background-neutral) text-(--color-foreground-neutral-weak) hover:text-(--color-foreground-neutral)">
                  <FaFaceSmile className="size-full fill-current" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-3">
            <Avatar className="size-7 rounded-md">
              <AvatarImage alt="JB" src="/images/jason_burrell.jpg" />
            </Avatar>
          </div>
        </div>
      </div>
      <div className="grow flex flex-col items-stretch bg-(--color-background-default) border-r last:border-r-0 border-r-(--color-stroke-neutral)">
        <div className="p-6 flex flex-row items-center gap-6 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="flex flex-row items-center gap-3">
            <NavbarItem>
              <FaFaceSmile className="size-full fill-current" />
            </NavbarItem>
            
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-sans font-features-sans font-semibold text-sm text-(--color-foreground-neutral)">Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-12 bg-(--color-background-default) border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="p-6 flex flex-col items-stretch gap-6">
            { /* SECTION HEADER */ }
            <header className="flex flex-col items-stretch gap-6">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex flex-row items-center justify-start gap-3">
                  <h1 className="font-sans-display font-features-sans-display font-semibold text-xl text-(--color-foreground-neutral)">Lorem ipsum dolor sit amet</h1>
                </div>
                
                <div className="flex flex-row items-center justify-start gap-6">
                  <ul className="">
                    <li className="">
                      <Button className="h-7 gap-2 px-2 py-1 rounded-md bg-(--color-background-ppg-reverse) hover:bg-(--color-background-ppg-reverse-strong) font-sans font-features-sans font-medium text-sm text-(--color-foreground-ppg-reverse) shadow-sm">
                        New project
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-6">
                <p className="font-sans font-features-sans font-normal text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
              </div>  
            </header>
            { /* SECTION HEADER */ }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsIndexPage