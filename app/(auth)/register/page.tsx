import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full bg-background text-on-background font-sans">
      <div className="hidden md:flex flex-1 flex-col items-center justify-center p-12 bg-surface border-r border-surface-variant relative overflow-hidden">
         <div className="max-w-lg z-10">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Đăng ký tài khoản hệ thống.</h2>
            <p className="text-on-surface-variant">Tạo Identity để sử dụng máy chủ phân tích tài liệu và kết nối với các mô-đun nhóm.</p>
         </div>
         <div className="absolute bottom-8 left-8 text-on-surface-variant text-xs font-mono opacity-50">
            INIT_SEQUENCE // REGISTRATION_PROTOCOL_V1
         </div>
      </div>

      <div className="flex flex-col justify-center px-8 sm:px-12 py-12 flex-1 max-w-2xl mx-auto overflow-y-auto">
        <div className="mb-10 text-primary">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-outline-variant transition-colors mb-8 text-sm uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4" /> Về trang chủ
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-6 h-6" />
            <h1 className="text-3xl font-bold tracking-tight">Cấp quyền truy cập</h1>
          </div>
          <p className="text-on-surface-variant text-sm">Điền thông tin định danh hệ thống</p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="username">Tên người dùng</label>
              <input 
                id="username" 
                type="text" 
                className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
                placeholder="johndoe_99"
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="nickname">Biệt danh</label>
              <input 
                id="nickname" 
                type="text" 
                className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
                placeholder="John D"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="phone">Số điện thoại</label>
            <input 
              id="phone" 
              type="tel" 
              className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
              placeholder="+84 900 000 000"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="password">Mật khẩu</label>
            <input 
              id="password" 
              type="password" 
              className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all"
              placeholder="Tối thiểu 8 ký tự"
              required
            />
          </div>

          <p className="text-xs text-on-surface-variant leading-relaxed">
            Bằng việc nhấn Đăng ký, bạn đồng ý với <Link href="#" className="underline hover:text-primary">Điều khoản dịch vụ</Link> và <Link href="#" className="underline hover:text-primary">Chính sách bảo mật</Link> của OrAG.
          </p>

          <Link href="/kb" className="mt-2 flex bg-primary text-on-primary font-semibold text-sm px-4 py-4 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest w-full justify-center">
            Khởi tạo định danh
          </Link>
        </form>

        <div className="mt-8 text-sm text-on-surface-variant">
          Đã có tài khoản? <Link href="/login" className="text-primary hover:underline underline-offset-4">Đăng nhập tại đây</Link>
        </div>
      </div>
    </div>
  );
}
