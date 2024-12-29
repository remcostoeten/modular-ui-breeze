import React from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/shared/utils';
import { NavigationItem } from '@/shared/types/navigation';
import { useNavigation } from '@/features/navigation/hooks/use-navigation';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const location = useLocation();
  const { navigationItems } = useNavigation();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen w-64 transform border-r border-border bg-bg transition-transform',
        !isOpen && '-translate-x-full'
      )}
    >
      <nav className="h-full overflow-y-auto">
        <ul className="space-y-2 p-4">
          {navigationItems.map((item: NavigationItem) => (
            <li key={item.path}>
              <a
                href={item.path}
                className={cn(
                  'flex items-center rounded-lg p-2 text-text-secondary hover:bg-hover-bg',
                  location.pathname === item.path && 'bg-active-bg text-text-primary'
                )}
              >
                {item.icon && (
                  <span className="mr-3">{item.icon}</span>
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}