import * as React from "react";
import { useEffect, useRef } from "react";

interface FocusTrapProps {
    children: React.ReactNode;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({ children }) => {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const focusableElements = root.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        };

        root.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => {
            root.removeEventListener('keydown', handleTabKey);
        };
    }, []);

    return <div ref={rootRef}>{children}</div>;
};