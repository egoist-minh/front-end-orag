import Link from 'next/link';
import { Database, Plus } from 'lucide-react';

export default function MyKnowledgeBases() {
  const kbs = [
    { id: '1', name: 'Tài liệu Kỹ thuật', updatedAt: '2 giờ trước' },
    { id: '2', name: 'Quy trình Nhân sự', updatedAt: '1 ngày trước' },
    { id: '3', name: 'Nghiên cứu Thị trường', updatedAt: '3 ngày trước' },
  ];

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
          <Link href={`/kb/${kb.id}`} key={kb.id} className="group block bg-surface border border-surface-variant p-6 rounded-sm hover:border-outline transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-surface-variant group-hover:bg-primary transition-colors"></div>
            <h3 className="text-lg font-bold text-primary mb-1">{kb.name}</h3>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mt-4 font-mono">
              <span>Cập nhật: {kb.updatedAt}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
