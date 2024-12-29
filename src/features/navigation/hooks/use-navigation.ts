import { NavigationItem } from "@/shared/types/navigation";

const defaultNavigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
  },
];

export function useNavigation() {
  return {
    navigationItems: defaultNavigationItems,
  };
}
