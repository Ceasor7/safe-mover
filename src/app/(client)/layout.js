import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import siteConfig from '../../../config/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Navbar />
        <hr />
        <div className="relative flex min-h-dvh flex-col bg-background">
          <main className=" flex-1">{children}</main>
        </div>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
