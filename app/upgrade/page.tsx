'use client';

import { User, Shield, Camera, KeyRound, X, CheckCircle2, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedBank, setSelectedBank] = useState('');

  return (
    <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">Hồ sơ cá nhân</h1>
        <p className="text-on-surface-variant text-sm">Quản lý định danh hệ thống và bảo mật tài khoản.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-1 flex flex-col gap-6">
          {/* Avatar Section */}
          <div className="bg-surface border border-surface-variant rounded-sm p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-surface-highest rounded-full flex items-center justify-center text-on-surface-variant mb-4 relative group">
              <User className="w-8 h-8" />
              <button className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
            <h2 className="text-primary font-semibold text-lg">John D</h2>
            <p className="text-on-surface-variant text-sm font-mono mt-1">johndoe_99</p>
            <div className="mt-4 px-3 py-1 bg-surface-highest text-xs uppercase tracking-widest rounded-sm text-on-surface-variant border border-outline-variant">
              System Admin
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Upgrade to Org CTA Section */}
          <div className="bg-gradient-to-br from-surface to-surface-highest border border-outline-variant rounded-sm p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
             <h3 className="font-bold text-2xl text-primary mb-2">Nâng cấp lên Tổ chức</h3>
             <p className="text-on-surface-variant text-sm mb-6 max-w-md">
               Mở khóa không gian chia sẻ tài liệu chung, quản lý phân quyền thành viên chi tiết và khả năng lập chỉ mục số lượng lớn.
             </p>
             <button 
               onClick={() => setIsUpgradeModalOpen(true)}
               className="bg-primary hover:bg-primary-container text-on-primary text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-colors shadow-sm"
             >
               Khởi tạo Tổ chức ngay
             </button>
          </div>

          {/* Personal Info Section */}
          <div className="bg-surface border border-surface-variant rounded-sm">
            <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-2">
              <User className="w-4 h-4 text-on-surface-variant" />
              <h3 className="font-semibold text-primary uppercase text-sm tracking-widest">Thông tin cơ bản</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">Tên người dùng</span>
                  <span className="text-sm font-medium text-primary">johndoe_99</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">Biệt danh</span>
                  <span className="text-sm font-medium text-primary">John D</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">Email</span>
                  <span className="text-sm font-medium text-primary">john@example.com</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">Số điện thoại</span>
                  <span className="text-sm font-medium text-primary">+84 900 000 000</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-surface-highest hover:bg-surface-bright text-on-background border border-surface-variant text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-sm transition-colors">
                  Chỉnh sửa hồ sơ
                </button>
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="bg-surface border border-surface-variant rounded-sm">
            <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-2">
              <Shield className="w-4 h-4 text-on-surface-variant" />
              <h3 className="font-semibold text-primary uppercase text-sm tracking-widest">Bảo mật</h3>
            </div>
            <div className="p-6">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="current-password">Mật khẩu hiện tại</label>
                  <input 
                    id="current-password" 
                    type="password" 
                    className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all max-w-md"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="new-password">Mật khẩu mới</label>
                  <input 
                    id="new-password" 
                    type="password" 
                    className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all max-w-md"
                    placeholder="••••••••"
                  />
                </div>
                 <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant" htmlFor="confirm-password">Xác nhận mật khẩu mới</label>
                  <input 
                    id="confirm-password" 
                    type="password" 
                    className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all max-w-md"
                    placeholder="••••••••"
                  />
                </div>
                <div className="mt-2">
                  <button type="submit" className="flex items-center gap-2 bg-primary text-on-primary font-semibold text-sm px-4 py-2.5 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest">
                    <KeyRound className="w-4 h-4" /> Cập nhật khóa
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-surface border border-surface-variant rounded-sm shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-variant flex items-center justify-between text-primary">
              <h3 className="font-bold text-lg">Nâng cấp lên Tổ chức</h3>
              <button 
                onClick={() => setIsUpgradeModalOpen(false)}
                className="text-on-surface-variant hover:text-error transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6">
              {/* Billing Cycle Toggle */}
              <div className="flex justify-center mb-2">
                <div className="bg-surface-highest p-1 rounded-sm border border-surface-variant inline-flex">
                  <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${billingCycle === 'monthly' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    Hàng tháng
                  </button>
                  <button 
                    onClick={() => setBillingCycle('annual')}
                    className={`px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${billingCycle === 'annual' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'} flex items-center gap-2`}
                  >
                    Hàng năm <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded-sm border border-emerald-500/30">-20%</span>
                  </button>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="border border-primary bg-primary/5 rounded-sm p-5 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] uppercase font-bold px-3 py-1 tracking-widest rounded-bl-sm border-b border-l border-primary">Khuyên dùng</div>
                    <h4 className="text-lg font-bold text-primary mb-1">Doanh nghiệp</h4>
                    <div className="flex items-end gap-1 mb-4">
                       <span className="text-3xl font-bold font-mono text-primary">{billingCycle === 'monthly' ? '499.000' : '399.000'}</span>
                       <span className="text-xs text-on-surface-variant mb-1 font-mono">VNĐ/tháng</span>
                    </div>
                    <ul className="flex flex-col gap-2 mt-auto text-sm text-on-surface">
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Không giới hạn thành viên</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100GB dung lượng lưu trữ</li>
                       <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Phân quyền thành viên cao cấp</li>
                    </ul>
                 </div>
                 
                 <div className="border border-surface-variant bg-surface rounded-sm p-5 flex flex-col opacity-60 cursor-not-allowed relative">
                    <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center p-6 text-center">
                       <p className="text-sm font-bold text-on-surface-variant mb-2">Doanh nghiệp lớn</p>
                       <button className="border border-surface-variant bg-surface px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-sm w-full">Liên hệ</button>
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-1 opacity-20">Enterprise</h4>
                    <div className="flex items-end gap-1 mb-4 opacity-20">
                       <span className="text-3xl font-bold font-mono text-primary">---</span>
                    </div>
                    <ul className="flex flex-col gap-2 mt-auto text-sm text-on-surface opacity-20">
                       <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-surface-variant"></div> Bắt buộc triển khai riêng</li>
                       <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-surface-variant"></div> Hỗ trợ 24/7 chuyên biệt</li>
                       <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-surface-variant"></div> Tùy chỉnh LLM nội bộ</li>
                    </ul>
                 </div>
              </div>

              {/* Payment Info */}
              <div className="mt-4 border-t border-surface-variant pt-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Phương thức thanh toán
                </h4>
                
                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-2">
                     <label className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">Chọn Ngân hàng</label>
                     <select 
                       value={selectedBank}
                       onChange={(e) => setSelectedBank(e.target.value)}
                       className="bg-background border border-surface-variant rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-outline focus:ring-1 focus:ring-outline transition-all text-on-surface-variant appearance-none"
                       style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
                     >
                       <option value="">-- Chọn ngân hàng để thanh toán --</option>
                       <option value="vcb">Vietcombank</option>
                       <option value="tcb">Techcombank</option>
                       <option value="mbb">MB Bank</option>
                       <option value="vtb">VietinBank</option>
                       <option value="bidv">BIDV</option>
                     </select>
                   </div>
                   
                   {selectedBank && (
                     <div className="bg-background border border-surface-variant p-4 rounded-sm flex flex-col items-center justify-center gap-2 text-center pb-6">
                        <div className="w-32 h-32 bg-surface-highest mb-2 rounded-sm flex items-center justify-center border border-surface-variant overflow-hidden">
                           {/* Fake QR generator visually */}
                           <div className="w-full h-full p-2 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-80">
                               {Array.from({length: 36}).map((_, i) => (
                                  <div key={i} className={`bg-primary ${(i * 7) % 11 > 4 ? 'opacity-100' : 'opacity-0'}`}></div>
                               ))}
                           </div>
                        </div>
                        <p className="text-xs text-on-surface-variant font-mono">Quét mã QR để thanh toán tự động</p>
                        <div className="mt-2 text-sm font-mono flex flex-col gap-1 items-start bg-surface-highest p-4 rounded-sm border border-surface-variant w-full max-w-sm">
                          <p className="flex justify-between w-full"><span className="text-on-surface-variant">Ngân hàng:</span> <strong className="text-primary tracking-widest uppercase">{selectedBank}</strong></p>
                          <p className="flex justify-between w-full"><span className="text-on-surface-variant">Số tài khoản:</span> <strong className="text-primary tracking-widest">1903 4455 6677</strong></p>
                          <p className="flex justify-between w-full"><span className="text-on-surface-variant">Nội dung CK:</span> <strong className="text-primary uppercase">ORAG {billingCycle === 'monthly' ? '1M' : '1Y'} JOHNDOE</strong></p>
                          <p className="flex justify-between w-full mt-2 pt-2 border-t border-surface-variant"><span className="text-on-surface-variant">Tổng tiền:</span> <strong className="text-emerald-400 font-bold">{billingCycle === 'monthly' ? '499.000' : '4.788.000'} VNĐ</strong></p>
                        </div>
                     </div>
                   )}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-surface-variant bg-surface-highest flex justify-end gap-3 rounded-b-sm shrink-0">
              <button 
                onClick={() => setIsUpgradeModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
              >
                Hủy
              </button>
              <button 
                disabled={!selectedBank}
                className={`px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-sm ${!selectedBank ? 'bg-surface-variant border border-transparent text-on-surface-variant cursor-not-allowed opacity-50' : 'bg-primary text-on-primary hover:bg-primary-container'}`}
              >
                Xác nhận nâng cấp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
