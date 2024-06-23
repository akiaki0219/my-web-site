import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from '@/components/App/Header'
import Footer from '@/components/App/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My web site",
  description: "Akkiy's web site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
