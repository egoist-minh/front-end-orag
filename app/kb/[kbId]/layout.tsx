import Link from 'next/link';
import { LayoutDashboard, Search, BrainCircuit, ChevronLeft, Database } from 'lucide-react';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { KbSidebarTitle } from '@/components/layout/SidebarTitle';

export default async function KBLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ kbId: string }>;
}) {
  const { kbId } = await params;
  return (
    <div className="flex h-full bg-background text-on-background font-sans overflow-hidden">
      {/* Sidebar sidebar for KB Workspace */}
      <aside className="w-64 flex-shrink-0 border-r border-surface-variant bg-surface flex flex-col">
        <div className="p-4 border-b border-surface-variant flex flex-col gap-4">
          <Link href="/kb" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-on-surface-variant hover:text-primary transition-colors">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to KBs
          </Link>
          <div className="flex items-center justify-between text-primary">
            <KbSidebarTitle kbId={kbId} />
            <NotificationCenter />
          </div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <div className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-2 px-3">Không gian làm việc</div>
          
          <Link href={`/kb/${kbId}`} className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium hover:bg-surface-high transition-colors text-on-background">
            <LayoutDashboard className="w-4 h-4 text-on-surface-variant" /> Tài liệu & Trạng thái
          </Link>
          
          <Link href={`/kb/${kbId}/search`} className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium hover:bg-surface-high transition-colors text-on-background">
            <Search className="w-4 h-4 text-on-surface-variant" /> Tìm kiếm Ngữ nghĩa
          </Link>

          <Link href={`/kb/${kbId}/chat`} className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium hover:bg-surface-high transition-colors text-on-background">
            <BrainCircuit className="w-4 h-4 text-on-surface-variant" /> LLM Chat
          </Link>
        </nav>

        <div className="p-4 border-t border-surface-variant flex items-center justify-center">
          <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">KB Space</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden">
        {children}
      </main>
    </div>
  );
}
