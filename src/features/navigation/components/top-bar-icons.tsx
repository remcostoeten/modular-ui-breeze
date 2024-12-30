import { Bell, HelpCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const TopBarIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded hover:bg-[#2A2A2A] transition-colors">
          <HelpCircle className="h-5 w-5 text-gray-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-[#1C1C1C] border-gray-800">
          <DropdownMenuItem className="text-gray-300 hover:bg-[#2A2A2A] focus:bg-[#2A2A2A]">Documentation</DropdownMenuItem>
          <DropdownMenuItem className="text-gray-300 hover:bg-[#2A2A2A] focus:bg-[#2A2A2A]">Support</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded hover:bg-[#2A2A2A] transition-colors">
          <Bell className="h-5 w-5 text-gray-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 bg-[#1C1C1C] border-gray-800">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
            <h2 className="font-medium text-white">Notifications</h2>
            <div className="flex gap-4 text-sm">
              <button className="text-white hover:text-gray-300">Inbox</button>
              <button className="text-gray-400 hover:text-gray-300">Archived</button>
            </div>
          </div>
          <div className="py-8 text-center text-sm text-gray-400">
            <div className="mb-2">All caught up</div>
            <div>You will be notified here for any notices on your organizations and projects</div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};