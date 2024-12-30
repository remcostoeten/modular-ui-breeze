import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWorkspaceStore } from "../stores/use-workspace-store";

export const WorkspaceSwitcher = () => {
  const { currentWorkspace } = useWorkspaceStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A2A2A] hover:bg-[#313131] transition-colors border border-gray-800">
        <span className="text-sm font-medium text-white">{currentWorkspace}</span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#1C1C1C] border-gray-800">
        <div className="px-2 py-1.5">
          <input
            type="text"
            placeholder="Search organization..."
            className="w-full px-2 py-1 text-sm bg-[#2A2A2A] border border-gray-800 rounded focus:outline-none focus:ring-1 focus:ring-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="text-gray-300 hover:bg-[#2A2A2A] focus:bg-[#2A2A2A] cursor-pointer">
          remcostoeten's Org
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="text-gray-300 hover:bg-[#2A2A2A] focus:bg-[#2A2A2A] cursor-pointer">
          <span className="flex items-center gap-2">
            <span className="text-primary">+</span>
            New organization
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};