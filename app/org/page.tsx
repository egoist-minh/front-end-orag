import Link from 'next/link';
import { Building2, Plus, Users } from 'lucide-react';

export default function MyOrganizations() {
  const orgs = [
    { id: 'org-vnu', name: 'Đại học Quốc gia', role: 'Owner', members: 42 },
    { id: 'org-tech', name: 'Khối Công nghệ', role: 'Editor', members: 15 },
  ];

  return (
    <div className="flex-1 p-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-2 flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            Tổ chức của tôi
          </h1>
          <p className="text-on-surface-variant text-sm">Các không gian làm việc nhóm và doanh nghiệp.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-surface-highest text-on-background border border-surface-variant text-sm font-semibold px-4 py-2 rounded-sm hover:bg-surface-bright transition-colors uppercase tracking-widest">
            <Plus className="w-4 h-4" /> Tham gia
          </button>
          <Link href="/org/new" className="flex items-center gap-2 bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-sm hover:bg-primary-container transition-colors uppercase tracking-widest">
            <Plus className="w-4 h-4" /> Tạo mới
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orgs.map(org => (
          <Link href={`/org/${org.id}`} key={org.id} className="group flex flex-col bg-surface border border-surface-variant p-6 rounded-sm hover:border-outline transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-primary">{org.name}</h3>
              <span className="px-2 py-1 bg-surface-highest border border-surface-variant text-[10px] uppercase tracking-widest text-on-surface-variant rounded-sm">
                Vai trò: {org.role}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant font-mono mt-auto pt-6 border-t border-surface-variant">
              <Users className="w-4 h-4" /> {org.members} thành viên
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
