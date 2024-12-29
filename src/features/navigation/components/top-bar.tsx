import React from 'react';
import { Menu } from 'lucide-react';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-bg border-b border-border z-50">
      <div className="flex items-center h-full px-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-hover-bg rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6 text-text-primary" />
        </button>
      </div>
    </header>
  );
}