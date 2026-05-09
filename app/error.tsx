'use client';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 bg-background text-on-background">
      <h2 className="text-2xl font-bold mb-4 text-error">Đã xảy ra lỗi hệ thống</h2>
      <button onClick={() => reset()} className="bg-primary text-on-primary px-4 py-2 rounded-sm uppercase tracking-widest text-sm font-semibold">
        Thử lại
      </button>
    </div>
  );
}
