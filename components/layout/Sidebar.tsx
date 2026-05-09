'use client';

import Link from 'next/link';
import { Database, Building2, UserCog, LogOut, Terminal } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';

export function Sidebar() {
  const pathname = usePathname();

  // Hide global sidebar when inside a specific KB or Org workspace
  const isWorkspace = pathname ? ((pathname.includes('/kb/') || pathname.includes('/org/')) && 
                      !pathname.includes('/kb/new') && 
                      !pathname.includes('/org/new')) : false;

  if (isWorkspace) return null;

  return (
    <aside className="w-64 flex-shrink-0 border-r border-surface-variant bg-surface flex flex-col">
      <div className="p-6 border-b border-surface-variant flex items-center justify-between text-primary">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5" />
          <h2 className="text-lg font-bold tracking-tight">OrAG</h2>
        </div>
        <NotificationCenter />
      </div>
      
      <nav className="flex-1 p-4 flex flex-col gap-2">
        <div className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-2 px-3">Hệ thống của tôi</div>
        
        <Link href="/kb" className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${pathname?.startsWith('/kb') ? 'bg-surface-high text-primary' : 'hover:bg-surface-high text-on-background'}`}>
          <Database className="w-4 h-4 text-on-surface-variant" /> Cơ sở tri thức
        </Link>
        
        <Link href="/org" className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${pathname?.startsWith('/org') ? 'bg-surface-high text-primary' : 'hover:bg-surface-high text-on-background'}`}>
          <Building2 className="w-4 h-4 text-on-surface-variant" /> Tổ chức
        </Link>

        <div className="mt-6 mb-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant px-3">Tài khoản</div>
        
        <Link href="/upgrade" className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${pathname === '/upgrade' ? 'bg-surface-high text-primary' : 'hover:bg-surface-high text-on-background'}`}>
          <UserCog className="w-4 h-4 text-on-surface-variant" /> Hồ sơ cá nhân
        </Link>
      </nav>

      <div className="p-4 border-t border-surface-variant flex items-center">
        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium hover:bg-error/10 hover:text-error transition-colors text-on-surface-variant flex-1 justify-center">
          <LogOut className="w-4 h-4" /> Đăng xuất
        </Link>
      </div>
    </aside>
  );
}
