import { useEffect } from "react";

type KeyCombo = {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
};

interface UseKeyboardShortcutProps {
  shortcut: KeyCombo | string;
  callback: () => void;
  enabled?: boolean;
}

/**
 * @module useKeyboardShortcut
 * @author Remco Stoeten
 * @description This hook allows you to define keyboard shortcuts and bind them to specific actions within your React application.
 *
 * @example
 * ```tsx
 * useKeyboardShortcut({
 *   shortcut: { key: 'd', ctrl: true }, // or just 'Escape'
 *   callback: () => setIsOpen(true),
 *   enabled: !isOpen,
 * });
 * ```
 */
export const useKeyboardShortcut = ({
  shortcut,
  callback,
  enabled = true,
}: UseKeyboardShortcutProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (typeof shortcut === "string") {
        if (event.key === shortcut) {
          callback();
        }
        return;
      }

      const { key, ctrl, alt, shift } = shortcut;
      const matchesKey = event.key.toLowerCase() === key.toLowerCase();
      const matchesCtrl = ctrl ? event.ctrlKey : !event.ctrlKey;
      const matchesAlt = alt ? event.altKey : !event.altKey;
      const matchesShift = shift ? event.shiftKey : !event.shiftKey;

      if (matchesKey && matchesCtrl && matchesAlt && matchesShift) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcut, callback, enabled]);
};
