import type { Metadata } from 'next';
import { QueryProvider } from '@/shared/providers';
import './globals.css';
import { pretendard } from '@/shared/fonts';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js 16 + React 19 기반 보일러플레이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full antialiased ${pretendard.variable}`}>
      <body className="flex min-h-full flex-col">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
