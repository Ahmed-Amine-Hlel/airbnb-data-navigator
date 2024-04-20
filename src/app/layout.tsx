import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb Price Optimization',
  description:
    'Explore our Business Intelligence case study on optimizing Airbnb pricing strategies, supervised by Yasmine CHAABANI and conducted by Ahmed Amine Hlel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
