import { Bell, ChevronDown, HelpCircle } from "lucide-react";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { TopBarIcons } from "./top-bar-icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export const TopBar = () => {
  return (
    <div className="h-14 border-b border-gray-800 bg-[#1C1C1C] flex items-center px-4 justify-between">
      <div className="flex items-center gap-4">
        <WorkspaceSwitcher />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Project</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/database">Database</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="text-gray-400 border-gray-800 hover:bg-[#2A2A2A] hover:text-white">
          Feedback
        </Button>
        <TopBarIcons />
      </div>
    </div>
  );
};