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
      <DropdownMenuTrigger className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#2A2A2A] transition-colors">
        <span className="text-sm text-white">{currentWorkspace}</span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="px-2 py-1.5">
          <input
            type="text"
            placeholder="Search organization..."
            className="w-full px-2 py-1 text-sm bg-transparent border border-gray-800 rounded focus:outline-none focus:border-gray-700"
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          remcostoeten's Org
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="flex items-center gap-2">
            <span className="text-primary">+</span>
            New organization
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};