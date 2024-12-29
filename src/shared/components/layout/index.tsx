import React, { useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Sidebar } from '@/features/navigation/components/sidebar';
import { TopBar } from '@/features/navigation/components/top-bar';

export function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-bg-darker">
            <TopBar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <Sidebar isOpen={isSidebarOpen} />
            <main className={`transition-all duration-200 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
                <Outlet />
            </main>
        </div>
    );
}