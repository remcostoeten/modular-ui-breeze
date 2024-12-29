import React from 'react';
import { Switch } from '@/shared/components/ui/switch';
import { useThemeStore } from '@/shared/stores/theme.store';
import { ThemeType } from '@/config/theme';

export function ThemeSettings() {
    const { currentTheme, setTheme } = useThemeStore();

    const handleThemeChange = (checked: boolean) => {
        setTheme(checked ? 'catppuccin' : 'dark');
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-text-primary">Theme Settings</h3>
                    <p className="text-sm text-text-secondary">
                        Choose between different theme options
                    </p>
                </div>
                <Switch
                    checked={currentTheme === 'catppuccin'}
                    onCheckedChange={handleThemeChange}
                    aria-label="Toggle Theme"
                />
            </div>
            <div className="text-sm text-text-secondary">
                <p className="mb-2">Current theme: {currentTheme}</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Dark: Modern dark theme with blue accents</li>
                    <li>Catppuccin: Soothing pastel theme</li>
                </ul>
            </div>
        </div>
    );
}