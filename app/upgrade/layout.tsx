import { Sidebar } from '@/components/layout/Sidebar';

export default function UpgradeRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background text-on-background font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden flex-shrink-0">
        <div className="flex-1 overflow-y-auto w-full max-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
}
