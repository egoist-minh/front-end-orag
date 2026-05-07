'use client';

import { useState, useCallback } from 'react';
import { Bell, Check, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Invitation {
  id: string;
  sender: string;
  targetName: string;
  type: 'kb' | 'org';
  timestamp: string;
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [invitations, setInvitations] = useState<Invitation[]>([
    { id: '1', sender: 'admin@vnu.edu.vn', targetName: 'Dự án AI Global', type: 'org', timestamp: '10 phút trước' },
    { id: '2', sender: 'manager@orag.com', targetName: 'Wiki Kỹ thuật', type: 'kb', timestamp: '1 giờ trước' },
  ]);

  const handleAccept = useCallback((id: string) => {
    setInvitations(prev => prev.filter(inv => inv.id !== id));
    // In a real app, this would call an API
  }, []);

  const handleDecline = useCallback((id: string) => {
    setInvitations(prev => prev.filter(inv => inv.id !== id));
  }, []);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-sm hover:bg-surface-high transition-colors group"
      >
        <Bell className={`w-5 h-5 transition-colors ${invitations.length > 0 ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`} />
        {invitations.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface animate-pulse"></span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile/closing */}
            <div 
              className="fixed inset-0 z-40 bg-transparent" 
              onClick={() => setIsOpen(false)} 
            />
            
            <motion.div 
              drag
              dragMomentum={false}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 w-80 bg-surface border border-surface-variant rounded-sm shadow-2xl z-50 overflow-hidden cursor-default"
            >
              <div className="p-4 border-b border-surface-variant flex items-center justify-between bg-surface-highest cursor-move active:cursor-grabbing select-none hover:bg-surface-high transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-primary">Thông báo</h3>
                </div>
                <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-mono">{invitations.length}</span>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {invitations.length === 0 ? (
                  <div className="p-8 text-center flex flex-col items-center gap-3">
                    <Mail className="w-8 h-8 text-on-surface-variant opacity-20" />
                    <p className="text-sm text-on-surface-variant">Không có lời mời nào mới</p>
                  </div>
                ) : (
                  <div className="divide-y divide-surface-variant">
                    <AnimatePresence>
                      {invitations.map(inv => (
                        <motion.div 
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          key={inv.id} 
                          className="p-4 hover:bg-surface-highest transition-colors flex flex-col gap-3"
                        >
                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-on-background">
                              <span className="font-bold text-primary">{inv.sender}</span> đã mời bạn tham gia 
                              <span className="font-bold"> {inv.targetName}</span> ({inv.type === 'kb' ? 'Cơ sở tri thức' : 'Tổ chức'})
                            </p>
                            <span className="text-[10px] text-on-surface-variant font-mono">{inv.timestamp}</span>
                          </div>
                          <div className="flex gap-2 mt-1">
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleAccept(inv.id); }}
                              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-primary text-on-primary text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-primary-container transition-colors"
                            >
                              <Check className="w-3 h-3" /> Chấp nhận
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleDecline(inv.id); }}
                              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-surface-highest text-on-surface-variant text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-white/10 transition-colors"
                            >
                              <X className="w-3 h-3" /> Từ chối
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {invitations.length > 0 && (
                <div className="p-3 border-t border-surface-variant flex justify-center bg-surface-highest">
                  <button className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors">
                    Xem tất cả hoạt động
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
