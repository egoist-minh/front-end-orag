'use client';

import { useAppStore } from '@/lib/store/app-store';
import { Database, Building2 } from 'lucide-react';

export function KbSidebarTitle({ kbId }: { kbId: string }) {
  const { kbs } = useAppStore();
  const kb = kbs.find(k => k.id === kbId);

  return (
    <div className="flex items-center gap-3">
      <Database className="w-5 h-5" />
      <h2 className="text-base font-bold tracking-tight truncate">{kb ? kb.name : 'Cơ sở Tri thức'}</h2>
    </div>
  );
}

export function OrgSidebarTitle({ orgId }: { orgId: string }) {
  const { orgs } = useAppStore();
  const org = orgs.find(o => o.id === orgId);

  return (
    <div className="flex items-center gap-3">
      <Building2 className="w-5 h-5" />
      <h2 className="text-base font-bold tracking-tight truncate">{org ? org.name : 'Tổ chức Nhóm'}</h2>
    </div>
  );
}
