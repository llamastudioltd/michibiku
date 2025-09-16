import { Action } from "@/components/action"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

import { FaChevronRight } from 'react-icons/fa6';
import { FaFaceSmile } from 'react-icons/fa6';

function ProjectsIndexPage() {
  return (
    <div className="min-h-screen flex flex-row items-stretch bg-background-default">
      <div className="flex flex-col items-stretch bg-background-default border-r last:border-r-0 border-r-stroke-neutral">
        <div className="p-6 flex flex-col gap-6 border-b last:border-b-0 border-b-stroke-neutral">
          <div className="flex flex-row gap-3">
            <Avatar className="size-7 rounded-default!">
              <AvatarFallback className="rounded-default! bg-background-neutral-reverse! font-heading-6 text-foreground-neutral-reverse">
                AC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-6 grow flex flex-col gap-6 border-b last:border-b-0 border-b-stroke-neutral">
          <div className="grow flex flex-col gap-6">
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
            </ul>
            <ul className="grow flex flex-col gap-1">
              <li className="">
                <div className="size-7 bg-background-pink rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-fuchsia rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-lime rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-sky rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-purple rounded-default" />
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
              <li className="">
                <div className="size-7 bg-background-neutral rounded-default" />
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-3">
            <Avatar className="size-7 rounded-default!">
              <AvatarImage alt="JB" src="/images/jason_burrell.jpg" />
            </Avatar>
          </div>
        </div>
      </div>
      <div className="grow flex flex-col items-stretch bg-background-default border-r last:border-r-0 border-r-stroke-neutral">
        <div className="p-6 flex flex-row items-center gap-6 border-b last:border-b-0 border-b-stroke-neutral">
          <div className="flex flex-row items-center gap-3">
            <Action>
              <FaFaceSmile className="size-full fill-current" />
            </Action>
            
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-body-2-strong! text-foreground-neutral">Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-12bg-background-default border-b last:border-b-0 border-b-stroke-neutral">
          <div className="p-6 flex flex-col items-stretch gap-6">
            { /* SECTION HEADER */ }
            <header className="flex flex-col items-stretch gap-6">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex flex-row items-center justify-start gap-3">
                  <h1 className="font-heading-2 text-foreground-neutral">Lorem ipsum dolor sit amet</h1>
                </div>
                
                <div className="flex flex-row items-center justify-start gap-6">
                  <ul className="">
                    <li className="">
                      <Button className="h-7 gap-2 px-2 py-1 rounded-default! bg-background-ppg-reverse! hover:bg-background-ppg-reverse-strong! font-body-2-strong! text-foreground-ppg-reverse! shadow-sm">
                        New project
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-stretch gap-6">
                <p className="font-body-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.</p>
              </div>  
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsIndexPage