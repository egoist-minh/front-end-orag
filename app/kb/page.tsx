'use client';

import Link from 'next/link';
import { Database, Plus, Trash2 } from 'lucide-react';
import { useAppStore } from '@/lib/store/app-store';

export default function MyKnowledgeBases() {
  const { kbs, deleteKb } = useAppStore();

  return (
    <div className="flex-1 p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-2 flex items-center gap-3">
            <Database className="w-8 h-8" />
            Cơ sở tri thức của tôi
          </h1>
          <p className="text-on-surface-variant text-sm">Quản lý và truy cập các không gian tài liệu cá nhân của bạn.</p>
        </div>
        <Link href="/kb/new" className="flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest">
          <Plus className="w-4 h-4" /> Tạo mới
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kbs.map(kb => (
          <div key={kb.id} className="group block bg-surface border border-surface-variant rounded-sm hover:border-outline transition-colors relative overflow-hidden">
            <Link href={`/kb/${kb.id}`} className="block p-6">
              <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
              <h3 className="text-lg font-bold text-primary mb-1">{kb.name}</h3>
              <div className="flex items-center gap-4 text-xs text-on-surface-variant mt-4 font-mono">
                <span>Cập nhật: {kb.updatedAt}</span>
              </div>
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteKb(kb.id);
              }}
              className="absolute top-4 right-4 p-2 text-surface-variant hover:text-error transition-colors"
              title="Xóa Cơ sở tri thức"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
