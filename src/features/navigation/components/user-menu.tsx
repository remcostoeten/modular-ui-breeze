import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockUser } from '../data/navigation';

interface UserMenuProps {
  isExpanded: boolean;
}

export const UserMenu = ({ isExpanded }: UserMenuProps) => {
  return (
    <div className="px-3 py-2 mt-auto">
      <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
          <User size={20} />
        </div>
        <motion.div
          initial={false}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            width: isExpanded ? 'auto' : 0
          }}
          className="overflow-hidden"
        >
          <p className="text-sm font-medium truncate">{mockUser.name}</p>
          <p className="text-xs text-gray-500 truncate">{mockUser.email}</p>
        </motion.div>
      </div>
    </div>
  );
};