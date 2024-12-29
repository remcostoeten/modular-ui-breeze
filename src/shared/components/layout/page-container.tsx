import React from 'react';

interface PageContainerProps {
    title?: string;
    children: React.ReactNode;
}

export function PageContainer({ title, children }: PageContainerProps) {
    return (
        <div className="p-6 pt-24">
            {title && (
                <h1 className="text-2xl font-bold text-text-primary mb-6">{title}</h1>
            )}
            {children}
        </div>
    );
}