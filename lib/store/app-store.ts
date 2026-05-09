import { create } from 'zustand';

export interface KB {
  id: string;
  name: string;
  updatedAt: string;
}

export interface Org {
  id: string;
  name: string;
  role: string;
  members: number;
}

export interface Document {
  id: string;
  name: string;
  size: string;
  status: 'done' | 'error' | 'processing';
  type: string;
}

interface AppStoreState {
  kbs: KB[];
  orgs: Org[];
  kbDocs: Record<string, Document[]>;
  orgDocs: Record<string, Document[]>;

  addKb: (kb: KB) => void;
  deleteKb: (id: string) => void;
  
  addOrg: (org: Org) => void;
  deleteOrg: (id: string) => void;
  
  deleteKbDoc: (kbId: string, docId: string) => void;
  deleteOrgDoc: (orgId: string, docId: string) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  kbs: [
    { id: '1', name: 'Tài liệu Kỹ thuật', updatedAt: '2 giờ trước' },
    { id: '2', name: 'Quy trình Nhân sự', updatedAt: '1 ngày trước' },
    { id: '3', name: 'Nghiên cứu Thị trường', updatedAt: '3 ngày trước' },
  ],
  orgs: [
    { id: 'org-vnu', name: 'Đại học Quốc gia', role: 'Owner', members: 42 },
    { id: 'org-tech', name: 'Khối Công nghệ', role: 'Editor', members: 15 },
  ],
  kbDocs: {
    '1': [
      { id: '1-doc-1', name: 'Quy chế công ty 2024.pdf', size: '2.4 MB', status: 'done', type: 'uploaded' },
      { id: '1-doc-2', name: 'Báo cáo tài chính Q1.xlsx', size: '4.5 MB', status: 'error', type: 'uploaded' },
      { id: '1-doc-3', name: 'Chính sách bảo mật.pdf', size: '5.6 MB', status: 'processing', type: 'processing' },
      { id: '1-doc-4', name: 'Quy trình Onboarding.docx', size: '1.2 MB', status: 'done', type: 'uploaded' }
    ],
    '2': [
      { id: '2-doc-1', name: 'Tài liệu Hướng dẫn.pdf', size: '3.1 MB', status: 'done', type: 'uploaded' }
    ],
    '3': []
  },
  orgDocs: {
    'org-vnu': [
      { id: 'org-vnu-doc-1', name: 'Quy chế đào tạo.pdf', size: '3.4 MB', status: 'done', type: 'uploaded' },
      { id: 'org-vnu-doc-2', name: 'Kế hoạch năm.xlsx', size: '4.5 MB', status: 'error', type: 'uploaded' },
      { id: 'org-vnu-doc-3', name: 'Định hướng 2025.pdf', size: '2.1 MB', status: 'processing', type: 'processing' }
    ],
    'org-tech': [
      { id: 'org-tech-doc-1', name: 'Tài liệu API.pdf', size: '1.1 MB', status: 'done', type: 'uploaded' }
    ]
  },

  addKb: (kb) => set((state) => ({ kbs: [...state.kbs, kb] })),
  deleteKb: (id) => set((state) => ({ kbs: state.kbs.filter((kb) => kb.id !== id) })),
  
  addOrg: (org) => set((state) => ({ orgs: [...state.orgs, org] })),
  deleteOrg: (id) => set((state) => ({ orgs: state.orgs.filter((org) => org.id !== id) })),
  
  deleteKbDoc: (kbId, docId) => set((state) => ({
    kbDocs: {
      ...state.kbDocs,
      [kbId]: (state.kbDocs[kbId] || []).filter(doc => doc.id !== docId)
    }
  })),
  deleteOrgDoc: (orgId, docId) => set((state) => ({
    orgDocs: {
      ...state.orgDocs,
      [orgId]: (state.orgDocs[orgId] || []).filter(doc => doc.id !== docId)
    }
  }))
}));
