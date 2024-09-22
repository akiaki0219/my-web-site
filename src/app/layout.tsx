import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/App/Header'
import Footer from '@/components/App/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My web site",
  description: "Akkiy's web site",
};

function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
            <div className="flex-grow bg-zinc-200">
              {children}
            </div>
          <Footer />          
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
