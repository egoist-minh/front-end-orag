import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background font-sans overflow-x-hidden text-on-background">
      <header className="flex items-center justify-between border-b border-surface-variant px-8 py-4">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-on-primary font-bold text-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <h2 className="text-primary text-xl font-bold tracking-tight">OrAG</h2>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/login" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">
            Đăng nhập
          </Link>
          <Link href="/register" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">
            Đăng ký
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-highest/20 via-background to-background">
        <div className="flex flex-col gap-6 max-w-4xl items-center">
          <h1 className="text-primary text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Tri thức. Tăng cường.
          </h1>
          <h2 className="text-on-surface-variant text-xl md:text-2xl font-light">
            Động cơ phân tích tài liệu tập trung dành cho các nhóm hiệu suất cao.
          </h2>
          <Link href="/login" className="mt-8 flex items-center justify-center gap-2 rounded bg-primary text-on-primary font-semibold text-sm px-8 py-4 hover:bg-primary-container transition-colors uppercase tracking-widest">
            Bắt đầu với hệ thống <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
