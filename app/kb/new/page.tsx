'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Database, Plus } from 'lucide-react';
import Link from 'next/link';

export default function NewKBPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate creation request
    setTimeout(() => {
      const newId = `kb-${Date.now()}`;
      router.push(`/kb/${newId}`);
    }, 800);
  };

  return (
    <div className="flex-1 p-8 max-w-2xl mx-auto w-full mt-12">
      <div className="mb-8">
        <Link href="/kb" className="text-sm font-medium text-on-surface-variant hover:text-primary mb-4 inline-block">
          &larr; Quay lại danh sách
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-primary mb-2 flex items-center gap-3">
          <Database className="w-8 h-8" />
          Cơ sở tri thức mới
        </h1>
        <p className="text-on-surface-variant text-sm">Tạo một không gian lưu trữ và xử lý tài liệu mới.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-surface-variant p-6 rounded-sm flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-primary">Tên cơ sở tri thức</label>
          <input 
            type="text" 
            id="name" 
            required
            placeholder="VD: Tài liệu Dự án Alpha"
            className="bg-background border border-surface-variant text-on-background text-sm rounded-sm focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-bold text-primary">Mô tả (tùy chọn)</label>
          <textarea 
            id="description" 
            rows={4}
            placeholder="Nhập mô tả ngắn gọn về mục đích sử dụng..."
            className="bg-background border border-surface-variant text-on-background text-sm rounded-sm focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5 outline-none resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end pt-4 border-t border-surface-variant">
          <button 
            type="submit" 
            disabled={loading}
            className={`flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Đang tạo...' : <><Plus className="w-4 h-4" /> Tạo mới</>}
          </button>
        </div>
      </form>
    </div>
  );
}
