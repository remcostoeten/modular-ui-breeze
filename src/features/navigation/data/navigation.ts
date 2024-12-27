import { 
  Home, Database, Table, FileCode2, Lock, FolderOpen, 
  Zap, Radio, Lightbulb, BarChart2, List, FileText, 
  Grid, Settings, Terminal, User
} from 'lucide-react';

export const navigationItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'table-editor', label: 'Table Editor', icon: Table, path: '/table-editor' },
  { id: 'sql-editor', label: 'SQL Editor', icon: FileCode2, path: '/sql-editor' },
  { id: 'database', label: 'Database', icon: Database, path: '/database' },
  { id: 'auth', label: 'Authentication', icon: Lock, path: '/auth' },
  { id: 'storage', label: 'Storage', icon: FolderOpen, path: '/storage' },
  { id: 'edge-functions', label: 'Edge Functions', icon: Zap, path: '/edge-functions' },
  { id: 'realtime', label: 'Realtime', icon: Radio, path: '/realtime' },
  { id: 'advisors', label: 'Advisors', icon: Lightbulb, path: '/advisors' },
  { id: 'reports', label: 'Reports', icon: BarChart2, path: '/reports' },
  { id: 'logs', label: 'Logs', icon: List, path: '/logs' },
  { id: 'api-docs', label: 'API Docs', icon: FileText, path: '/api-docs' },
  { id: 'integrations', label: 'Integrations', icon: Grid, path: '/integrations' },
] as const;

export const bottomNavigationItems = [
  { id: 'settings', label: 'Project Settings', icon: Settings, path: '/settings' },
  { id: 'commands', label: 'Commands', icon: Terminal, path: '/commands' },
] as const;

export const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
} as const;