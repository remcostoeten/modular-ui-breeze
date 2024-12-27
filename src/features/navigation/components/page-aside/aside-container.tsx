import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { AuthAside } from './auth-aside';
import { StorageAside } from './storage-aside';

const pageAsideMap = {
  '/auth': AuthAside,
  '/storage': StorageAside,
} as const;

export const AsideContainer = () => {
  const location = useLocation();
  const AsideComponent = pageAsideMap[location.pathname as keyof typeof pageAsideMap];

  if (!AsideComponent) return null;

  return (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 320, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      className={cn(
        "h-screen bg-[#1C1C1C] border-l border-gray-800",
        "fixed top-14 right-0 z-0"
      )}
    >
      <AsideComponent />
    </motion.aside>
  );
};