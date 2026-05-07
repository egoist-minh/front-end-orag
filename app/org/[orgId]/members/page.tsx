'use client';

import { useState } from 'react';
import { useOrgStore, Member } from '@/lib/store/org-store';
import { Users, Shield, Eye, Trash2, UserPlus, Settings2, X } from 'lucide-react';

type Role = 'Owner' | 'Editor' | 'Viewer';

export default function OrgManagement() {
  const {
    members, setMembers,
    inviteName, setInviteName,
    inviteEmail, setInviteEmail,
    inviteRole, setInviteRole,
  } = useOrgStore();

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteName || !inviteEmail) return;

    const newMember: Member = {
      id: Math.max(0, ...members.map(m => m.id)) + 1,
      name: inviteName,
      email: inviteEmail,
      role: inviteRole
    };

    setMembers([...members, newMember]);
    setInviteName('');
    setInviteEmail('');
    setInviteRole('Viewer');
    setIsInviteModalOpen(false);
  };

  const handleRoleChange = (id: number, newRole: Role) => {
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const ownerCount = members.filter(m => m.role === 'Owner').length;
  const editorCount = members.filter(m => m.role === 'Editor').length;
  const viewerCount = members.filter(m => m.role === 'Viewer').length;

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-background p-8 max-w-6xl mx-auto w-full">
       <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary mb-2 flex items-center gap-3">
          <Settings2 className="w-8 h-8 text-on-surface-variant" />
          Quản lý Tổ chức
        </h1>
        <p className="text-on-surface-variant text-sm">Quản lý thành viên, phân quyền và thiết lập không gian nhóm.</p>
      </div>

      {/* Org Info Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <div className="bg-surface border border-surface-variant p-6 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
               <Users className="w-4 h-4" /> Tổng Thành viên
            </div>
            <div className="text-3xl font-bold font-mono text-primary">{members.length}</div>
         </div>
         <div className="bg-surface border border-surface-variant p-6 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
               <Shield className="w-4 h-4 text-emerald-400" /> Chủ sở hữu (Owner)
            </div>
            <div className="text-3xl font-bold font-mono text-primary">{ownerCount}</div>
         </div>
         <div className="bg-surface border border-surface-variant p-6 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
               <Settings2 className="w-4 h-4 text-blue-400" /> Biên tập viên (Editor)
            </div>
            <div className="text-3xl font-bold font-mono text-primary">{editorCount}</div>
         </div>
         <div className="bg-surface border border-surface-variant p-6 rounded-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
               <Eye className="w-4 h-4 text-on-surface-variant" /> Người xem (Viewer)
            </div>
            <div className="text-3xl font-bold font-mono text-primary">{viewerCount}</div>
         </div>
      </div>

      {/* User Management Table */}
      <div className="bg-surface border border-surface-variant rounded-sm flex flex-col">
         <div className="p-4 border-b border-surface-variant flex items-center justify-between">
           <h3 className="font-semibold text-primary uppercase text-sm tracking-widest font-mono">DANH SÁCH THÀNH VIÊN</h3>
           <button 
             onClick={() => setIsInviteModalOpen(true)}
             className="flex items-center gap-2 bg-primary text-on-primary text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-sm hover:bg-primary-container transition-colors shadow-sm"
           >
             <UserPlus className="w-4 h-4" /> Mời thành viên
           </button>
         </div>

         <div className="w-full overflow-x-auto">
           <table className="w-full text-left text-sm text-on-background">
             <thead className="bg-surface-highest text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
               <tr>
                 <th className="px-6 py-4 w-12 text-center">
                    <input type="checkbox" className="rounded-sm bg-background border-surface-variant w-4 h-4" />
                 </th>
                 <th className="px-6 py-4">Thành viên</th>
                 <th className="px-6 py-4">Vai trò định danh</th>
                 <th className="px-6 py-4 text-right">Thao tác</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-surface-variant bg-surface">
               {members.map(member => (
                 <tr key={member.id} className="hover:bg-surface-high transition-colors">
                   <td className="px-6 py-4 text-center">
                      <input 
                        type="checkbox" 
                        disabled={member.role === 'Owner'} 
                        className={`rounded-sm bg-background border-surface-variant w-4 h-4 ${member.role === 'Owner' ? 'opacity-30 cursor-not-allowed' : ''}`} 
                      />
                   </td>
                   <td className="px-6 py-4">
                     <div className="flex flex-col">
                        <span className="font-medium text-primary">{member.name}</span>
                        <span className="text-xs text-on-surface-variant font-mono mt-0.5">{member.email}</span>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     {member.role === 'Owner' ? (
                       <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs uppercase tracking-widest font-semibold border rounded-sm border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                          {member.role}
                       </span>
                     ) : (
                       <select 
                         value={member.role}
                         onChange={(e) => handleRoleChange(member.id, e.target.value as Role)}
                         className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs uppercase tracking-widest font-semibold border rounded-sm outline-none cursor-pointer hover:opacity-80 transition-opacity appearance-none pr-8
                            ${member.role === 'Editor' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 
                              'border-surface-variant text-on-surface-variant bg-surface-highest'}
                         `}
                         style={{
                           backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                           backgroundRepeat: 'no-repeat',
                           backgroundPosition: 'right 0.5rem center',
                           backgroundSize: '1em'
                         }}
                       >
                         <option value="Editor" className="bg-surface text-primary">Editor</option>
                         <option value="Viewer" className="bg-surface text-primary">Viewer</option>
                       </select>
                     )}
                   </td>
                   <td className="px-6 py-4 text-right">
                     <button 
                        disabled={member.role === 'Owner'}
                        onClick={() => handleRemoveMember(member.id)}
                        className={`p-2 rounded-sm text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors ${member.role === 'Owner' ? 'opacity-30 cursor-not-allowed hidden' : ''}`}
                        title="Loại bỏ thành viên"
                      >
                       <Trash2 className="w-4 h-4" />
                     </button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>

      {/* Invite Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-surface border border-surface-variant rounded-sm w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-surface-variant flex items-center justify-between bg-surface-highest">
              <h3 className="font-bold text-primary uppercase text-xs tracking-widest">Mời thành viên mới</h3>
              <button 
                onClick={() => setIsInviteModalOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <form onSubmit={handleInvite} className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Tên thành viên</label>
                <input 
                  type="text" 
                  required
                  value={inviteName}
                  onChange={(e) => setInviteName(e.target.value)}
                  placeholder="VD: Nguyễn Văn A"
                  className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm text-primary outline-none focus:border-primary transition-colors pr-10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Địa chỉ Email</label>
                <input 
                  type="email" 
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm text-primary outline-none focus:border-primary transition-colors pr-10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Vai trò</label>
                <select 
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as Role)}
                  className="bg-surface-highest border border-surface-variant rounded-sm px-4 py-2.5 text-sm text-primary outline-none focus:border-primary transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                  }}
                >
                  <option value="Editor">Biên tập viên (Editor)</option>
                  <option value="Viewer">Người xem (Viewer)</option>
                </select>
              </div>

              <div className="mt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-surface-variant text-on-surface-variant text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-surface-highest transition-colors"
                >
                  Hủy
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-3 bg-primary text-on-primary text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-primary-container transition-colors shadow-sm"
                >
                  Gửi lời mời
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
