import { motion } from 'framer-motion';
import { navigationItems, bottomNavigationItems } from '../data/navigation';
import { SidebarItem } from './sidebar-item';
import { UserMenu } from './user-menu';
import { useSidebarStore } from '../stores/use-sidebar-store';
import { themeConfig } from '@/config/theme';

export const Sidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebarStore();

  return (
    <motion.div
      initial={false}
      animate={{ 
        width: isExpanded ? 240 : 64
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="fixed h-screen bg-[#1C1C1C] border-r border-gray-800 flex flex-col py-4 transition-all duration-200 z-50"
    >
      <div className="px-3 mb-8">
        <div className={`h-8 w-8 bg-[${themeConfig.colors.primary}] rounded flex items-center justify-center`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 12L3 22L13 12L3 2L22 12Z"
              fill="currentColor"
              className="text-black"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 space-y-1 px-2">
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      <div className="mt-4 space-y-1 px-2">
        {bottomNavigationItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      <UserMenu isExpanded={isExpanded} />
    </motion.div>
  );
};