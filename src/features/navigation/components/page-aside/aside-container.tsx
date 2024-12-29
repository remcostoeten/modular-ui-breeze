import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from '@tanstack/react-router';
import { AuthAside } from './auth-aside';
import { StorageAside } from './storage-aside';

const pageAsideMap = {
  '/auth': AuthAside,
  '/storage': StorageAside,
} as const;

interface AsideContainerProps {
  children: React.ReactNode
  className?: string
}

export function AsideContainer({ children, className }: AsideContainerProps) {
  return (
    <aside
      className={cn(
        "h-screen bg-bg border-l border-border",
        className
      )}
    >
      {children}
    </aside>
  )
}