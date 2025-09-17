import { NavbarItem } from "@/components/navbar-item"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"


import { FaFaceSmile } from 'react-icons/fa6';

function ProjectsIndexPage() {
  return (
    <div className="min-h-screen flex flex-row items-stretch">
      <Sidebar/>
      
      <div className="grow flex flex-col items-stretch border-r last:border-r-0 border-r-(--color-stroke-neutral)">
        <div className="flex flex-col items-stretch gap-12 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="p-6 flex flex-row items-center gap-6">
            <div className="flex flex-row items-center gap-3">
              <NavbarItem>
                <FaFaceSmile className="size-full fill-current" />
              </NavbarItem>
              
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-sans font-features-sans font-semibold text-sm text-(--color-foreground-neutral)!">Projects</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-12 border-b last:border-b-0 border-b-(--color-stroke-neutral)">
          <div className="p-6 flex flex-col items-stretch gap-6">
            { /* SECTION HEADER */ }
            <header className="flex flex-col items-stretch gap-6">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex flex-row items-center justify-start gap-3">
                  <h1 className="font-sans-display font-features-sans-display font-semibold text-xl">Lorem ipsum dolor sit amet</h1>
                </div>
                
                <div className="flex flex-row items-center justify-start gap-6">
                  <ul className="">
                    <li className="">
                      <Button className="h-7 gap-2 px-2 py-1 rounded-md bg-(--color-background-ppg-reverse)! hover:bg-(--color-background-ppg-reverse-strong)! font-sans font-features-sans font-medium text-sm text-(--color-foreground-ppg-reverse)! shadow-lg!">
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