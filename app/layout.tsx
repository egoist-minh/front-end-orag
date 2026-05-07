import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ["latin", "vietnamese"], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'OrAG - Knowledge Management System',
  description: 'A functionalist document curation and RAG interface.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} min-h-screen flex flex-col font-sans bg-background text-on-background`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
