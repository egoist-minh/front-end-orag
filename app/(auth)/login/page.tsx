import Link from 'next/link';
import { ArrowLeft, BrainCircuit } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-background text-on-background font-sans">
      <div className="flex flex-1 flex-col justify-center px-8 sm:px-12 md:max-w-md border-r border-surface-variant bg-surface">
        <div className="mb-10 text-primary">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-outline-variant transition-colors mb-8 text-sm uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4" /> Về trang chủ
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <BrainCircuit className="w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">Đăng nhập</h1>
          </div>
          <p className="text-on-surface-variant text-sm">Truy cập vào hệ thống OrAG</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="identity">Email hoặc Tên người dùng</label>
            <input 
              id="identity" 
              type="text" 
              className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
              placeholder="nhân_viên_01"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant flex justify-between" htmlFor="password">
              Mật khẩu
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Quên mật khẩu?</Link>
            </label>
            <input 
              id="password" 
              type="password" 
              className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
              placeholder="••••••••"
            />
          </div>

          <Link href="/kb" className="mt-4 flex bg-primary text-on-primary font-semibold text-sm px-4 py-3 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest w-full justify-center">
            Đăng nhập
          </Link>
        </form>

        <div className="mt-8 text-center text-sm text-on-surface-variant">
          Chưa có tài khoản? <Link href="/register" className="text-primary hover:underline underline-offset-4">Đăng ký ngay</Link>
        </div>
      </div>
      <div className="hidden md:flex flex-1 flex-col items-center justify-center p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-highest/20 via-background to-background relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/orag-tech/1920/1080')] opacity-5 mix-blend-overlay"></div>
         <div className="max-w-lg text-center z-10">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Giao diện tĩnh. Hành động động.</h2>
            <p className="text-on-surface-variant">OrAG tối giản hóa độ phức tạp, giúp bạn tập trung vào phân tích thay vì thao tác trên giao diện.</p>
         </div>
      </div>
    </div>
  );
}
