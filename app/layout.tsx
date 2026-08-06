import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eduardo Lacerda — Desenvolvedor de Software',
  description: 'Portfolio de Eduardo Lacerda, Desenvolvedor de Software.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black">{children}</body>
    </html>
  );
}
