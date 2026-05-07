import { create } from 'zustand';

type Role = 'Owner' | 'Editor' | 'Viewer';

export interface Member {
  id: number;
  name: string;
  role: Role;
  email: string;
}

interface OrgStoreState {
  docsActiveTab: string;
  setDocsActiveTab: (tab: string) => void;
  docType: string;
  setDocType: (type: string) => void;

  memberActiveTab: string;
  setMemberActiveTab: (tab: string) => void;
  inviteName: string;
  setInviteName: (name: string) => void;
  inviteEmail: string;
  setInviteEmail: (email: string) => void;
  inviteRole: Role;
  setInviteRole: (role: Role) => void;
  
  members: Member[];
  setMembers: (members: Member[]) => void;
}

export const useOrgStore = create<OrgStoreState>((set) => ({
  docsActiveTab: 'uploaded',
  setDocsActiveTab: (tab) => set({ docsActiveTab: tab }),
  docType: 'pdf-text',
  setDocType: (type) => set({ docType: type }),

  memberActiveTab: 'members',
  setMemberActiveTab: (tab) => set({ memberActiveTab: tab }),
  inviteName: '',
  setInviteName: (name) => set({ inviteName: name }),
  inviteEmail: '',
  setInviteEmail: (email) => set({ inviteEmail: email }),
  inviteRole: 'Viewer',
  setInviteRole: (role) => set({ inviteRole: role }),
  
  members: [
    { id: 1, name: 'John Doe', role: 'Owner', email: 'john@example.com' },
    { id: 2, name: 'Alice Smith', role: 'Editor', email: 'alice@example.com' },
    { id: 3, name: 'Bob Johnson', role: 'Editor', email: 'bob@example.com' },
    { id: 4, name: 'Charlie Williams', role: 'Viewer', email: 'charlie@example.com' },
    { id: 5, name: 'Diana Prince', role: 'Viewer', email: 'diana@example.com' },
  ],
  setMembers: (members) => set({ members }),
}));
