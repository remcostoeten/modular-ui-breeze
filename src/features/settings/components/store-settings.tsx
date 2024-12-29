import React from 'react';
import { Switch } from '@/shared/components/ui/switch';
import { useFlags } from '@/shared/stores';

export function StoreSettings() {
    const { flags, setFeatureEnabled } = useFlags();

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-text-primary">Store Implementation</h3>
                    <p className="text-sm text-text-secondary">
                        Choose between Context API and Zustand for state management
                    </p>
                </div>
                <Switch
                    checked={flags.useZustand}
                    onCheckedChange={(checked) => setFeatureEnabled('useZustand', checked)}
                    aria-label="Toggle Zustand"
                />
            </div>
            <div className="text-sm text-text-secondary">
                <p className="mb-2">Current implementation: {flags.useZustand ? 'Zustand' : 'Context API'}</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Context API: Simple, built into React, good for small applications</li>
                    <li>Zustand: Lightweight, performant, better for larger applications</li>
                </ul>
            </div>
        </div>
    );
}
